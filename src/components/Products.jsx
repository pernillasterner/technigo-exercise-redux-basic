import { Product } from "./Product";

export const Products = () => {
  // const allProducts = useSlector((state) =>state.products)

  // TODO: fetch all products from the store
  const allProducts = [];
  return (
    <div className="products">
      <Product />
    </div>
  );
};
