const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Order = require("../models/Order");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

//DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//GET USER ORDERS
//everyone can see products so no need for a token verification function to be passed
//do we need to change the id to userId?
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find(req.params.id);
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//GET all, only admin get get this info

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    
})

module.exports = router;
