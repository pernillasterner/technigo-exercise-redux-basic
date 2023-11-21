import { CartItems } from "./CartItems";

export const Cart = () => {
  // TODO: etch products from the cart store
  const products = [];

  // TODO: calculate total from the sum of all products in the cart
  const totalPrice = 0;

  return (
    <div className="cart">
      <div className="total">
        <span className="emoji" role="img" aria-label="cart">
          🛒
        </span>
        <div className="amount">Total: {totalPrice}:-</div>
      </div>

      <ul className="items">
        <CartItems />
      </ul>
    </div>
  );
};
