import "./inventory.css";
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

      <div className="inventory flex">
        <button onClick={() => handleShowInventoryForm(dispatch)}>
          Add Inventory Item
        </button>

        <div>
          <table>
            <thead>
              <tr>
                <th>Sn. No.</th>
                <th>Name</th>
                <th>Quantity </th>
                <th>Price</th>
                <th>Update</th>
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
                          onClick={() =>
                            handleEditInventoryItem(item, dispatch)
                          }
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
    </div>
  );
};

export default Inventory;
