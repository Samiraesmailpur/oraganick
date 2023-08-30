import React, { useEffect, useState } from "react";
import { instance } from "@redux/products/operations";
import Container from "@components/Container/Container";
import "./AdminPanel.scss";

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      try {
        const response = await instance.get("api/orders");
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getOrders();
  }, []);

  return (
    <Container>
      <div className="admin-panel">
        <h2 className="admin-panel__title">Orders</h2>
        <table className="admin-panel__table">
          <thead>
            <tr>
              <th className="admin-panel__table-header">Order ID</th>
              <th className="admin-panel__table-header">Full Name</th>
              <th className="admin-panel__table-header">Email</th>
              <th className="admin-panel__table-header">Address</th>
              <th className="admin-panel__table-header">Number</th>
              <th className="admin-panel__table-header">Products</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className="admin-panel__table-row" key={order._id}>
                <td className="admin-panel__table-cell">{order._id}</td>
                <td className="admin-panel__table-cell">{order.fullName}</td>
                <td className="admin-panel__table-cell">{order.email}</td>
                <td className="admin-panel__table-cell">{order.address}</td>
                <td className="admin-panel__table-cell">{order.number}</td>
                <td className="admin-panel__table-cell">
                  {order.products.map((product) => (
                    <div key={product._id}>
                      {product.name} - Quantity: {product.quantity}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default AdminPanel;
