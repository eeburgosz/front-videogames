import React from "react";
import style from "./cardsContainer.module.css";
import { Card } from "../";

const data = [
	{
		id: 13536,
		name: "Portal",
		img: "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
		description:
			"Every single time you click your mouse while holding a gun, you expect bullets to fly and enemies to fall. But here you will try out the FPS game filled with environmental puzzles and engaging story. Silent template for your adventures, Chell, wakes up in a testing facility. She’s a subject of experiments on instant travel device, supervised by snarky and hostile GLaDOS.Players will have to complete the tests, room by room, expecting either reward, freedom or more tests. By using the gun, that shoots portals (Portal-Gun™), players will move blocks, travel great distance quickly and learn about your current situation, which is unraveled through environmental storytelling. What you will be told might be different from what you will see.White environments will guide the player’s portal placement, forcing them to pay attention to the surroundings.  Portal creates tension, allowing either solving puzzles at your own leisure or moving quickly, due to the time limit or threats.",
		platforms: [
			{
				id: 21,
				name: "Android",
			},
			{
				id: 16,
				name: "PlayStation 3",
			},
			{
				id: 14,
				name: "Xbox 360",
			},
			{
				id: 6,
				name: "Linux",
			},
			{
				id: 5,
				name: "macOS",
			},
			{
				id: 4,
				name: "PC",
			},
			{
				id: 7,
				name: "Nintendo Switch",
			},
		],
		requirements: {
			minimum: "4.4 and up",
			recommended: "No information available",
		},
		released: "2007-10-09",
		ratings: [
			{
				title: "exceptional",
				percent: 61.04,
			},
			{
				title: "recommended",
				percent: 33.2,
			},
			{
				title: "meh",
				percent: 3.76,
			},
			{
				title: "skip",
				percent: 2,
			},
		],
		created: false,
		Genres: [
			{
				id: 1,
				name: "Adventure",
				VgGenres: {
					VideogameId: 13536,
					GenreId: 1,
				},
			},
			{
				id: 2,
				name: "Puzzle",
				VgGenres: {
					VideogameId: 13536,
					GenreId: 2,
				},
			},
		],
	},
	{
		id: 4291,
		name: "Counter-Strike: Global Offensive",
		img: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
		description:
			"Counter-Strike is a multiplayer phenomenon in its simplicity. No complicated narratives to explain the source of the conflict, no futuristic and alien threats, but counter-terrorists against terrorists. Arena shooter at its core, CS:GO provides you with various methods of disposing enemies and reliant on cooperation within the team. During the round of the classical clash mode, you will gradually receive currency to purchase different equipment. Each player can carry a primary weapon, secondary pistol, knife and a set of grenades, which all can change the battle if wielded by the skilled player. Objectives are clear and vary from map to map, from game mode to game mode. Stop the terrorists from planting explosives, stop the counter-terrorist from retrieving the hostages, kill everyone who isn’t you and just perform the best with.CS:GO is one of the major cybersport discipline, which makes playing it more exciting to some players. Aside from purchasing the game, CS:GO is infamous for its loot case system, that requires players to purchase keys, in order to open said cases. Customization items consist of weapon skins, weapon stickers, and sprays that do not affect gameplay and have purely visual value to the player.",
		platforms: [
			{
				id: 4,
				name: "PC",
			},
			{
				id: 14,
				name: "Xbox 360",
			},
			{
				id: 16,
				name: "PlayStation 3",
			},
		],
		requirements: {
			minimum:
				"Minimum:OS: Windows® 7/Vista/XPProcessor: Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or betterMemory: 2 GB RAMGraphics: Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0DirectX: Version 9.0cStorage: 15 GB available space",
			recommended: "No information available",
		},
		released: "2012-08-21",
		ratings: [
			{
				title: "recommended",
				percent: 46.79,
			},
			{
				title: "meh",
				percent: 26,
			},
			{
				title: "exceptional",
				percent: 16.03,
			},
			{
				title: "skip",
				percent: 11.18,
			},
		],
		created: false,
		Genres: [
			{
				id: 3,
				name: "Action",
				VgGenres: {
					VideogameId: 4291,
					GenreId: 3,
				},
			},
			{
				id: 4,
				name: "Shooter",
				VgGenres: {
					VideogameId: 4291,
					GenreId: 4,
				},
			},
		],
	},
	{
		id: 28,
		name: "Red Dead Redemption 2",
		img: "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
		description:
			"America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age.",
		platforms: [
			{
				id: 4,
				name: "PC",
			},
			{
				id: 18,
				name: "PlayStation 4",
			},
			{
				id: 1,
				name: "Xbox One",
			},
		],
		requirements: {
			minimum:
				"Minimum:Requires a 64-bit processor and operating systemOS: Windows 7 - Service Pack 1 (6.1.7601)Processor: Intel® Core™ i5-2500K / AMD FX-6300Memory: 8 GB RAMGraphics: Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GBNetwork: Broadband Internet connectionStorage: 150 GB available spaceSound Card: Direct X Compatible",
			recommended:
				"Recommended:Requires a 64-bit processor and operating systemOS: Windows 10 - April 2018 Update (v1803)Processor: Intel® Core™ i7-4770K / AMD Ryzen 5 1500XMemory: 12 GB RAMGraphics: Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GBNetwork: Broadband Internet connectionStorage: 150 GB available spaceSound Card: Direct X Compatible",
		},
		released: "2018-10-26",
		ratings: [
			{
				title: "exceptional",
				percent: 73.28,
			},
			{
				title: "recommended",
				percent: 18.36,
			},
			{
				title: "meh",
				percent: 5.49,
			},
			{
				title: "skip",
				percent: 2.87,
			},
		],
		created: false,
		Genres: [
			{
				id: 3,
				name: "Action",
				VgGenres: {
					VideogameId: 28,
					GenreId: 3,
				},
			},
			{
				id: 1,
				name: "Adventure",
				VgGenres: {
					VideogameId: 28,
					GenreId: 1,
				},
			},
		],
	},
	{
		id: 4200,
		name: "Portal 2",
		img: "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
		description:
			"Portal 2 is a first-person puzzle game developed by Valve Corporation and released on April 19, 2011 on Steam, PS3 and Xbox 360. It was published by Valve Corporation in digital form and by Electronic Arts in physical form. Its plot directly follows the first game's, taking place in the Half-Life universe. You play as Chell, a test subject in a research facility formerly ran by the company Aperture Science, but taken over by an evil AI that turned upon its creators, GladOS. After defeating GladOS at the end of the first game but failing to escape the facility, Chell is woken up from a stasis chamber by an AI personality core, Wheatley, as the unkempt complex is falling apart. As the two attempt to navigate through the ruins and escape, they stumble upon GladOS, and accidentally re-activate her...Portal 2's core mechanics are very similar to the first game's ; the player must make their way through several test chambers which involve puzzles. For this purpose, they possess a Portal Gun, a weapon capable of creating teleportation portals on white surfaces. This seemingly simple mechanic and its subtleties coupled with the many different puzzle elements that can appear in puzzles allows the game to be easy to start playing, yet still feature profound gameplay. The sequel adds several new puzzle elements, such as gel that can render surfaces bouncy or allow you to accelerate when running on them.The game is often praised for its gameplay, its memorable dialogue and writing and its aesthetic. Both games in the series are responsible for inspiring most puzzle games succeeding them, particularly first-person puzzle games. The series, its characters and even its items such as the portal gun and the companion cube have become a cultural icon within gaming communities.Portal 2 also features a co-op mode where two players take on the roles of robots being led through tests by GladOS, as well as an in-depth level editor.",
		platforms: [
			{
				id: 16,
				name: "PlayStation 3",
			},
			{
				id: 4,
				name: "PC",
			},
			{
				id: 14,
				name: "Xbox 360",
			},
			{
				id: 6,
				name: "Linux",
			},
			{
				id: 5,
				name: "macOS",
			},
			{
				id: 1,
				name: "Xbox One",
			},
		],
		requirements: {
			minimum: "No information available",
			recommended: "No information available",
		},
		released: "2011-04-18",
		ratings: [
			{
				title: "exceptional",
				percent: 70.25,
			},
			{
				title: "recommended",
				percent: 24.89,
			},
			{
				title: "meh",
				percent: 2.71,
			},
			{
				title: "skip",
				percent: 2.15,
			},
		],
		created: false,
		Genres: [
			{
				id: 4,
				name: "Shooter",
				VgGenres: {
					VideogameId: 4200,
					GenreId: 4,
				},
			},
			{
				id: 2,
				name: "Puzzle",
				VgGenres: {
					VideogameId: 4200,
					GenreId: 2,
				},
			},
		],
	},
	{
		id: 12020,
		name: "Left 4 Dead 2",
		img: "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
		description:
			"Cooperative survival continues with a different set of characters. New survivors are making their way through 5 campaigns with an added ability to play through the story of the first game as well, using not only expanded arsenal of 20 ranged and 10 melee weapons but improved AI Director. Your surroundings and weather will change; enemy and item placement will differ from map to map, from difficulty to difficulty. New unique special zombies, placed in the unlucky for the player spot, can end your run.High compatibility with community mods will allow you not only to add user-created maps but player models, enemy models, and even in-game music, which will help any player to create the unique experience on top of solid game mechanics.Competitive multiplayer mods from arena survival to a head-on competition with another team of survivors are addictive and, in addition to the campaign, will provide you with hundreds of hours of game content.",
		platforms: [
			{
				id: 5,
				name: "macOS",
			},
			{
				id: 6,
				name: "Linux",
			},
			{
				id: 4,
				name: "PC",
			},
			{
				id: 14,
				name: "Xbox 360",
			},
		],
		requirements: {
			minimum:
				"Minimum:OS: Windows® 7 32/64-bit / Vista 32/64 / XPProcessor: Pentium 4 3.0GHzMemory: 2 GB RAMGraphics: Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or betterDirectX: Version 9.0cStorage: 13 GB available spaceSound Card: DirectX 9.0c compatible sound card",
			recommended:
				"Recommended:OS: Windows® 7 32/64-bit / Vista 32/64 / XPProcessor: Intel core 2 duo 2.4GHzMemory: 2 GB RAMGraphics: Video Card Shader model 3.0. NVidia 7600, ATI X1600 or betterDirectX: Version 9.0cStorage: 13 GB available spaceSound Card: DirectX 9.0c compatible sound card",
		},
		released: "2009-11-17",
		ratings: [
			{
				title: "recommended",
				percent: 53.33,
			},
			{
				title: "exceptional",
				percent: 31.62,
			},
			{
				title: "meh",
				percent: 11.35,
			},
			{
				title: "skip",
				percent: 3.71,
			},
		],
		created: false,
		Genres: [
			{
				id: 3,
				name: "Action",
				VgGenres: {
					VideogameId: 12020,
					GenreId: 3,
				},
			},
			{
				id: 4,
				name: "Shooter",
				VgGenres: {
					VideogameId: 12020,
					GenreId: 4,
				},
			},
		],
	},
	{
		id: 32,
		name: "Destiny 2",
		img: "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
		description:
			"Destiny 2 is an online multiplayer first-person shooter. You take on the role of a Guardian that needs to protect the last city on Earth from alien invaders. The game follows its predecessor, Destiny. The goal of the game is to return the Light that was stolen from the Guardians by the aliens.Destiny 2 features two main activity types: player versus environment and player versus player. PvE is focused on exploration, story missions interaction with NPCs and side quests. PvP features 4v4 team matches in different modes. The game also allows taking part in group missions, such as three-player strikes and six-player raids.Destiny 2 has a strong RPG aspect that includes character customization and development. There are three classes in the game - Warlock, Hunter, and Titan; they provide different playstyles depending on their specialization and unique abilities. To develop the character you can gain experience points completing the story and side missions.",
		platforms: [
			{
				id: 1,
				name: "Xbox One",
			},
			{
				id: 4,
				name: "PC",
			},
			{
				id: 18,
				name: "PlayStation 4",
			},
			{
				id: 171,
				name: "Web",
			},
			{
				id: 186,
				name: "Xbox Series S/X",
			},
			{
				id: 187,
				name: "PlayStation 5",
			},
		],
		requirements: {
			minimum: "No information available",
			recommended: "No information available",
		},
		released: "2017-09-06",
		ratings: [
			{
				title: "recommended",
				percent: 44.86,
			},
			{
				title: "meh",
				percent: 32.18,
			},
			{
				title: "exceptional",
				percent: 13.77,
			},
			{
				title: "skip",
				percent: 9.18,
			},
		],
		created: false,
		Genres: [
			{
				id: 3,
				name: "Action",
				VgGenres: {
					VideogameId: 32,
					GenreId: 3,
				},
			},
			{
				id: 4,
				name: "Shooter",
				VgGenres: {
					VideogameId: 32,
					GenreId: 4,
				},
			},
			{
				id: 1,
				name: "Adventure",
				VgGenres: {
					VideogameId: 32,
					GenreId: 1,
				},
			},
			{
				id: 5,
				name: "Massively Multiplayer",
				VgGenres: {
					VideogameId: 32,
					GenreId: 5,
				},
			},
		],
	},
	{
		id: 13537,
		name: "Half-Life 2",
		img: "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
		description:
			"Gordon Freeman became the most popular nameless and voiceless protagonist in gaming history. He is painted as the most famous scientist and a hero within the world of Half-Life, and for a good reason. In the first game he saved the planet from alien invasion, this time, when the invasion is already begun, the world needs his help one more time. And you, as a player, will help this world to survive. This time Gordon arrives in City 17, ravaged and occupied by Combines, where he meets his old Black Mesa friends. What is different, aside from the overall design quality, is the use of Valve’s Source engine that not only expands on the fluidity of character model animations and movement but allows players to interact with a myriad of objects with the advanced and realistic (to an extent) physics. Classic Headcrab Zombies are revamped and have new variants that provide players with different threats. For a story-driven FPS, Half-Life 2 is unique in its plot delivery, and making in-game mechanics feel natural, be it platforming or driving.",
		platforms: [
			{
				id: 4,
				name: "PC",
			},
			{
				id: 5,
				name: "macOS",
			},
			{
				id: 14,
				name: "Xbox 360",
			},
			{
				id: 6,
				name: "Linux",
			},
			{
				id: 80,
				name: "Xbox",
			},
			{
				id: 21,
				name: "Android",
			},
		],
		requirements: {
			minimum:
				"Minimum:OS: Windows 7, Vista, XPProcessor: 1.7 GhzMemory: 512 MB RAMGraphics: DirectX 8.1 level Graphics Card (requires support for SSE)Storage: 6500 MB available space",
			recommended: "No information available",
		},
		released: "2004-11-16",
		ratings: [
			{
				title: "exceptional",
				percent: 63.88,
			},
			{
				title: "recommended",
				percent: 27.3,
			},
			{
				title: "meh",
				percent: 5.78,
			},
			{
				title: "skip",
				percent: 3.04,
			},
		],
		created: false,
		Genres: [
			{
				id: 3,
				name: "Action",
				VgGenres: {
					VideogameId: 13537,
					GenreId: 3,
				},
			},
			{
				id: 4,
				name: "Shooter",
				VgGenres: {
					VideogameId: 13537,
					GenreId: 4,
				},
			},
		],
	},
	{
		id: 4062,
		name: "BioShock Infinite",
		img: "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
		description:
			"The third game in the series, Bioshock takes the story of the underwater confinement within the lost city of Rapture and takes it in the sky-city of Columbia. Players will follow Booker DeWitt, a private eye with a military past; as he will attempt to wipe his debts with the only skill he’s good at – finding people. Aside from obvious story and style differences, this time Bioshock protagonist has a personality, character, and voice, no longer the protagonist is a silent man, trying to survive.Open and bright level design of Columbia shows industrial colonial America in a seemingly endless carnival. But Bioshock is not famous for its visuals, but for its story.  Mystery and creative vision of Irrational Games invite players to uncover the secrets of Columbia’s leader - Zachary Comstock and save Elizabeth, the girl, that’s been locked up in the flying city since her birth.Unique weapons and mechanics of Vigor will make encounters different, helping players to adjust to the new found mobility and hook shot, making fights fast-paced and imaginative.",
		platforms: [
			{
				id: 18,
				name: "PlayStation 4",
			},
			{
				id: 14,
				name: "Xbox 360",
			},
			{
				id: 7,
				name: "Nintendo Switch",
			},
			{
				id: 6,
				name: "Linux",
			},
			{
				id: 4,
				name: "PC",
			},
			{
				id: 16,
				name: "PlayStation 3",
			},
			{
				id: 1,
				name: "Xbox One",
			},
		],
		requirements: {
			minimum:
				"Minimum:OS: Windows Vista Service Pack 2 32-bitProcessor: Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7 GHzMemory: 2GBHard Disk Space: 20 GB freeVideo Card: DirectX10 Compatible ATI Radeon HD 3870 / NVIDIA 8800 GT / Intel HD 3000 Integrated GraphicsVideo Card Memory: 512 MBSound: DirectX Compatible",
			recommended:
				"Recommended:OS: Windows 7 Service Pack 1 64-bitProcessor: Quad Core ProcessorMemory: 4GBHard Disk Space: 30 GB freeVideo Card: DirectX11 Compatible, AMD Radeon HD 6950 / NVIDIA GeForce GTX 560Video Card Memory: 1024 MBSound: DirectX Compatible",
		},
		released: "2013-03-26",
		ratings: [
			{
				title: "exceptional",
				percent: 55.18,
			},
			{
				title: "recommended",
				percent: 33.26,
			},
			{
				title: "meh",
				percent: 8.81,
			},
			{
				title: "skip",
				percent: 2.76,
			},
		],
		created: false,
		Genres: [
			{
				id: 3,
				name: "Action",
				VgGenres: {
					VideogameId: 4062,
					GenreId: 3,
				},
			},
			{
				id: 4,
				name: "Shooter",
				VgGenres: {
					VideogameId: 4062,
					GenreId: 4,
				},
			},
		],
	},
];

export const CardsContainer = () => {
	return (
		<div className={style.container}>
			{data.map((d) => (
				<Card
					key={d.id}
					id={d.id}
					name={d.name}
					img={d.img}
					Genres={d.Genres}
				/>
			))}
		</div>
	);
};
