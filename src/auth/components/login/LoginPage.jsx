import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import {
	checkingAuthenticationWithGithub,
	checkingAuthenticationWithGoogle,
	startLoginWithEmailAndPassword,
} from "../../../redux-toolkit/auth/thunks";
import {
	emailValidator,
	passwordValidator,
} from "../../../utils/formValidators";

import Swal from "sweetalert2";
import style from "./loginPage.module.css";

export const LoginPage = () => {
	const dispatch = useDispatch();

	const initialState = {
		email: "",
		password: "",
	};

	const { status, errorMessage } = useSelector((state) => state.auth);

	const isAuthenticating = useMemo(() => status === "checking", [status]);

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
		const emailError = emailValidator(formValue.email);
		if (emailError)
			return Swal.fire({
				icon: "error",
				title: "Oops!",
				text: emailError,
			});
		const errorPassword = passwordValidator(formValue.password);
		if (errorPassword)
			return Swal.fire({
				icon: "error",
				title: "Oops!",
				text: errorPassword,
			});
		dispatch(startLoginWithEmailAndPassword(formValue));
	};

	const navigate = useNavigate();
	const handleBack = () => {
		navigate("/videogames");
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
					{errorMessage ? (
						<Message
							severity="error"
							text={errorMessage}
							style={{ marginBottom: "1rem", width: "20rem" }}
						/>
					) : null}
					<div className={style.buttons}>
						<Button disabled={isAuthenticating} label="Login" type="submit" />
					</div>
				</form>
				<Divider
					layout="horizontal"
					className="flex md:hidden mb-3"
					align="center"
				>
					<b>OR</b>
				</Divider>
				<div className={style.auth}>
					<Button
						disabled={isAuthenticating}
						onClick={handleGoogleSignIn}
						label="Login with Google"
						type="submit"
						icon="pi pi-google"
					/>
					<Button
						disabled={isAuthenticating}
						onClick={handleGithubSignIn}
						label="Login with Github"
						type="submit"
						icon="pi pi-github"
					/>
				</div>
				<div className={style.link}>
					<Link to={"/auth/register"}>Or create an account</Link>
				</div>
			</div>
			<Button
				icon="pi pi-arrow-left"
				className={style.goBack}
				onClick={handleBack}
			/>
		</div>
	);
};
