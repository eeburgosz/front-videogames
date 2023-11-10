import React from "react";
import { Navbar, CardsContainer, Filters, Footer } from "../../components/";
import style from "./homeView.module.css";

export const HomeView = () => {
	return (
		<div>
			<Navbar />
			<div className={style.container}>
				<Filters />
				<CardsContainer />
			</div>
			<Footer />
		</div>
	);
};
