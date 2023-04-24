import React from "react";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";

const NavBar = () => {
	const activeStyle = {
    color: "black",
  };	
	return (
		<div className={styles.container}>
			<nav className={styles.navbar}>
				<div className={styles.navDiv}>
					<NavLink to="/"> 
          <img className={styles.logo} style={activeStyle} src="https://i.postimg.cc/Gmn8G0RN/Logo.jpg" alt="logo"  />
					</NavLink>
				</div>
						<NavLink className={styles.navLink} to="/categoria/carritos"  style={({ isActive }) => (isActive ? activeStyle : undefined)}>
							<h4>Carritos</h4>
						</NavLink>
						<NavLink className={styles.navLink} to="/categoria/sillas"  style={({ isActive }) => (isActive ? activeStyle : undefined)}>
							<h4>Sillas</h4>
						</NavLink>
						<NavLink className={styles.navLink} to="/categoria/cunas"  style={({ isActive }) => (isActive ? activeStyle : undefined)}>
							<h4>Cunas</h4>
						</NavLink>
						<NavLink className={styles.navLink} to="/categoria/bañeras"  style={({ isActive }) => (isActive ? activeStyle : undefined)}>
							<h4>Bañeras</h4>
						</NavLink>
						<NavLink className={styles.navLink} to="cart"  style={({ isActive }) => (isActive ? activeStyle : undefined)}>
							<CartWidget />
						</NavLink>
			</nav>
		</div>
	);
};

export default NavBar;
