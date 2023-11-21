import { useSelector } from "react-redux";
import { Product } from "./Product";

export const Products = () => {
  // All products from the store
  const allProducts = useSelector((store) => store.products);
  console.log(allProducts);
  return (
    <div className="products">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
