import React, { useMemo, useState } from "react";
import style from "./registerPage.module.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import {
	emailValidator,
	passwordValidator,
	repeatPasswordValidator,
} from "../../../utils/formValidators";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { startRegisteringWithEmailAndPassword } from "../../../redux-toolkit/auth/thunks";
import { Message } from "primereact/message";

export const RegisterPage = () => {
	const dispatch = useDispatch();

	const initialState = {
		email: "",
		password: "",
		repeatPassword: "",
	};

	const { status, errorMessage } = useSelector((state) => state.auth);
	const isCheckingAuthentication = useMemo(
		() => status === "checking",
		[status]
	);

	const [formRegister, setFormRegister] = useState(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormRegister({
			...formRegister,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const emailError = emailValidator(formRegister.email);
		if (emailError)
			return Swal.fire({
				icon: "error",
				title: "Oops!",
				text: emailError,
			});
		const errorPassword = passwordValidator(formRegister.password);
		if (errorPassword)
			return Swal.fire({
				icon: "error",
				title: "Oops!",
				text: errorPassword,
			});
		const errorRepeatPassword = repeatPasswordValidator(
			formRegister.repeatPassword
		);
		if (errorRepeatPassword)
			return Swal.fire({
				icon: "error",
				title: "Oops!",
				text: errorRepeatPassword,
			});
		dispatch(
			startRegisteringWithEmailAndPassword(
				formRegister.email,
				formRegister.password
			)
		);
	};

	return (
		<div className={style.container}>
			<form className={style.subcontainer} onSubmit={handleSubmit}>
				<h2>Register</h2>
				<div className={style.section}>
					<span className="p-float-label">
						<InputText
							id="email"
							name="email"
							type="email"
							value={formRegister.email}
							onChange={handleChange}
						/>
						<label htmlFor="email">Email</label>
					</span>
				</div>
				<div className={style.section}>
					<span className="p-float-label">
						<InputText
							id="password"
							type="password"
							name="password"
							value={formRegister.password}
							onChange={handleChange}
						/>
						<label htmlFor="password">Password</label>
					</span>
				</div>
				<div className={style.section}>
					<span className="p-float-label">
						<InputText
							id="repeat-password"
							type="password"
							name="repeatPassword"
							value={formRegister.repeatPassword}
							onChange={handleChange}
						/>
						<label htmlFor="repeat-password">Repeat password</label>
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
					<Button
						label="Register"
						type="submit"
						disabled={isCheckingAuthentication}
					/>
				</div>
				<div className={style.link}>
					<Link to={"/auth/login"}>Or sign in</Link>
				</div>
			</form>
		</div>
	);
};
