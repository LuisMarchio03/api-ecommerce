import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";

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

  async execute({ product_id, user_id, quantities }) {
    const user = await this.usersRepository.findById(user_id);
    const product = await this.productsRepository.findById(product_id);

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

    return session.url;
  }
}

export { CreateCheckoutSessionUseCase };