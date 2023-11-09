import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogamesByName } from "../../redux-toolkit/videogames/thunks";
import { startLogout } from "../../redux-toolkit/auth/thunks";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Sidebar } from "primereact/sidebar";
import style from "./navbar.module.css";
import noPic from "../../assets/noProfilePic.png";

export const Navbar = () => {
	const [visible, setVisible] = useState(false);
	const [value, setValue] = useState("");
	const [info, setInfo] = useState(false);
	const [position, setPosition] = useState("center");

	const dispatch = useDispatch();

	const { displayName, photoURL, email } = useSelector((state) => state.auth);
	const { status } = useSelector((state) => state.auth);

	console.log(email);

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

	const show = (position) => {
		setPosition(position);
		setInfo(true);
	};
	return (
		<div className={style.container}>
			<div className={style.containerImage}>
				{status === "authenticated" ? (
					<>
						<img src={photoURL || noPic} alt="Profile pic" />
						<code>Hola, {displayName?.split(" ")[0] || email}!</code>
					</>
				) : null}
			</div>
			<div className={style.containerLinks}>
				{status === "authenticated" ? (
					<>
						<Link onClick={handleLogout}>
							<i className="pi pi-user"></i>
							<span>Logout</span>
						</Link>
						<Link to="/create">
							<i className="pi pi-plus"></i>
							<span>Create</span>
						</Link>
					</>
				) : (
					<>
						<Link to="/auth/login">
							<i className="pi pi-user"></i>
							<span>Login</span>
						</Link>
						<Link onClick={() => show("top")}>
							<i className="pi pi-plus"></i>
							<span>Create</span>
						</Link>
					</>
				)}
				<Link to="/aboutMe">
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
										<>
											<Link onClick={handleLogout}>
												<i className="pi pi-user"></i>
												<span className={style.name}>Logout</span>
											</Link>
											<label className={style.radio}>
												<input type="radio" name="radio" />
												<Link to="/create">
													<i className="pi pi-plus"></i>
													<span className={style.name}>Create</span>
												</Link>
											</label>
										</>
									) : (
										<>
											<Link to="/auth/login">
												<i className="pi pi-user"></i>
												<span className={style.name}>Login</span>
											</Link>
											<label className={style.radio}>
												<input type="radio" name="radio" />
												<Link onClick={() => show("top")}>
													<i className="pi pi-plus"></i>
													<span className={style.name}>Create</span>
												</Link>
											</label>
										</>
									)}
								</label>
								<label className={style.radio}>
									<input type="radio" name="radio" />
									<Link to="/aboutMe">
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

			<Dialog
				header="Wait..."
				visible={info}
				position={position}
				style={{ width: "50vw" }}
				onHide={() => setInfo(false)}
				draggable={false}
				resizable={false}
			>
				<p className="m-0">
					In order to create a videogame, you must first be logged in. Do you
					want to log in?
				</p>
				<div className={style.dialogButtons}>
					<Link onClick={() => setInfo(false)}>
						<Button label="No" icon="pi pi-times" className="p-button-text" />
					</Link>
					<Link to="/auth/login">
						<Button label="Yes" icon="pi pi-check" />
					</Link>
				</div>
			</Dialog>
		</div>
	);
};
