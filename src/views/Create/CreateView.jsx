import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPlatforms } from "../../utils/platforms";
import {
	descriptionValidator,
	genresValidator,
	nameValidator,
	platformsValidator,
	ratingsValidator,
} from "../../utils/formValidators";

import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";

import Swal from "sweetalert2";
import style from "./createView.module.css";
import {
	getAllVideogames,
	getGenres,
	postVideogame,
} from "../../redux-toolkit/videogames/thunks";

const initialState = {
	name: "",
	img: "",
	released: "",
	description: "",
	genres: [],
	platforms: [],
	ratings: [
		{ title: "skip", percent: 0 },
		{ title: "meh", percent: 0 },
		{ title: "recommended", percent: 0 },
		{ title: "exceptional", percent: 0 },
	],
	requirements: {
		minimum: "",
		recommended: "",
	},
	created: true,
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
		// isLoading,
	} = useSelector((state) => state.videogames);

	const platforms = getPlatforms(allVideogames);

	const handleBack = () => {
		window.history.back();
	};

	const [value, setValue] = useState(initialState);

	const handleRequirements = (e) => {
		setValue({
			...value,
			requirements: {
				...value.requirements,
				[e.target.name]: e.target.value,
			},
		});
	};

	const handleChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
	};
	const handleRating = (e) => {
		const name = e.originalEvent.target.name;
		const percent = e.value;
		const updatedValue = { ...value };
		updatedValue.ratings = value.ratings.map((rating) => {
			if (rating.title === name) {
				return { ...rating, percent };
			}
			return rating;
		});
		setValue(updatedValue);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const nameError = nameValidator(value.name, allVideogames);
		if (nameError)
			return Swal.fire({
				icon: "error",
				title: "Oops!",
				text: nameError,
			});
		const descriptionError = descriptionValidator(value.description);
		if (descriptionError)
			return Swal.fire({
				icon: "error",
				title: "Oops!",
				text: descriptionError,
			});
		const platformsError = platformsValidator(value.platforms);
		if (platformsError)
			return Swal.fire({
				icon: "error",
				title: "Oops!",
				text: platformsError,
			});
		const genresError = genresValidator(value.genres);
		if (genresError)
			return Swal.fire({
				icon: "error",
				title: "Oops!",
				text: genresError,
			});
		const ratingsError = ratingsValidator(value.ratings);
		if (ratingsError)
			return Swal.fire({
				icon: "error",
				title: "Oops!",
				text: ratingsError,
			});
		dispatch(postVideogame(value));
		setValue(initialState);
		Swal.fire({
			icon: "success",
			title: "Videogame has been created successfully",
			showConfirmButton: false,
			timer: 2000,
		});
	};

	// console.log(value);

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
							<InputNumber
								name="skip"
								placeholder="Skip %"
								onChange={handleRating}
							/>
						</div>
						<div className={style.__subcontainer}>
							<span>
								<i>"Meh"</i>
							</span>
							<InputNumber
								name="meh"
								placeholder="Meh %"
								onChange={handleRating}
							/>
						</div>
						<div className={style.__subcontainer}>
							<span>
								<i>"Recommended"</i>
							</span>
							<InputNumber
								name="recommended"
								placeholder="Recommended %"
								onChange={handleRating}
							/>
						</div>
						<div className={style.__subcontainer}>
							<span>
								<i>"Exceptional"</i>
							</span>
							<InputNumber
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
							value={value.platforms}
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
								value={value.genres}
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
								// value={value.requirements.minimun}
								name="minimum"
								id=""
								cols="50"
								rows="5"
								onChange={handleRequirements}
							/>
						</div>
						<div className={style.__subcontainer}>
							<span>Recommended</span>
							<InputTextarea
								// value={value.requirements.recommended}
								name="recommended"
								id=""
								cols="50"
								rows="5"
								onChange={handleRequirements}
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
