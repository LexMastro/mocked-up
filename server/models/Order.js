const mongoose = require("mongoose");
const { Schema } = mongoose;

// const orderSchema = new Schema(
//   {
//     userId: { type: String, required: true },
//     products: [
//       {
//         type: Schema.Types.ObjectId,
//       ref: 'Product'
//       },
//         quantity: {
//           type: Number,
//           default: 1,
//         },
//     ],
//     amount: { type: Number, required: true },
//     address: { type: Object, required: true },
//     status: { type: String, default: "pending" },
//   },
//   { timestamps: true }
// );

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
