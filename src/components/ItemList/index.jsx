import React from "react";
import Item from "../Item";
import styles from "./itemList.module.scss";

const ItemList = ({ data = [] }) => {
	return data.map((products) => <Item className={styles.container} key={products.id} info={products} />);
};

export default ItemList;
