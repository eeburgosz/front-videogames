export const nameValidator = (name, videogames) => {
   const videogame = videogames.find(game => game.name === name);
   if (videogame) return "Videogame already exists";
   if (name.length < 2) return "Name must be at least 3 characters";
};

export const descriptionValidator = (description) => {
   if (description.length < 9) return "Description must be at least 10 characters";
};

export const platformsValidator = (platforms) => {
   if (platforms.length === 0) return "You should select at least one platform";
};

export const genresValidator = (genres) => {
   if (genres.length === 0) return "You should select at least one genre";
};

export const ratingsValidator = (ratings) => {
   let max = 0;
   ratings.forEach(rating => max += rating.percent);
   if (max > 100) return "The sum of ratings cannot exceed 100";
   if (max < 100) return "The sum of ratings must be 100";
};