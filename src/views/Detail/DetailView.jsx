import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideogameById } from "../../redux-toolkit/thunks";
import { Chart } from "primereact/chart";
import style from "./detailView.module.css";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Skeleton } from "primereact/skeleton";

const skeleton = (
	<>
		<Skeleton className={style.img__skeleton}></Skeleton>
		<Skeleton className={style.name__skeleton}></Skeleton>
		<Skeleton className={style.description__skeleton}></Skeleton>
		<Skeleton className={style.info__skeleton}></Skeleton>
		<Skeleton className={style.ratings__skeleton}></Skeleton>
	</>
);

export const DetailView = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getVideogameById(id));
	}, [dispatch, id]);

	const { videogame, isLoading } = useSelector((state) => state.videogames);

	const [visible, setVisible] = useState(false);

	const ratings = videogame.ratings;
	// console.log(videogame);

	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		if (videogame.name) {
			const documentStyle = getComputedStyle(document.documentElement);
			const data = {
				labels: ratings.map((rating) => rating.title.toUpperCase()),
				datasets: [
					{
						data: ratings.map((rating) => rating.percent),
						backgroundColor: [
							documentStyle.getPropertyValue("--red-500"),
							documentStyle.getPropertyValue("--blue-500"),
							documentStyle.getPropertyValue("--yellow-500"),
							documentStyle.getPropertyValue("--green-500"),
						],
						hoverBackgroundColor: [
							documentStyle.getPropertyValue("--red-800"),
							documentStyle.getPropertyValue("--blue-800"),
							documentStyle.getPropertyValue("--yellow-800"),
							documentStyle.getPropertyValue("--green-800"),
						],
					},
				],
			};
			const options = {
				cutout: "50%",
			};

			setChartData(data);
			setChartOptions(options);
		}
	}, [ratings, dispatch, videogame, id]);

	const handleBack = () => {
		window.history.back();
	};

	return (
		<div className={style.container}>
			{!videogame.name || isLoading ? (
				<>{skeleton}</>
			) : (
				<>
					<img className={style.img} src={videogame.img} alt={videogame.name} />
					<h1>{videogame.name}</h1>
					<span>Released: {videogame.released}</span>
					<div className={style.description}>
						<Fieldset legend="Description">
							<p className="m-0">{videogame.description}</p>
						</Fieldset>
					</div>
					<hr className={style.divider} />
					<div className={style.info}>
						<div>
							<h2 className={style.subtitle}>Genres</h2>
							<span className={style.genre}>
								{videogame.Genres.map((genre) => (
									<p key={genre.id}>{genre.name}</p>
								))}
							</span>
						</div>
						<div>
							<h2 className={style.subtitle}>Platforms</h2>
							<div className={style.platform}>
								{videogame.platforms.map((platform) => (
									<div key={platform.id} className={style.info__platform}>
										<img
											src={
												require(`../../assets/logosPlalforms/${platform.name.replace(
													/[/\\:*?"<>|]/g,
													""
												)}.png`) || false
											}
											alt=""
										/>
										<span>{platform.name}</span>
									</div>
								))}
							</div>
						</div>
					</div>
					<hr className={style.divider} />
					<h2>Ratings</h2>
					<div className={`${style.chart} `}>
						<Chart type="doughnut" data={chartData} options={chartOptions} />
					</div>
					<div className="card flex justify-content-center">
						<Button
							className={style.show}
							label="Show requirements"
							onClick={() => setVisible(true)}
						/>
						<Dialog
							header="Requirements"
							visible={visible}
							onHide={() => setVisible(false)}
							className={style.dialog}
						>
							<section className={`m-0 ${style.requirements} `}>
								<section className={style.paragraph}>
									<strong>Minimum:</strong>
									<span>{videogame.requirements.minimum}</span>
								</section>
								<section className={style.paragraph}>
									<strong>Recomended:</strong>
									<span>{videogame.requirements.recommended}</span>
								</section>
							</section>
						</Dialog>
					</div>
				</>
			)}

			<Button
				icon="pi pi-arrow-left"
				label="Go back"
				className={style.goBack}
				onClick={handleBack}
			/>
		</div>
	);
};
