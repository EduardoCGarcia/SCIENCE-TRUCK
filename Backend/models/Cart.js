const { model, Schema } = require("mongoose");

const CartSchema = new Schema({
  nombre: { type: String, required: true, unique: true },
  imagen: { type: String, required: true },
  amount: { type: Number, required: true },
  p_descuento: { type: Number, required: true },
  precio: { type: Number, required: true },
});

module.exports = model("Cart", CartSchema);