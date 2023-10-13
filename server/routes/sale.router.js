import express from "express";
const router = express.Router();
import {
  addSale,
  deleteSale,
  getSales,
  updateSale,
} from "../controllers/sale.controllers.js";

router.post("/", async (req, res) => {
  try {
    const sale = req.body;

    const allSales = await addSale(sale);

    if (allSales.length >= 0) {
      res.status(201).json({
        message: "Sale added successfully",
        sales: allSales,
      });
    } else {
      res.status(404).json({
        error: "Sale could not be saved",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: ` Internal server error : ${error.message}` });
  }
});

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const allSales = await getSales(userId);

    if (allSales.length >= 0) {
      res.status(200).json({
        message: "Successfully retrived sale items",
        sales: allSales,
      });
    } else {
      res.status(404).json({
        error: "Faild to retrive sale items",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/:itemId", async (req, res) => {
  const itemId = req.params.itemId;
  const { description, amount } = req.body;

  try {
    const allSales = await updateSale(itemId, {
      description,
      amount,
    });

    if (allSales.length >= 0) {
      res.status(200).json({
        message: "Successfully updated sale items",
        sales: allSales,
      });
    }
  } catch (error) {
    res.status(500).json({ error: `Internal server error ${error.message}` });
  }
});

router.delete("/:itemId", async (req, res) => {
  const itemId = req.params.itemId;

  try {
    const allSales = await deleteSale(itemId);

    if (allSales.length >= 0) {
      res.status(200).json({
        message: "Successfully deleted sale item",
        sales: allSales,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
