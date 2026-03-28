import { useParams } from "react-router-dom";

import shirts from "../data/shirts";
import pants from "../data/pants";
import tshirts from "../data/tshirts";
import shoes from "../data/shoes";
import watch from "../data/watch";
import track from "../data/track";
import slippers from "../data/slippers";
import chain from "../data/chain";
import ring from "../data/ring";

import ProductCard from "../components/ProductCard";

import "./CategoryPage.css";

function CategoryPage() {

  const { categoryName } = useParams();

  let products = [];

  if (categoryName === "shirts") products = shirts;
  if (categoryName === "pants") products = pants;
  if (categoryName === "tshirts") products = tshirts;
  if (categoryName === "shoes") products = shoes;
  if (categoryName === "watch") products = watch;
  if (categoryName === "track") products = track;
  if (categoryName === "slippers") products =slippers;
  if (categoryName === "chain") products = chain;
  if (categoryName === "ring") products = ring

  return (

    <div className="category-page">

      <h2 className="category-title">{categoryName}</h2>

      <div className="products-grid">

        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}

      </div>

    </div>

  );
}

export default CategoryPage;