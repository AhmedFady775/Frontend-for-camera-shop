import React from "react";
import "./Cart.css";
import ITable from "../Items/ITable";

function Cart() {
  return (
    <div class="Background_Cart">
      <div class="Shopping_Cart">
        <h1 class="Cart_Title">Shopping Cart</h1>
        <div className="price">Price</div>
        <div className="Bought_Item">
          <ITable />
        </div>
      </div>
    </div>
  );
}

export default Cart;
