import React from "react";
import style from "./homeView.module.css";
import { Navbar, CardsContainer, Filters, Footer } from "../../components/";

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
