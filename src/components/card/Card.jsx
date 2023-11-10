import React from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import style from "./card.module.css";
import noImage from "../../assets/noImage.jpg";

export const Card = ({ id, name, img, Genres }) => {
	return (
		<>
			<div className={style.card__}>
				<div className={style.card__front}>
					<img className={style.card__image} src={img || noImage} alt={name} />
					<span>{name}</span>
				</div>
				<div className={style.card__content}>
					<p className={style.card__title}>Genres</p>
					<p className={style.card__genres}>
						{Genres.map((genre) => (
							<li key={genre.id}>{genre.name}</li>
						))}
					</p>
					<Link to={`/videogame/${id}`}>
						<Button
							className={style.info}
							type="button"
							label="+ info"
							value={id}
						/>
					</Link>
				</div>
			</div>
			{/* ----------------------------------------------- */}

			<Link to={`/videogame/${id}`} className={style.card}>
				<img src={img || noImage} alt={name} className={style.img} />
				<div className={style.textBox}>
					<div className={style.textContent}>
						<p className={style.h1}>{name}</p>
					</div>
					<p className={style.p}>
						{Genres.map((genre, i) => (
							<React.Fragment key={genre.id}>
								{genre.name}
								{i < Genres.length - 1 ? ", " : "."}
							</React.Fragment>
						))}
					</p>
					<div></div>
				</div>
			</Link>
		</>
	);
};
