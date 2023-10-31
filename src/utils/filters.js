export const filterBySourceAndGenres = (auxAllVideogames, source, genres) => {
   // const videogames = [...auxAllVideogames];
   // const genre = genres?.name;

   // if (genre !== (null || undefined) && source === "ALL") {
   //    return videogames.filter(videogame => videogame.Genres.some(gen => gen.name === genre));
   // }
   // else if (genre !== (null || undefined) && source === "API") {
   //    let videogamesApi = (videogames.filter(videogame => videogame.created === false));
   //    return videogamesApi.filter(videogame => videogame.Genres.some(gen => gen.name === genre));
   // }
   // else if (genre !== (null || undefined) && source === "NEW") {
   //    let videogamesDb = (videogames.filter(videogame => videogame.created === true));
   //    if (videogamesDb.length === 0) return [];
   //    else return videogamesDb.filter(videogame => videogame.Genres.some(gen => gen.name === genre));
   // }
   // else if (genre === (null || undefined) && source === "API") {
   //    return videogames.filter((videogame => videogame.created === false));
   // }
   // else if (genre === (null || undefined) && source === "NEW") {
   //    return videogames.filter((videogame => videogame.created === true));
   // }
   // else return videogames;
   return auxAllVideogames.filter(videogame => {
      if (genres) {
         if (genres.name) {
            // if (source === "ALL") {
            //    return videogame.Genres.some(gen => gen.name === genres.name);
            // }
            // if (source === "API" && !videogame.created) {
            //    return videogame.Genres.some(gen => gen.name === genres.name);
            // }
            // if (source === "NEW" && videogame.created) {
            //    return videogame.Genres.some(gen => gen.name === genres.name);
            // }
            if ((source === "ALL") || (source === "API" && !videogame.created) || (source === "NEW" && videogame.created)) {
               return videogame.Genres.some(gen => gen.name === genres.name);
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
      return videogames.sort((a, b) =>
         b.ratings.find((r) => r.title === "exceptional").percent -
         a.ratings.find((r) => r.title === "exceptional").percent
      );
   } else if (rating === "min-max") {
      return videogames.sort((a, b) =>
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

// export const combinedFilter = (allVideogames, payload) => {

//    let { sort, rating } = payload;
//    const videogames = [...allVideogames];

//    if (sort?.name === "A-Z" && rating?.name === (null || undefined)) {
//       return videogames.sort((a, b) => a.name.localeCompare(b.name));
//    } else if (sort?.name === "A-Z" && rating?.name !== (null || undefined)) {
//       return videogames.sort((a, b) => a.name.localeCompare(b.name));
//    } else if (sort?.name === "Z-A" && rating?.name === (null || undefined)) {
//       return videogames.sort((a, b) => b.name.localeCompare(a.name));
//    } else if (sort?.name === "Z-A" && rating?.name !== (null || undefined)) {
//       return videogames.sort((a, b) => b.name.localeCompare(a.name));
//    } else if (rating?.name === "max-min" && sort?.name === (null || undefined)) {
//       return videogames.sort((a, b) =>
//          a.ratings.find((r) => r.title === "exceptional").percent -
//          b.ratings.find((r) => r.title === "exceptional").percent
//       );
//    } else if (rating?.name === "min-max" && sort?.name === (null || undefined)) {
//       return videogames.sort((a, b) =>
//          a.ratings.find((r) => r.title === "exceptional").percent -
//          b.ratings.find((r) => r.title === "exceptional").percent
//       );
//    }
// };