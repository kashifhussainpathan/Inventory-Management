import React from "react";
import { useDispatch } from "react-redux";

import {
  handleCloseModal,
  handleEditInventoryItem,
  handleShowInventoryForm,
  handleDeleteInventoryItem,
} from "../../utils/inventory.utils";
import Modal from "../../components/modal/Modal";
import InventoryForm from "../../components/InventoryForm";
import { inventoryState } from "../../actions/inventory.action";

const Inventory = () => {
  const dispatch = useDispatch();
  const inventories = inventoryState("inventories");
  const showInventoryForm = inventoryState("showInventoryForm");
  const isInventoriesLoading = inventoryState("isInventoriesLoading");

  return (
    <div>
      {showInventoryForm && (
        <Modal closeModal={() => handleCloseModal(dispatch)} key="inventory">
          <InventoryForm />
        </Modal>
      )}

      <button onClick={() => handleShowInventoryForm(dispatch)}>
        Add Inventory Item
      </button>

      {/* <div>
        {isInventoriesLoading
          ? "loading..."
          : inventories.map((item) => {
              const { _id, name, price, quantity } = item;
              return (
                <div key={_id}>
                  <h4>Name: {name}</h4>
                  <p>Price: {price}</p>
                  <p>Quantity: {quantity}</p>
                  <button
                    onClick={() => handleDeleteInventoryItem(_id, dispatch)}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditInventoryItem(item, dispatch)}
                  >
                    Edit
                  </button>
                </div>
              );
            })}
      </div> */}

      <div>
        <table>
          <thead>
            <tr>
              <th>Sn. No.</th>
              <th>Name</th>
              <th>Quantity </th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {inventories?.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>

                  <td>
                    <div className="tableBtn">
                      <span
                        onClick={() => handleEditInventoryItem(item, dispatch)}
                      >
                        Edit
                      </span>
                      <span
                        onClick={() =>
                          handleDeleteInventoryItem(item._id, dispatch)
                        }
                      >
                        Delete
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
