import React, { useState } from "react";
import style from "./filters.module.css";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

export const Filters = () => {
	const [selectedGenre, setSelectedGenre] = useState(null);
	const [selectedRating, setSelectedRating] = useState(null);
	const [selectedSort, setSelectedSort] = useState(null);

	const genres = [
		{
			id: 1,
			name: "Adventure",
		},
		{
			id: 2,
			name: "Puzzle",
		},
		{
			id: 3,
			name: "Action",
		},
		{
			id: 4,
			name: "Shooter",
		},
		{
			id: 5,
			name: "Massively Multiplayer",
		},
		{
			id: 6,
			name: "Indie",
		},
		{
			id: 7,
			name: "Platformer",
		},
		{
			id: 8,
			name: "RPG",
		},
		{
			id: 9,
			name: "Sports",
		},
		{
			id: 10,
			name: "Racing",
		},
		{
			id: 11,
			name: "Arcade",
		},
		{
			id: 12,
			name: "Simulation",
		},
		{
			id: 13,
			name: "Strategy",
		},
		{
			id: 14,
			name: "Casual",
		},
		{
			id: 15,
			name: "Fighting",
		},
	];

	const rating = [{ name: "min-max" }, { name: "max-min" }];
	const sort = [{ name: "A-Z" }, { name: "Z-A" }];

	return (
		<div className={style.container}>
			<div className={style.subcontainer}>
				<div className={style.input__container}>
					<label htmlFor="">Source</label>
					<div className={style.radio__input}>
						<label>
							<input
								type="radio"
								id="value-3"
								name="value-radio"
								value="value-3"
							/>
							<span>ALL</span>
						</label>
						<label>
							<input
								type="radio"
								id="value-1"
								name="value-radio"
								value="value-1"
							/>
							<span>NEW</span>
						</label>
						<label>
							<input
								type="radio"
								id="value-2"
								name="value-radio"
								value="value-2"
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
							value={selectedGenre}
							onChange={(e) => setSelectedGenre(e.value)}
							options={genres}
							optionLabel="name"
							showClear
							placeholder="Select a genre"
							className={`${style.custom__dropdown} w-full md:w-14rem`}
						/>
					</div>
				</div>

				<div className={style.dropdown__container}>
					<label htmlFor="sort">Sort</label>
					<Dropdown
						id="sort"
						value={selectedSort}
						onChange={(e) => setSelectedSort(e.value)}
						options={sort}
						optionLabel="name"
						showClear
						placeholder="Select a sort"
						className={`${style.custom__dropdown} w-full md:w-14rem`}
					/>
				</div>
				<div className={`card flex justify-content-center`}>
					<div className={style.dropdown__container}>
						<label htmlFor="rating">Rating</label>
						<Dropdown
							id="rating"
							value={selectedRating}
							onChange={(e) => setSelectedRating(e.value)}
							options={rating}
							optionLabel="name"
							showClear
							placeholder="Select a rating"
							className={`${style.custom__dropdown} w-full md:w-14rem`}
						/>
					</div>
				</div>
			</div>
			<div className={`${style.refresh} card flex justify-content-center`}>
				<Button label="Refresh games" type="button" />
			</div>
		</div>
	);
};
