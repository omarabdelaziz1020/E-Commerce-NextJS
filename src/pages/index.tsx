import React from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import styles from "../styles/Home.module.scss";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

const Home: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const { data } = await axios.get("https://dummyjson.com/products");
  return { props: { products: data.products } };
}
