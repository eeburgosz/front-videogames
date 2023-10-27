import React from "react";
import style from "./homeView.module.css";
import { CardsContainer } from "../../components";
import { Navbar } from "./../../components/";
// import { Card } from "./../../components/";

export const HomeView = () => {
	return (
		<div>
			<Navbar />
			{/* <Card /> */}
			<CardsContainer />
		</div>
	);
};
