import React from "react";
import Image from "next/image";
import { addItem } from "../redux/cartSlice";
import { useAppDispatch } from "../redux/store";

import styles from "../styles/ProductCard.module.scss";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  description,
  thumbnail,
}) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id, name: title, price, quantity: 1 }));
  };

  return (
    <div className={styles.card}>
      <Image
        src={thumbnail}
        alt={title}
        width={350}
        height={350}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price.toFixed(2)}</p>
      <button onClick={handleAddToCart} className={styles.addButton}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
