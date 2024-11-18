import React from "react";
import { useAppSelector } from "../redux/store";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <header className={styles.header}>
      <h1>My E-Commerce App</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/cart">🛒 Cart({cart.items.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
