import React from "react";
import style from "./card.module.css";

export const Card = ({ id, name, img, Genres }) => {
	const handleClick = (id) => {
		console.log(id);
	};

	return (
		<>
			<div className={style.card__}>
				<div className={style.card__front}>
					<img className={style.card__image} src={img} alt={name} />
					<span>{name}</span>
				</div>
				<div className={style.card__content}>
					<p className={style.card__title}>Genres</p>
					<p className={style.card__genres}>
						{Genres.map((genre) => (
							<li key={genre.id}>{genre.name}</li>
						))}
					</p>
					<button type="button" value={id} onClick={() => handleClick(id)}>
						Show
					</button>
				</div>
			</div>
			{/* ----------------------------------------------- */}
			<button
				value={id}
				type="button"
				className={style.card}
				onClick={() => handleClick(id)}
			>
				<img src={img} alt={name} className={style.img} />
				<div className={style.textBox}>
					<div className={style.textContent}>
						<p className={style.h1}>{name}</p>
					</div>
					<p className={style.p}>
						{Genres.map((genre) => (
							<li key={genre.id} className={style.li}>
								{genre.name}
							</li>
						))}
					</p>
					<div></div>
				</div>
			</button>
		</>
	);
};
