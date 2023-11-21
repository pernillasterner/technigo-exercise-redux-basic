import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export const Cart = () => {
  // Fetching products from the cart store
  const products = useSelector((store) => store.cart.items);

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
      test
      <ul className="items">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
