import React, { useState } from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";

import "primeicons/primeicons.css";

export const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleClick = (e) => {
		setToggle(e.target.checked);
	};

	return (
		<div className={style.container}>
			<div className={style.containerImage}>
				<img src="asdas" alt="Foto de perfil" />
				<code>Nombre</code>
			</div>
			<div className={style.containerLinks}>
				<Link>
					<i className="pi pi-user"></i>
					<span>Login</span>
				</Link>
				<Link>
					<i className="pi pi-plus"></i>
					<span>Create</span>
				</Link>
				<Link>
					<i className="pi pi-info-circle"></i>
					<span>About me</span>
				</Link>
				<div>
					<input type="text" className={style.input} placeholder="Search..." />
				</div>
			</div>

			{/* ------------------------------------- */}
			{window.innerWidth <= 768 ? (
				<>
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
								<div>
									<i className="pi pi-user"></i>
									<span className={style.name}>Login</span>
								</div>
							</label>
							<label className={style.radio}>
								<input type="radio" name="radio" />
								<div>
									<i className="pi pi-plus"></i>
									<span className={style.name}>Create</span>
								</div>
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
				</>
			) : null}
		</div>
	);
};
