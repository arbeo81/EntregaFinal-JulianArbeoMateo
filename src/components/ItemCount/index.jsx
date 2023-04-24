import React, { useEffect, useState } from "react";
import styles from "./itemCount.module.scss";

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className={styles.container}>
			<button className={styles.menos} disabled={count <= 1} onClick={decrease}>
				-
			</button>
			<span className={styles.span}>{count}</span>
			<button className={styles.mas} disabled={count >= stock} onClick={increase}>
				+
			</button>
			<div>
				<button className={styles.agregar} disabled={stock <= 0} onClick={() => onAdd(count)}>
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default ItemCount;
