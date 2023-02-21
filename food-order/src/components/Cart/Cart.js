import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCts = useContext(CartContext);
  const totalAmount = `$${cartCts.totalAmount.toFixed(2)}`;
  const hasItems = cartCts.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCts.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCts.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderhandler = async (userData) => {
    setIsSubmitting(true);
    await fetch('http:.../oreds.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCts.items
      })
    });
    setIsSubmitting(false);
    setDidSubmit(true);

    cartCts.clearCart();
  }

  const cartItems = cartCts.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    );
  });

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {/* {hasItems &&  */}
      <button className={classes.button} onClick={orderHandler}>
        Order
      </button>
      {/* } */}
    </div>
  );

  const cartModalContent = (
    <>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderhandler} onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittinModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = <p>Successfully sent the order!</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittinModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
