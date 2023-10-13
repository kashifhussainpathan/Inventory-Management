import Sale from "../models/sale.model.js";

export const getSales = async (userId) => {
  try {
    const allSales = await Sale.find({ userId });
    return allSales;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addSale = async (newsale) => {
  try {
    const sale = new Sale(newsale);

    if (sale) {
      const addedsale = await sale.save();

      const userId = newsale.userId;
      const allSales = await getSales(userId);

      return allSales;
    } else {
      throw new Error("Failed to create sale!");
    }
  } catch (error) {
    throw new Error(`Failed to add sale: ${error.message}`);
  }
};

export const updateSale = async (itemId, newData) => {
  try {
    const updatedSale = await Sale.findOneAndUpdate({ _id: itemId }, newData, {
      new: true,
    });

    if (updatedSale) {
      const userId = updatedSale.userId;
      const allSales = await getSales(userId);
      return allSales;
    } else {
      throw new Error("Failed to update sale item!");
    }
  } catch (error) {
    throw new Error(`Failed to update sale item: ${error.message}`);
  }
};

export const deleteSale = async (itemId) => {
  try {
    const deletedSale = await Sale.findOneAndDelete(
      { _id: itemId },
      { new: true }
    );

    if (deletedSale) {
      const userId = deletedSale.userId;
      const allSales = await getSales(userId);
      return allSales;
    } else {
      throw new Error("Failed to delete sale item!");
    }
  } catch (error) {
    throw new Error(`Failed to delete sale item: ${error.message}`);
  }
};
