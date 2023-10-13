import Inventory from "../models/inventory.model.js";

export const getInventories = async (userId) => {
  try {
    const allInventories = await Inventory.find({ userId });
    return allInventories;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addInventory = async (newInventory) => {
  try {
    const inventory = new Inventory(newInventory);

    if (inventory) {
      const addedInventory = await inventory.save();

      const userId = newInventory.userId;
      const allInventories = await getInventories(userId);
      return allInventories;
    } else {
      throw new Error("Failed to create inventory!");
    }
  } catch (error) {
    throw new Error(`Failed to add inventory: ${error.message}`);
  }
};

export const updateInventory = async (itemId, newData) => {
  try {
    const updatedInventory = await Inventory.findOneAndUpdate(
      { _id: itemId },
      newData,
      { new: true }
    );

    if (updatedInventory) {
      const userId = updatedInventory.userId;
      const allInventories = await getInventories(userId);
      return allInventories;
    } else {
      throw new Error("Failed to update inventory item!");
    }
  } catch (error) {
    throw new Error(`Failed to update inventory item: ${error.message}`);
  }
};

export const deleteInventory = async (itemId) => {
  try {
    const deletedInventory = await Inventory.findOneAndDelete(
      { _id: itemId },
      { new: true }
    );

    if (deletedInventory) {
      const userId = deletedInventory.userId;
      const allInventories = await getInventories(userId);
      return allInventories;
    } else {
      throw new Error("Failed to delete inventory item!");
    }
  } catch (error) {
    throw new Error(`Failed to delete inventory item: ${error.message}`);
  }
};
