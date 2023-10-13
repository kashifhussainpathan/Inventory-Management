import express from "express";
const router = express.Router();
import {
  addInventory,
  deleteInventory,
  getInventories,
  updateInventory,
} from "../controllers/inventory.controller.js";

router.post("/", async (req, res) => {
  try {
    const inventory = req.body;

    const allInventories = await addInventory(inventory);

    if (allInventories) {
      res.status(201).json({
        message: "inventory added successfully",
        inventories: allInventories,
      });
    } else {
      res.status(404).json({
        error: "Inventory could not be saved",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const allInventories = await getInventories(userId);

    if (allInventories.length >= 0) {
      res.status(200).json({
        message: "Successfully retrived inventory items",
        inventories: allInventories,
      });
    } else {
      res.status(404).json({
        error: "Faild to retrive inventory items",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/:itemId", async (req, res) => {
  const itemId = req.params.itemId;
  const { name, price, quantity } = req.body;

  try {
    const allInventories = await updateInventory(itemId, {
      name,
      price,
      quantity,
    });

    if (allInventories.length >= 0) {
      res.status(200).json({
        message: "Successfully updated inventory items",
        inventories: allInventories,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:itemId", async (req, res) => {
  const itemId = req.params.itemId;

  try {
    const allInventories = await deleteInventory(itemId);

    if (allInventories.length >= 0) {
      res.status(200).json({
        message: "Successfully deleted inventory item",
        inventories: allInventories,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
