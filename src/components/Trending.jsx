import trending from "../data/trending";
import ProductCard from "./ProductCard";
import "./Trending.css";

function Trending() {

  return (

    <section className="trending">

      <h2>Trending Products</h2>

      <div className="products-grid">

        {trending.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}

      </div>

    </section>

  );

}

export default Trending;