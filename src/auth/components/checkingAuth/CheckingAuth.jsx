import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import style from "./checkingAuth.module.css";

export const CheckingAuth = () => {
	return (
		<div className={style.container}>
			<ProgressSpinner />
		</div>
	);
};
