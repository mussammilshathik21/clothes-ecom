import { useEffect, useState } from "react";
import API from "../api/api";

function MyOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    API.get("/orders/")
      .then(res => {

        setOrders(res.data);

      })
      .catch(err => {

        console.log(err);

      });

  }, []);

  return (

    <div style={{ padding: "40px" }}>

      <h2>My Orders</h2>

      {orders.length === 0 ? (

        <p>No orders yet</p>

      ) : (

        orders.map(order => (

          <div key={order.id} style={{ border: "1px solid #ddd", marginBottom: "20px", padding: "15px" }}>

            <h3>Order #{order.id}</h3>

            {order.items.map(item => (

              <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "10px" }}>

                {/* PRODUCT IMAGE */}
                <img
                  src={`http://127.0.0.1:8000${item.product.image}`}
                  alt={item.product.name}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />

                <div>

                  <h4>{item.product.name}</h4>

                  <p>Price: ${item.price}</p>

                  <p>Quantity: {item.quantity}</p>

                </div>

              </div>

            ))}

          </div>

        ))

      )}

    </div>

  );
}

export default MyOrders;