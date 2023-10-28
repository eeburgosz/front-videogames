import React, { useEffect, useState } from "react";
import style from "./cardsContainer.module.css";
import { Card } from "../";
import { getAllVideogames } from "../../redux-toolkit/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Paginator } from "primereact/paginator";
//! archivo mock para data
import { data } from "../../utils/mock";

export const CardsContainer = () => {
	//! Por ahora uso archivo mock para poder ver por túnel dev
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getAllVideogames());
	// }, [dispatch]);

	// const { allVideogames: data } = useSelector((state) => state.videogames);
	//!---------------------------------------------------------

	const [first, setFirst] = useState(0);
	const [rows, setRows] = useState(15);

	const dataPerPage = () => {
		return data.slice(first, first + 15);
	};

	const onPageChange = (event) => {
		setFirst(event.first);
		setRows(event.rows);
	};

	return (
		<div className={style.container}>
			<div className={style.cards__container}>
				{dataPerPage().map((d) => (
					<Card
						key={d.id}
						id={d.id}
						name={d.name}
						img={d.img}
						Genres={d.Genres}
					/>
				))}
			</div>
			<div className={`card`}>
				<Paginator
					first={first}
					rows={rows}
					totalRecords={data.length}
					onPageChange={onPageChange}
					className={style.paginator}
				/>
			</div>
		</div>
	);
};
