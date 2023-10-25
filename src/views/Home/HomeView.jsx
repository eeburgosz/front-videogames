import React, { useEffect } from "react";
import style from "./homeView.module.css";
import { getUsers } from "../../utils/firestore-config";

export const HomeView = () => {
	useEffect(() => {
		getUsers();
	}, []);
	return (
		<div>
			<h3>Nombres</h3>
			<h3>Apellidos</h3>
			<h6>Mails</h6>
		</div>
	);
};
