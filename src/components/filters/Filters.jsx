import React, { useEffect, useState } from "react";
import style from "./filters.module.css";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	getFilterByRating,
	getFilterBySort,
	getFilterBySourceAndGenres,
	getGenres,
} from "../../redux-toolkit/thunks";
import { Skeleton } from "primereact/skeleton";

const initialState = {
	source: "ALL",
	genres: null,
	rating: null,
	sort: null,
};

export const Filters = () => {
	const dispatch = useDispatch();

	const [value, setValue] = useState(initialState);
	const [selected, setSelected] = useState("ALL");

	useEffect(() => {
		dispatch(getGenres());
	}, [dispatch]);

	const { allGenres: genres } = useSelector((state) => state.videogames);

	const rating = [{ name: "min-max" }, { name: "max-min" }];
	const sort = [{ name: "A-Z" }, { name: "Z-A" }];

	const handleSelectChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.value,
		});
	};
	const handleChangeSort = (e) => {
		setValue({
			...value,
			rating: null,
			[e.target.name]: e.value,
		});
	};
	const handleChangeRating = (e) => {
		setValue({
			...value,
			sort: null,
			[e.target.name]: e.value,
		});
	};
	const handleChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
		setSelected(e.target.value);
	};

	//!---------------------------
	useEffect(() => {
		dispatch(getFilterBySourceAndGenres(value.source, value.genres));
		dispatch(getFilterBySort(value.sort));
		dispatch(getFilterByRating(value.rating));
	}, [dispatch, value.rating, value.sort, value.source, value.genres]);
	//!---------------------------

	const navigete = useNavigate();
	const location = useLocation();

	const handleRefresh = () => {
		location.pathname === "/videogames"
			? window.location.reload()
			: navigete("/videogames");
	};

	return (
		<div className={style.container}>
			{genres.length === 0 ? (
				<Skeleton className={style.skeleton}></Skeleton>
			) : (
				<>
					<div className={style.subcontainer}>
						<div className={style.input__container}>
							<label htmlFor="">Source</label>
							<div className={style.radio__input}>
								<label>
									<input
										type="radio"
										id="value-3"
										name="source"
										value="ALL"
										onChange={handleChange}
										checked={selected === "ALL"}
									/>
									<span>ALL</span>
								</label>
								<label>
									<input
										type="radio"
										id="value-1"
										name="source"
										value="NEW"
										onChange={handleChange}
										checked={selected === "NEW"}
									/>
									<span>NEW</span>
								</label>
								<label>
									<input
										type="radio"
										id="value-2"
										name="source"
										value="API"
										onChange={handleChange}
										checked={selected === "API"}
									/>
									<span>API</span>
								</label>
							</div>
						</div>
						<div className={`card flex justify-content-center`}>
							<div className={style.dropdown__container}>
								<label htmlFor="genres">Genres</label>
								<Dropdown
									id="genres"
									value={value.genres}
									onChange={handleSelectChange}
									options={genres}
									optionLabel="name"
									showClear
									name="genres"
									placeholder="Select a genre"
									className={`${style.custom__dropdown} w-full md:w-14rem`}
								/>
							</div>
						</div>

						<div className={style.dropdown__container}>
							<label htmlFor="sort">Sort</label>
							<Dropdown
								id="sort"
								value={value.sort}
								onChange={handleChangeSort}
								options={sort}
								optionLabel="name"
								// showClear
								name="sort"
								placeholder="Select a sort"
								className={`${style.custom__dropdown} w-full md:w-14rem`}
							/>
						</div>
						<div className={`card flex justify-content-center`}>
							<div className={style.dropdown__container}>
								<label htmlFor="rating">Rating</label>
								<Dropdown
									id="rating"
									value={value.rating}
									onChange={handleChangeRating}
									options={rating}
									optionLabel="name"
									// showClear
									name="rating"
									placeholder="Select a rating"
									className={`${style.custom__dropdown} w-full md:w-14rem`}
								/>
							</div>
						</div>
					</div>
					<div className={`${style.refresh} card flex justify-content-center`}>
						<Button
							onClick={handleRefresh}
							label="Refresh games"
							type="button"
						/>
					</div>
				</>
			)}
		</div>
	);
};
