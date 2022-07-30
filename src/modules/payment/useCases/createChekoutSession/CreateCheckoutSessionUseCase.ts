import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICreateCheckoutDTO } from "../../dtos/ICreateCheckoutDTO";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);

@injectable()
class CreateCheckoutSessionUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute({
    product_id,
    user_id,
    quantities,
  }: ICreateCheckoutDTO): Promise<string> {
    const user = await this.usersRepository.findById(user_id);
    const product = await this.productsRepository.findById(product_id);

    if (!product) {
      throw new AppError("Products does not exists");
    }

    if (product?.quantities < quantities) {
      throw new AppError("Stock unavailable");
    }

    let customerId = user?.stripe_customer_id;
    if (!user?.stripe_customer_id) {
      const stripeCustomer = await stripe.customers.create({
        name: user?.name,
        email: user?.email,
      });

      await this.usersRepository.update(user_id, {
        stripe_customer_id: stripeCustomer.id,
      });
      customerId = stripeCustomer.id;
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product?.name,
            },
            unit_amount: Number(product?.price),
          },
          quantity: Number(quantities),
        },
      ],
      mode: "payment",
      success_url: `${process.env.STRIPE_SUCCESS_URL}`,
      cancel_url: `${process.env.STRIPE_CANCEL_URL}`,
    });

    await this.productsRepository.update(product_id, {
      ...product,
      quantities: Number(product?.quantities) - Number(quantities),
    });

    return session.url;
  }
}

export { CreateCheckoutSessionUseCase };
