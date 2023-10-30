export const filterBySource = (source, videogames) => {
   const auxVideogames = [...videogames];
   if (source === "API") {
      return auxVideogames.filter(videogame => videogame.created === false);
   } else {
      return auxVideogames.filter(videogame => videogame.created === true);
   }
};


export const filterByGenres = (allVideogames, { genres }) => {
   const videogames = [...allVideogames];
   if (genres?.name !== null) {
      return videogames.filter(videogame => videogame.Genres.some(genre => genre.name === genres?.name));
   } else if (!genres.name) {
      return videogames;
   }
};



export const combinedFilter = (allVideogames, { rating, sort }) => {
   let filteredVideoGames = [...allVideogames];
   if (rating?.name) {
      sort = null;
      if (rating.name === "min-max") {
         filteredVideoGames = filteredVideoGames.sort((a, b) =>
            a.ratings.find((r) => r.title === "exceptional").percent -
            b.ratings.find((r) => r.title === "exceptional").percent
         );
      } else if (rating.name === "max-min") {
         filteredVideoGames = filteredVideoGames.sort((a, b) =>
            b.ratings.find((r) => r.title === "exceptional").percent -
            a.ratings.find((r) => r.title === "exceptional").percent
         );
      }
   }
   if (sort?.name) {
      rating = null;
      if (sort.name === "A-Z") {
         filteredVideoGames = filteredVideoGames.sort((a, b) =>
            a.name.localeCompare(b.name)
         );
      } else if (sort.name === "Z-A") {
         filteredVideoGames = filteredVideoGames.sort((a, b) =>
            b.name.localeCompare(a.name)
         );
      }
   }
   return filteredVideoGames;
};





// const videogames = [...allVideogames];
// if (sort?.name === "A-Z" && genres === null)
//    return videogames.sort((a, b) => a.name.localeCompare(b.name));
// else if (sort?.name === "Z-A")
//    return videogames.sort((a, b) => b.name.localeCompare(a.name));
// else if (rating?.name === "max-min" && genres === null)
//    return videogames.slice().sort((a, b) =>
//       a.ratings.find(r =>
//          r.title === "recommended").percent
//       -
//       b.ratings.find(r =>
//          r.title === "recommended").percent
//    );
// else if (rating?.name === "min-max" && genres === null)
//    return videogames.slice().sort((a, b) =>
//       b.ratings.find(r =>
//          r.title === "recommended").percent
//       -
//       a.ratings.find(r =>
//          r.title === "recommended").percent
//    );