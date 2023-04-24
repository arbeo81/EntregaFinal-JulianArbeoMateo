import React from "react";
import { Link } from "react-router-dom";
import styles from "./item.module.scss";

const Item = ({ info }) => {
	return (
		
		<Link to={`/detalle/${info.id}`}>
			<div className={styles.itemContainer}>
				<div className={styles.item}>
				<img className={styles.img} src={info.image} alt="" width={300} />
				<p>{info.title}</p>
				<p>${info.price}</p>
				</div>
			</div>
		</Link>
		
	);
};

export default Item;
