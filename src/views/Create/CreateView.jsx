import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";

import style from "./createView.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, getGenres } from "../../redux-toolkit/thunks";
import { getPlatforms } from "../../utils/platforms";

const initialState = {
	name: "",
	img: "",
	released: "",
	description: "",
	genres: [],
	platforms: [],
	ratings: [
		{ title: "skip", percent: null },
		{ title: "meh", percent: null },
		{ title: "recommended", percent: null },
		{ title: "exceptional", percent: null },
	],
	requirements: {
		minimun: "",
		recommended: "",
	},
};

export const CreateView = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGenres());
		dispatch(getAllVideogames());
	}, [dispatch]);
	const {
		allVideogames,
		allGenres: genres,
		isLoading,
	} = useSelector((state) => state.videogames);

	const platforms = getPlatforms(allVideogames);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Click");
	};
	const handleBack = () => {
		window.history.back();
	};

	const [value, setValue] = useState(initialState);

	const handleChange = (e) => {
		// console.log(e.target.value);
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
	};
	const handleRating = (e) => {
		const { name, value: percent } = e.target;
		console.log(name);
		console.log(value);

		// setValue({
		// 	...value,
		// 	ratings: [
		// 		...value.ratings,
		// 		{

		// 		},
		// 	],
		// });
		const ratingIndex = value.ratings.findIndex(
			(rating) => rating.title === name
		);

		if (ratingIndex !== -1) {
			// Clona el estado actual
			const updatedValue = { ...value };

			// Clona el array de ratings y actualiza el campo 'percent' del rating correspondiente
			updatedValue.ratings = value.ratings.map((rating, index) => {
				if (index === ratingIndex) {
					return { ...rating, percent: percent };
				}
				return rating;
			});

			// Actualiza el estado con el nuevo valor
			setValue(updatedValue);
		}
	};

	console.log(value);

	return (
		<div className={style.container}>
			<form action="submit" className={style.form}>
				<div className={style.title}>
					<h2>Create your game</h2>
				</div>
				<div className={style.first__container}>
					<h3>Initial information</h3>
					<div className={style.__subcontainer}>
						<span>Name</span>
						<InputText
							name="name"
							type="text"
							placeholder="Name"
							onChange={handleChange}
						/>
					</div>
					<div className={style.__subcontainer}>
						<span>Img</span>
						<InputText
							name="img"
							type="text"
							placeholder="http://... or https://..."
							onChange={handleChange}
						/>
					</div>
					<div className={style.__subcontainer}>
						<span>Released</span>
						<InputText
							name="released"
							type="date"
							placeholder="Released"
							onChange={handleChange}
						/>
					</div>
					<div className={style.__subcontainer}>
						<span>Description</span>
						<InputTextarea
							name="description"
							id=""
							cols="50"
							rows="5"
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className={style.first__container}>
					<h3>Ratings</h3>
					<div>
						<div className={style.__subcontainer}>
							<span>
								<i>"Skip"</i>
							</span>
							<InputText
								type="number"
								// value={value.ratings.percent}
								name="skip"
								placeholder="Skip %"
								onChange={handleRating}
							/>
						</div>
						<div className={style.__subcontainer}>
							<span>
								<i>"Meh"</i>
							</span>
							<InputText
								type="number"
								// value={value.ratings.percent || ""}
								name="meh"
								placeholder="Meh %"
								onChange={handleRating}
							/>
						</div>
						<div className={style.__subcontainer}>
							<span>
								<i>"Recommended"</i>
							</span>
							<InputText
								type="number"
								// value={value.ratings.percent}
								name="recommended"
								placeholder="Recommended %"
								onChange={handleRating}
							/>
						</div>
						<div className={style.__subcontainer}>
							<span>
								<i>"Exceptional"</i>
							</span>
							<InputText
								type="number"
								// value={value.ratings.percent}
								name="exceptional"
								placeholder="Exceptional %"
								onChange={handleRating}
							/>
						</div>
					</div>
				</div>
				<div className={style.first__container}>
					<h3>Videogame type</h3>
					<div className={style.__subcontainer}>
						<span>Platforms</span>
						<MultiSelect
							name="platforms"
							options={platforms}
							optionLabel="name"
							display="chip"
							placeholder="Select Platforms"
							maxSelectedLabels={10}
							className="w-full md:w-20rem"
							onChange={handleChange}
						/>
					</div>
					<div className={style.__subcontainer}>
						<span>Genres</span>
						<div className="card flex justify-content-center">
							<MultiSelect
								name="genres"
								options={genres}
								optionLabel="name"
								display="chip"
								placeholder="Select Genres"
								maxSelectedLabels={5}
								className="w-full md:w-20rem"
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>
				<div className={style.first__container}>
					<div>
						<h3>Requirements</h3>
						<div className={style.__subcontainer}>
							<span>Minimum</span>
							<InputTextarea
								name="minimum"
								id=""
								cols="50"
								rows="5"
								onChange={handleChange}
							/>
						</div>
						<div className={style.__subcontainer}>
							<span>Recommended</span>
							<InputTextarea
								name="recommended"
								id=""
								cols="50"
								rows="5"
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>
				<div className={style.submit}>
					<Button label="submit" onClick={handleSubmit} />
				</div>
			</form>
			<Button
				icon="pi pi-arrow-left"
				label="Go back"
				className={style.goBack}
				onClick={handleBack}
			/>
		</div>
	);
};
