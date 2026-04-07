import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import API from "../api/api";
import ProductCard from "../components/ProductCard";

import "./CategoryPage.css";

function CategoryPage() {

  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const categoryMap = {
      shirts: "shirt",
      pants: "pant",
      shoes: "shoe",
      tshirts:"tshirt",
      slippers:"slipper",
      accessories: "accessory"
    };

    const apiCategory = categoryMap[categoryName] || categoryName;

    API.get(`/products/?category=${apiCategory}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [categoryName]);

  return (
    <div className="category-page">

      <h2 className="category-title">
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </h2>

      <div className="products-grid">

        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}

      </div>

    </div>
  );

}

export default CategoryPage;