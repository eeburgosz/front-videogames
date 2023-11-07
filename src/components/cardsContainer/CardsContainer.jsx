import React, { useEffect, useState } from "react";
import style from "./cardsContainer.module.css";
import { getAllVideogames } from "../../redux-toolkit/videogames/thunks";
import { Card } from "../";
import { useDispatch, useSelector } from "react-redux";
import { Paginator } from "primereact/paginator";
import { Skeleton } from "primereact/skeleton";

const skeletons = [];
for (let i = 0; i < 15; i++) {
	skeletons.push(<Skeleton key={i} className={style.skeleton}></Skeleton>);
}

export const CardsContainer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllVideogames());
	}, [dispatch]);

	const { allVideogames: data, isLoading } = useSelector(
		(state) => state.videogames
	);

	// console.log(data);
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
			{isLoading ? (
				<div className={style.cards__container}>{skeletons}</div>
			) : data.length === 0 ? (
				<h2 className={style.empty}>No videogames found</h2>
			) : (
				<>
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
				</>
			)}
		</div>
	);
};
