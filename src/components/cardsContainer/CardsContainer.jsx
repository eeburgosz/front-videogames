import React, { useEffect } from "react";
import style from "./cardsContainer.module.css";
import { Card } from "../";
import { getAllVideogames } from "../../redux-toolkit/thunks";
import { useDispatch, useSelector } from "react-redux";

export const CardsContainer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllVideogames());
	}, [dispatch]);

	const { allVideogames: data } = useSelector((state) => state.videogames);

	return (
		<div className={style.container}>
			{data.map((d) => (
				<Card
					key={d.id}
					id={d.id}
					name={d.name}
					img={d.img}
					Genres={d.Genres}
				/>
			))}
		</div>
	);
};
