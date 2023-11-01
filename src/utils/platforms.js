export const getPlatforms = (videogames) => {
   const platforms = {};
   videogames.forEach((videogame) => {
      videogame.platforms.forEach((platform) => {
         if (!platforms[platform.id]) {
            platforms[platform.id] = {
               id: platform.id,
               name: platform.name,
            };
         }
      });
   });
   const resp = Object.values(platforms);
   return resp;
};