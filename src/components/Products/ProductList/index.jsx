import { useEffect, useState } from "react";
import { getAllPro } from "../../../services/product";
import ProductCard from "../ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllPro().then(({ data }) => setProducts(data.data));
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 max-w-[1270px] mx-auto">
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading.....</div>
      )}
    </div>
  );
};

export default ProductList;
