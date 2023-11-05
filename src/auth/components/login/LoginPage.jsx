import React, { useState } from "react";
import style from "./loginPage.module.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import { Divider } from "primereact/divider";
import { useDispatch } from "react-redux";
import {
	checkingAuthentication,
	checkingAuthenticationWithGithub,
	checkingAuthenticationWithGoogle,
} from "../../../redux-toolkit/auth/thunks";

export const LoginPage = () => {
	const dispatch = useDispatch();

	const initialState = {
		email: "",
		password: "",
	};

	const [formValue, setFormValue] = useState(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValue({
			...formValue,
			[name]: value,
		});
	};

	const handleGoogleSignIn = (e) => {
		dispatch(checkingAuthenticationWithGoogle());
	};
	const handleGithubSignIn = (e) => {
		dispatch(checkingAuthenticationWithGithub());
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(checkingAuthentication(formValue));
	};

	return (
		<div className={style.container}>
			<div className={style.subcontainer}>
				<form onSubmit={handleSubmit}>
					<h2>Login</h2>
					<div className={style.section}>
						<span className="p-float-label">
							<InputText
								value={formValue.email}
								name="email"
								id="email"
								onChange={handleChange}
							/>
							<label htmlFor="email">Email</label>
						</span>
					</div>
					<div className={style.section}>
						<span className="p-float-label">
							<InputText
								value={formValue.password}
								name="password"
								id="password"
								type="password"
								onChange={handleChange}
							/>
							<label htmlFor="password">Password</label>
						</span>
					</div>
					<div className={style.buttons}>
						<Button label="Login" type="submit" />
					</div>
				</form>
				<Divider layout="horizontal" className="flex md:hidden" align="center">
					<b>OR</b>
				</Divider>
				<Button
					onClick={handleGoogleSignIn}
					label="Login with Google"
					type="submit"
					icon="pi pi-google"
				/>
				<Button
					onClick={handleGithubSignIn}
					label="Login with Github"
					type="submit"
					icon="pi pi-github"
				/>
				<div className={style.link}>
					<Link to={"/auth/register"}>Or create an account</Link>
				</div>
			</div>
		</div>
	);
};
