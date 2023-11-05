import React from "react";
import style from "./registerPage.module.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
	return (
		<div className={style.container}>
			<form className={style.subcontainer}>
				<h2>Register</h2>
				<div className={style.section}>
					<span className="p-float-label">
						<InputText id="email" />
						<label htmlFor="email">Email</label>
					</span>
				</div>
				<div className={style.section}>
					<span className="p-float-label">
						<InputText id="password" type="password" />
						<label htmlFor="password">Password</label>
					</span>
				</div>
				<div className={style.section}>
					<span className="p-float-label">
						<InputText id="repeat-password" type="password" />
						<label htmlFor="repeat-password">Repeat password</label>
					</span>
				</div>
				<div className={style.buttons}>
					<Button label="Register" type="submit" />
				</div>
				<div className={style.link}>
					<Link to={"/auth/login"}>Or sign in</Link>
				</div>
			</form>
		</div>
	);
};
