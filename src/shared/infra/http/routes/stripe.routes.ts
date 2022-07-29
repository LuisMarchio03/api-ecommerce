import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateCheckoutSessionController } from "@modules/payment/useCases/createChekoutSession/CreateCheckoutSessionController";
// const stripe = require("stripe")(`${process.env.SECRET_KEY}`);

const stripeRoutes = Router();

const createCheckoutSessionController = new CreateCheckoutSessionController();

stripeRoutes.post(
  "/create-checkout-session",
  ensureAuthenticated,
  createCheckoutSessionController.handle
);

// stripeRoutes.post(
//   "/create-checkout-session",
//   ensureAuthenticated,
//   async (req, res) => {
//     try {
//       const {
//         productName,
//         productPrice,
//         productQuantities,
//         stripe_customer_id,
//       } = req?.body;

//       let customerId = stripe_customer_id;
//       if (!stripe_customer_id) {
//         const stripeCustomer = await stripe.customers.create({
//           // email: session.user.email,
//           // metadata
//         });

//         // UPDATE TABLE USER - stripe_customer_id
//         customerId = stripeCustomer.id;
//       }

//       const session = await stripe.checkout.sessions.create({
//         customer: customerId,
//         line_items: [
//           {
//             price_data: {
//               currency: "usd",
//               product_data: {
//                 name: productName,
//               },
//               unit_amount: Number(productPrice),
//             },
//             quantity: Number(productQuantities),
//           },
//         ],
//         mode: "payment",
//         success_url: "https://example.com/success",
//         cancel_url: "https://example.com/cancel",
//       });

//       res.redirect(303, session.url);
//     } catch (err) {
//       res.status(400).send(err);
//     }
//   }
// );

export { stripeRoutes };
