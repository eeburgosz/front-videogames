export const filterBySourceAndGenres = (auxAllVideogames, source, genres) => {
	return auxAllVideogames.filter((videogame) => {
		if (genres) {
			if (genres.name) {
				if (
					source === "ALL" ||
					(source === "API" && !videogame.created) ||
					(source === "NEW" && videogame.created)
				) {
					return videogame.Genres.some((gen) => gen.name === genres.name);
				}
			}
		} else {
			if (source === "API" && !videogame.created) {
				return true;
			}
			if (source === "NEW" && videogame.created) {
				return true;
			}
		}
		return source === "ALL";
	});
};

export const filterByRating = (allVideogames, ratings) => {
	const rating = ratings?.name;
	const videogames = [...allVideogames];
	if (rating === "max-min") {
		return videogames.sort(
			(a, b) =>
				b.ratings.find((r) => r.title === "exceptional").percent -
				a.ratings.find((r) => r.title === "exceptional").percent
		);
	} else if (rating === "min-max") {
		return videogames.sort(
			(a, b) =>
				a.ratings.find((r) => r.title === "exceptional").percent -
				b.ratings.find((r) => r.title === "exceptional").percent
		);
	} else return videogames;
};

export const filterBySort = (allVideogames, sorts) => {
	const sort = sorts?.name;
	const videogames = [...allVideogames];
	if (sort === "A-Z") {
		return videogames.sort((a, b) => a.name.localeCompare(b.name));
	} else if (sort === "Z-A") {
		return videogames.sort((a, b) => b.name.localeCompare(a.name));
	} else return videogames;
};
