import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import styles from "./itemListContainer.scss"
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";


export const ItemListContainer = ({}) => {
	const [data, setData] = useState([]);
	const { categoriaId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "productos");
		if (categoriaId) {
			const queryFilter = query(
				queryCollection,
				where("category", "==", categoriaId),
			);
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(queryCollection).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [categoriaId]);

	return (
		<>
		<h1 className={styles.title}>Productos: {categoriaId}</h1>
			<ItemList className={styles.container} data={data} />
			
		</>
	);
};

export default ItemListContainer;
