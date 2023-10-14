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
            <thead className="heading-row">
              <tr>
                <th>Sn. No.</th>
                <th>Name</th>
                <th>Quantity </th>
                <th>Price</th>
                <th>Total Price</th>
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
                    <td>{item.price * item.quantity}</td>

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
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className="total">Total :-</td>
                <td>
                  <b>
                    {inventories?.reduce(
                      (acc, { price, quantity }) => acc + price * quantity,
                      0
                    )}
                  </b>
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
