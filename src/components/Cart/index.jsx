import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import styles from "./cart.module.scss";

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	const order = {
		buyer: {
		 	name: "Comprador",
			email: "prueba@gmail.com",
			phone: "12345678",
			address: "calle falsa 123",
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({id}) => console.log(id));
		alert("Compra realizada con exito"
		 + order.buyer.name + " " + order.buyer.email + " " + order.buyer.phone + " " + order.buyer.address + " " + order.total + " " );
	
};


	if (cart.length === 0) {
		return (
			<>
				<div className={styles.div}>
				<p >No hay elementos en el carrito</p>
				<Link  to="/">Hacer compras</Link>
				</div>
			</>
		);
	}

	return (
		<>
		<h1>Carrito de la compra</h1>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p className={styles.parrafo}>Total: {totalPrice()}</p>
			<div>
			<button className={styles.emitir} onClick={handleClick}>Terminar compra</button>
		</div>
		</>
	);
};

export default Cart;
