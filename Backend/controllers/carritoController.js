const Cart = require('../models/Cart');
const Producto = require('../models/Producto');


exports.addProductCart = async (req, res) => {
  const { nombre, imagen, precio, p_descuento } = req.body;

  /* Nos fijamos si tenemos el producto */
  const estaEnProducts = await Producto.findOne({ nombre });

  /* Nos fijamos si todos los campos vienen con info */
  const noEstaVacio = nombre !== "" && imagen !== "" && precio !== "" && p_descuento !== "";

  /* Nos fijamos si el producto ya esta en el carrito */
  const estaEnElCarrito = await Cart.findOne({ nombre });

  /* Si no tenemos el producto */
  if (!estaEnProducts) {
    res.status(400).json({
      mensaje: "Este producto no se encuentra en nuestra base de datos",
    });

    /* Si nos envian algo y no esta en el carrito lo agregamos */
  } else if (noEstaVacio && !estaEnElCarrito) {
    const newProductInCart = new Cart({ nombre, imagen, precio, p_descuento, amount: 1 });

    /* Y actualizamos la prop inCart: true en nuestros productos */
    await Producto.findByIdAndUpdate(
      estaEnProducts?._id,
      { inCart: true, nombre, imagen, precio, p_descuento },
      { new: true }
    )
      .then((producto) => {
        newProductInCart.save();
        res.json({
          mensaje: `El producto fue agregado al carrito`,
          producto,
        });
      })
      .catch((error) => console.error(error));

    /* Y si esta en el carrito avisamos */
  } else if (estaEnElCarrito) {
    res.status(400).json({
      mensaje: "El producto ya esta en el carrito",
    });
  }
};


exports.getProductsCart = async (req, res) => {
  try {
    const productsCart = await Cart.find();
    res.json(productsCart);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};