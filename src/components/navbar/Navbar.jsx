import React, { useState } from "react";
import style from "./navbar.module.css";
import { getVideogamesByName } from "../../redux-toolkit/videogames/thunks";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//!-----------------------------------------------------------
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { startLogout } from "../../redux-toolkit/auth/thunks";
//!-----------------------------------------------------------
import noPic from "../../assets/noProfilePic.png";

export const Navbar = () => {
	//!----------------------------------------
	const [visible, setVisible] = useState(false);
	//!----------------------------------------
	const dispatch = useDispatch();

	const { displayName, photoURL, email } = useSelector((state) => state.auth);

	const [value, setValue] = useState("");

	const { status } = useSelector((state) => state.auth);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setValue("");
		dispatch(getVideogamesByName(value));
	};

	const handleLogout = () => {
		dispatch(startLogout());
	};

	return (
		<div className={style.container}>
			<div className={style.containerImage}>
				{status === "authenticated" ? (
					<>
						<img src={photoURL || noPic} alt="Foto de perfil" />
						<code>Hola, {displayName?.split(" ")[0] || email}!</code>
					</>
				) : null}
			</div>
			<div className={style.containerLinks}>
				{status === "authenticated" ? (
					<Link onClick={handleLogout}>
						<i className="pi pi-user"></i>
						<span>Logout</span>
					</Link>
				) : (
					<Link to="/auth/login">
						<i className="pi pi-user"></i>
						<span>Login</span>
					</Link>
				)}
				<Link to={status === "authenticated" ? "/create" : "/auth/login"}>
					<i className="pi pi-plus"></i>
					<span>Create</span>
				</Link>
				<Link>
					<i className="pi pi-info-circle"></i>
					<span>About me</span>
				</Link>
				<form onSubmit={handleSubmit}>
					<input
						value={value}
						type="text"
						className={style.input}
						placeholder="Search..."
						onChange={handleChange}
					/>
				</form>
			</div>
			{window.innerWidth <= 768 ? (
				<>
					<div
						className={`card flex justify-content-center ${style.hamburger}`}
					>
						<Sidebar visible={visible} onHide={() => setVisible(false)}>
							<h2 className={style.menu}>Menu</h2>
							<div className={style.__containerImage}>
								{status === "authenticated" ? (
									<>
										<img src={photoURL || noPic} alt="Foto de perfil" />
										<code>Hola, {displayName?.split(" ")[0] || email}!</code>
									</>
								) : null}
							</div>
							<div className={style.radioInputs}>
								<label className={style.radio}>
									<input type="radio" name="radio" />
									{status === "authenticated" ? (
										<Link onClick={handleLogout}>
											<i className="pi pi-user"></i>
											<span className={style.name}>Logout</span>
										</Link>
									) : (
										<Link to="/auth/login">
											<i className="pi pi-user"></i>
											<span className={style.name}>Login</span>
										</Link>
									)}
								</label>
								<label className={style.radio}>
									<input type="radio" name="radio" />
									<Link
										to={status === "authenticated" ? "/create" : "/auth/login"}
									>
										<i className="pi pi-plus"></i>
										<span className={style.name}>Create</span>
									</Link>
								</label>

								<label className={style.radio}>
									<input type="radio" name="radio" />
									<Link>
										<i className="pi pi-info-circle"></i>
										<span className={style.name}>About me</span>
									</Link>
								</label>
							</div>
						</Sidebar>
						<Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
					</div>
				</>
			) : null}
		</div>
	);
};

/* 
<input
						type="checkbox"
						id="checkbox"
						className={style.checkbox}
						onClick={handleClick}
					/>
					<label htmlFor="checkbox" className={style.toggle}>
						<div className={`${style.bars} ${style.bar1}`}></div>
						<div className={`${style.bars} ${style.bar2}`}></div>
						<div className={`${style.bars} ${style.bar3}`}></div>
					</label>
					<div className={toggle ? style.menu : style.menuHidden}>
						<div className={style.radioInputs}>
							<label className={style.radio}>
								<input type="radio" name="radio" />
								{status === "authenticated" ? (
									<Link onClick={handleLogout}>
										<i className="pi pi-user"></i>
										<span className={style.name}>Logout</span>
									</Link>
								) : (
									<Link to="/auth/login">
										<i className="pi pi-user"></i>
										<span className={style.name}>Login</span>
									</Link>
								)}
							</label>
							<label className={style.radio}>
								<input type="radio" name="radio" />
								<Link
									to={status === "authenticated" ? "/create" : "/auth/login"}
								>
									<i className="pi pi-plus"></i>
									<span className={style.name}>Create</span>
								</Link>
							</label>

							<label className={style.radio}>
								<input type="radio" name="radio" />
								<div>
									<i className="pi pi-info-circle"></i>
									<span className={style.name}>About me</span>
								</div>
							</label>
						</div>
					</div>
*/
