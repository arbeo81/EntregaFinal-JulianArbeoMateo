import React from "react";
import { useCartContext } from "../../context/CartContext";
import { BsCartFill } from "react-icons/bs";
import styles from "./cartWidget.module.scss"

const CartWidget = () => {
	const { totalProducts } = useCartContext();

	return (
		<>
			<BsCartFill className={styles.cart}/>
			<span>{totalProducts() || ""}</span>
		</>
	);
};

export default CartWidget;
