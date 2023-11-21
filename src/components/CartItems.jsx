export const CartItems = () => {
  return (
    <li>
      <span className="emoji" role="img" aria-label="product-title">
        EMOJI
      </span>
      <div className="info">
        <span className="quantity">x1</span>
        <span className="sum">100:-</span>
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
