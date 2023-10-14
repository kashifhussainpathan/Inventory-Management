import React from "react";

import { useDispatch } from "react-redux";
import { addInventory } from "../services/inventory.service";
import { handleInventoryInputs } from "../utils/inventory.utils";
import {
  editInventory,
  inventoryState,
  setShowInventoryForm,
} from "../actions/inventory.action";

const InventoryForm = () => {
  const dispatch = useDispatch();
  const isInventoryEdit = inventoryState("isInventoryEdit");
  const inventoriesInputs = inventoryState("inventoryInputs");

  const handleAddInventoryItemCLick = (e) => {
    e.preventDefault();
    if (!isInventoryEdit) {
      addInventory({ ...inventoriesInputs }, dispatch);
    } else {
      dispatch(editInventory(inventoriesInputs._id, inventoriesInputs));
    }
    dispatch(setShowInventoryForm(false));
  };

  return (
    <div>
      <form onSubmit={handleAddInventoryItemCLick}>
        <label htmlFor="Name">
          Item Name:
          <input
            type="text"
            id="Name"
            name="name"
            value={inventoriesInputs.name}
            placeholder="inventory name"
            onChange={(e) =>
              handleInventoryInputs(e, dispatch, inventoriesInputs)
            }
          />
        </label>

        <label htmlFor="quantity">
          Quantity:
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={inventoriesInputs.quantity}
            placeholder="quantity"
            onChange={(e) =>
              handleInventoryInputs(e, dispatch, inventoriesInputs)
            }
          />
        </label>

        <label htmlFor="price">
          Price:
          <input
            type="text"
            id="price"
            name="price"
            value={inventoriesInputs.price}
            placeholder="price"
            onChange={(e) =>
              handleInventoryInputs(e, dispatch, inventoriesInputs)
            }
          />
        </label>

        <button type="submit">
          {" "}
          {isInventoryEdit ? "Edit Inventory" : "Add Inventory"}{" "}
        </button>
      </form>
    </div>
  );
};

export default InventoryForm;
