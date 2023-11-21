export const CartItem = ({ product }) => {
  return (
    <li>
      <span className="emoji" role="img" aria-label={product.title}>
        {product.emoji}
      </span>
      <div className="info">
        <span className="quantity">x1</span>
        <span className="sum">{product.price}:-</span>
      </div>

      <span className="actions">
        <button type="button" onCLick={() => {}}>
          -
        </button>
        <button type="button" onCLick={() => {}}>
          +
        </button>
      </span>
    </li>
  );
};
