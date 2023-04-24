import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";
import styles from "./itemDetail.module.scss";

export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};

	return (
		<div className={styles.container}>
			<div className={styles.div}>
				<img className={styles.divImage} src={data.image} alt="" />
				<div className={styles.contenido}>
					<h1>{data.title}</h1>
					<p className={styles.descripcion}><strong>Descripción:</strong> {data.description}</p>
					<p className={styles.precio}><strong>Precio:</strong> ${data.price}</p>
					{goToCart ? (
						<Link className={styles.finalizar} to="/cart"> Finalizar compra</Link>
					) : (
						<ItemCount initial={1} stock={5} onAdd={onAdd} />
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
