import products from "../data/products";
import ProductCard from "./ProductCard";
import "./Products.css";

function Products() {

  return (

    <div className="products-grid">

      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}

    </div>

  );

}

export default Products;