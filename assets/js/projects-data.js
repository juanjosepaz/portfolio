/* Portfolio projects data.
 * Each project:
 *  - id, title, category ('shipped' | 'technical-demo' | 'prototype' | 'extra')
 *  - platforms, role, technologies, tags, shortDescription, fullDescription (array of paragraphs)
 *  - videoUrl (optional embed URL), coverImage, screenshots (array of image paths)
 *  - externalLink (optional), externalLabel
 */
window.PORTFOLIO_PROJECTS = [
	{
		id: 'helix-tower',
		title: 'Helix Tower 3D',
		category: 'shipped',
		platforms: ['Mobile'],
		role: 'Lead Gameplay Programmer',
		technologies: ['Unity', 'C#', 'URP', 'Firebase', 'PlayFab', 'AdMob', 'OneSignal'],
		tags: ['#Mobile', '#3D', '#ProceduralGeneration', '#GameplaySystems', '#Optimization'],
		shortDescription: 'Mobile game where a ball descends a spiraling tower, switching between two realities to find the path forward.',
		fullDescription: [
			'Helix Tower 3D is a mobile game that reimagines the classic Helix Jump formula with a unique dual-reality twist. Players guide a ball down a spiraling tower, but can double-tap to switch between two parallel realities\u2014each with different platform layouts, power-ups, and hazards.',
			'As Lead Gameplay Programmer, I architected and implemented all client-side systems including input, physics, procedural level generation (JSON/seed-based), economy, IAPs, save system, and daily challenges. I also built custom Unity Editor tools for the design team, reducing iteration time by ~30%, and integrated Firebase, PlayFab, AdMob, and OneSignal.'
		],
		videoUrl: 'https://www.youtube.com/embed/JDi_SkmomNY',
		coverImage: 'images/PortfolioImages/HelixTower/HelixTower-Logo.png',
		screenshots: ['images/PortfolioImages/HelixTower/HelixTower-1.png', 'images/PortfolioImages/HelixTower/HelixTower-2.png', 'images/PortfolioImages/HelixTower/HelixTower-3.png', 'images/PortfolioImages/HelixTower/HelixTower-4.png', 'images/PortfolioImages/HelixTower/HelixTower-5.png', 'images/PortfolioImages/HelixTower/HelixTower-6.png', 'images/PortfolioImages/HelixTower/HelixTower-7.png', 'images/PortfolioImages/HelixTower/HelixTower-8.png']
	},
	{
		id: 'bravepixelg',
		title: 'BravePixelG',
		category: 'shipped',
		platforms: ['YouTube', 'Itch.io', 'Patreon'],
		role: 'Creator & Educator',
		technologies: ['YouTube', 'Unity', 'C#', 'Video Editing', 'Community Management'],
		tags: ['#Education', '#Community', '#ContentCreation', '#YouTube', '#5Years'],
		shortDescription: 'YouTube channel with 15,000+ subscribers featuring 150+ Unity tutorials, devlogs, and game development insights since 2021.',
		fullDescription: [
			'BravePixelG is my personal brand and YouTube channel, where I\u2019ve been sharing game development knowledge and experiences since 2021. With over 15,000 subscribers and 150+ videos, I\u2019ve built a community of Spanish-speaking developers learning Unity, C#, and game design principles.',
			'The channel features a wide range of content including Unity tutorials (covering everything from basics to advanced topics like AI and optimization), devlogs documenting my game development process, and practical advice for aspiring developers. I\u2019ve also used this platform to showcase my games, share my journey, and connect with fellow developers worldwide.',
			'Beyond YouTube, BravePixelG extends to Itch.io where I publish my games, and Patreon where I offer exclusive content and support. This project has been instrumental in developing my communication skills, technical teaching abilities, and community building\u2014skills that translate directly to technical leadership and mentorship in professional settings.'
		],
		videoUrl: 'https://www.youtube.com/embed/-q82QZy4PWk',
		coverImage: 'images/PortfolioImages/BravePixel/Logo3-BPG.png',
		screenshots: ['images/PortfolioImages/BravePixel/BravePixel-1.png', 'images/PortfolioImages/BravePixel/BravePixel-2.png'],
		externalLink: 'https://www.youtube.com/@BravePixelG',
		externalLabel: 'Visit YouTube Channel'
	},
	{
		id: 'castle-trap',
		title: 'Castle Trap',
		category: 'shipped',
		platforms: ['Mobile'],
		role: 'Lead Developer',
		technologies: ['Unity', 'C#', 'Unity Ads', 'Aseprite', 'Audacity', 'Google Play Console'],
		tags: ['#Mobile', '#2D', '#PixelArt', '#HyperCasual', '#SoloDev'],
		shortDescription: '2D pixel art game where a trapped character dodges platforms and enemies in a deadly castle.',
		fullDescription: [
			'Castle Trap is a hyper-casual 2D platformer where the player is trapped in a simple castle with a fixed camera. Platforms rise from the floor and ceiling, threatening to crush the player against spikes, while enemies emerge from the walls. The goal is to survive as long as possible.',
			'This was my first shipped game under the BravePixelG brand. I handled everything\u2014code, art (Aseprite), sound (Audacity), and integration of Unity Ads. I also managed the full Google Play release process, including licensing, console setup, and passing internal testing.'
		],
		coverImage: 'images/PortfolioImages/CastleTrap/CastleTrap-Icon.png',
		videoUrl: 'https://www.youtube.com/embed/DXPjSiQ3QZQ',
		devlogUrl: 'https://www.youtube.com/watch?v=86emc2RzJZU',
		screenshots: ['images/PortfolioImages/CastleTrap/CastleTrap-Banner.png', 'images/PortfolioImages/CastleTrap/CastleTrap-King.png', 'images/PortfolioImages/CastleTrap/CastleTrap-DontFall.png', 'images/PortfolioImages/CastleTrap/CastleTrap-PlayNow.png', 'images/PortfolioImages/CastleTrap/CastleTrap-UnklockAllCharacters.png'],
		externalLink: 'https://play.google.com/store/apps/details?id=com.bravepixelg.castletrap',
		externalLabel: 'Play on Google Play'
	},
	{
		id: 'match-slash',
		title: 'Match & Slash',
		category: 'shipped',
		platforms: ['WebGL', 'PC'],
		role: 'Lead Developer',
		technologies: ['Unity', 'C#', 'Git', 'GitHub', 'WebGL', 'Itch.io'],
		tags: ['#WebGL', '#2D', '#PixelArt', '#Match3', '#Roguelike'],
		shortDescription: 'Match-3 roguelike where each matched unit attacks enemies in turn-based combat.',
		fullDescription: [
			'Match & Slash is a turn-based roguelike that combines match-3 mechanics with tactical combat. Players manage a grid of units in a match-3 battle\u2014each matched unit deals damage to enemies. After the player\u2019s turn, enemies attack back. Between rounds, players choose from roguelike upgrades (cards) to customize their run, and bosses with special abilities appear at the end of each level.',
			'I developed this game from concept to release in just two weeks, handling all code, implementation, and deployment to Itch.io.'
		],
		coverImage: 'images/PortfolioImages/Match&Slash/Match&Slash-Logo.png',
		videoUrl: 'https://www.youtube.com/embed/rOqWqIIEfO8',
		devlogUrl: 'https://www.youtube.com/watch?v=wyiNO_VJHbI',
		screenshots: ['images/PortfolioImages/Match&Slash/Match&Slash-Wave.png', 'images/PortfolioImages/Match&Slash/Match&Slash-Boss.png', 'images/PortfolioImages/Match&Slash/Match&Slash-Store.png', 'images/PortfolioImages/Match&Slash/Match&Slash-Boss2.png', 'images/PortfolioImages/Match&Slash/Match&Slash-Defeat.png'],
		externalLink: 'https://bravepixelg.itch.io/matchslash',
		externalLabel: 'Play on Itch.io'
	},
	{
		id: 'monster-tactics',
		title: 'Monster Tactics',
		category: 'technical-demo',
		platforms: ['PC'],
		role: 'Gameplay Programmer',
		technologies: ['Unity', 'C#', 'Git', 'GitHub', 'Animation Rigging', 'A* Algorithm', 'Scriptable Objects', 'Lean Tween'],
		tags: ['#PC', '#3D', '#TacticalRPG', '#AI', '#Pathfinding', '#StateMachine'],
		shortDescription: '3D tactical RPG where monster squads battle in turn-based grid combat with AI-driven enemy behavior.',
		fullDescription: [
			'Monster Tactics is a functional 3D tactical RPG prototype where players control a squad of monsters against an AI-controlled squad. Combat is turn-based, with each unit able to move, attack, or use special abilities. The AI uses advanced decision-making based on distance, cover, and potential damage output.',
			'I developed the entire technical foundation, including a grid-based movement system, turn management, and AI behavior. The AI evaluates multiple actions (movement, attack, ability usage) and selects the optimal sequence to maintain combat effectiveness while minimizing exposure.'
		],
		videoUrl: 'https://www.youtube.com/embed/AIBdYmzDbAw',
		coverImage: 'images/PortfolioImages/MonsterTacticsScreenshots/MonsterTactics-Icon.png',
		screenshots: ['images/PortfolioImages/MonsterTacticsScreenshots/MonsterTactics-CloseUp.png', 'images/PortfolioImages/MonsterTacticsScreenshots/MonsterTactics-Hit.png', 'images/PortfolioImages/MonsterTacticsScreenshots/MonsterTactics-EnemyTurn.png', 'images/PortfolioImages/MonsterTacticsScreenshots/MonsterTactics-MainGame.png', 'images/PortfolioImages/MonsterTacticsScreenshots/MonsterTactics-PlayerTurn.png']
	},
	{
		id: 'multiplayer-tanks',
		title: 'Multiplayer Tanks',
		category: 'technical-demo',
		platforms: ['PC'],
		role: 'Gameplay Programmer',
		technologies: ['Unity', 'C#', 'Unity Cloud', 'Unity Gaming Services', 'Netcode for GameObjects', 'Unity Relay', 'Lobby'],
		tags: ['#PC', '#3D', '#Multiplayer', '#Networking', '#UnityServices', '#TechnicalDemo'],
		shortDescription: 'Online multiplayer tank shooter with matchmaking, lobby system, and player-hosted or cloud-hosted sessions.',
		fullDescription: [
			'Multiplayer Tanks is a technical demo showcasing my experience with Unity\u2019s multiplayer ecosystem. Players control a tank in real-time battles, with support for matchmaking, lobby creation, and player-hosted sessions (using Unity Relay) as well as dedicated cloud-hosted servers.',
			'I implemented the full multiplayer stack using Unity\u2019s Netcode for GameObjects for synchronization, Unity Relay for peer-to-peer connectivity, and Unity Lobby for matchmaking and session management. The project demonstrates my ability to build scalable, real-time multiplayer systems.'
		],
		videoUrl: 'https://www.youtube.com/embed/m0Ocqm5MK-8',
		coverImage: 'images/PortfolioImages/MultiplayerTanks/MultiplayerTanks-Icon.png',
		screenshots: ['images/PortfolioImages/MultiplayerTanks/MultiplayerTanks-GamePlayTeam.png', 'images/PortfolioImages/MultiplayerTanks/MultiplayerTanks-MainMenu.png', 'images/PortfolioImages/MultiplayerTanks/MultiplayerTanks-Lobby.png', 'images/PortfolioImages/MultiplayerTanks/MultiplayerTanks-EditorGamePlay.png']
	},
	{
		id: 'clockedout',
		title: 'ClockedOut',
		category: 'shipped',
		platforms: ['WebGL', 'PC'],
		role: 'Lead Developer',
		technologies: ['Unity', 'C#', 'Git', 'GitHub', 'VSCode'],
		tags: ['#WebGL', '#2D', '#PixelArt', '#DungeonCrawler'],
		shortDescription: 'Dungeon crawler where a clock is your weapon, your lifeline, and sometimes your worst enemy.',
		fullDescription: [
			'ClockedOut is a single-player browser game made in 4 days. Players control a character in a dungeon, using a clock interface where each position triggers a different action. The clock\u2019s hand rotates, and pressing the button activates the highlighted ability. Players must defeat waves of enemies before time runs out, while enemies can disrupt the clock layout, forcing quick adaptation.',
			'I developed all the code and some of the art.'
		],
		videoUrl: 'https://www.youtube.com/embed/uO-wS0TlQiQ',
		coverImage: 'images/PortfolioImages/ClockedOut/ClockedOut_Logo.png',
		screenshots: ['images/PortfolioImages/ClockedOut/ClockedOut_1.png', 'images/PortfolioImages/ClockedOut/ClockedOut_2.png', 'images/PortfolioImages/ClockedOut/ClockedOut_3.png', 'images/PortfolioImages/ClockedOut/ClockedOut_4.png'],
		externalLink: 'https://bravepixelg.itch.io/clocked-out',
		externalLabel: 'Play on Itch.io'
	},
	{
		id: 'bloomguard',
		title: 'Bloomguard',
		category: 'shipped',
		platforms: ['WebGL', 'PC'],
		role: 'Lead Developer',
		technologies: ['Unity', 'C#', 'Git', 'GitHub'],
		tags: ['#WebGL', '#2D', '#TowerDefense', '#Survival'],
		shortDescription: 'Tower defense where players plant and harvest seeds by day, and defend crystals at night.',
		fullDescription: [
			'Bloomguard is a 2D tower defense game with a day/night cycle. Players move freely across the map, planting seeds that can be harvested and used as weapons. By night, enemies attack the crystals, and players must use their plants strategically to defend.',
			'I handled all code and game design, working with pre-made assets to deliver a polished prototype in a short timeframe.'
		],
		coverImage: 'images/PortfolioImages/Bloomguard/Bloomguard-Logo.png',
		videoUrl: 'https://www.youtube.com/embed/E4b1QLPD61E',
		devlogUrl: 'https://www.youtube.com/watch?v=cjbo9nZK5gs',
		screenshots: ['images/PortfolioImages/Bloomguard/Bloomguard-Day1.png', 'images/PortfolioImages/Bloomguard/Bloomguard-Heal.png', 'images/PortfolioImages/Bloomguard/Bloomguard-Attack.png', 'images/PortfolioImages/Bloomguard/Bloomguard-Day2.png', 'images/PortfolioImages/Bloomguard/Bloomguard-Destroy.png'],
		externalLink: 'https://bravepixelg.itch.io/bloomguard',
		externalLabel: 'Play on Itch.io'
	},
	{
		id: 'dooroseum',
		title: 'Dooroseum',
		category: 'shipped',
		platforms: ['WebGL', 'PC'],
		role: 'Lead Developer',
		technologies: ['Unity', 'C#', 'Git', 'GitHub', 'VSCode'],
		tags: ['#WebGL', '#2D', '#PixelArt', '#ActionShooter'],
		shortDescription: 'Top-down action shooter where players fight waves of door-shaped enemies in a deadly coliseum.',
		fullDescription: [
			'Dooroseum is a 2D pixel art game where players control a character with two weapons (pistol and shotgun) to defeat waves of door-shaped enemies in a coliseum. The final boss is a key that unlocks one of two doors to escape.',
			'I developed all code and implemented visual assets created by a collaborator.'
		],
		coverImage: 'images/PortfolioImages/DooroseumScreenshots/Dooroseum-Icon.png',
		videoUrl: 'https://www.youtube.com/embed/JwERkAFCDu4',
		devlogUrl: 'https://www.youtube.com/watch?v=51MA72MWR6g',
		screenshots: ['images/PortfolioImages/DooroseumScreenshots/Dooroseum-Gameplay1.png', 'images/PortfolioImages/DooroseumScreenshots/Dooroseum-Gameplay2.png', 'images/PortfolioImages/DooroseumScreenshots/Dooroseum-Gameplay3.png'],
		externalLink: 'https://bravepixelg.itch.io/dooroseum',
		externalLabel: 'Play on Itch.io'
	},
	{
		id: '3d-showcase',
		title: '3D Showcase',
		category: 'extra',
		platforms: ['PC'],
		role: 'Developer',
		technologies: ['Unity', 'C#', 'Git', 'GitHub', 'VSCode'],
		tags: ['#PC', '#3D', '#URP', '#VFX', '#GameFeel'],
		shortDescription: 'Collection of 3D prototypes focused on game feel, VFX, and post-processing using Unity URP.',
		fullDescription: [
			'3D Showcase is a compilation of four micro-projects developed during a course on 3D game development. It includes a space shooter, an infinite runner, a first-person shooter, and a Starfox-style rail shooter.',
			'These prototypes demonstrate my ability to work with 3D gameplay, visual effects, post-processing, and Unity\u2019s Universal Render Pipeline (URP). I also explored timeline-based sequences and weapon switching mechanics.',
			'While these are learning projects, they highlight my technical versatility and ability to quickly implement different gameplay styles.'
		],
		videoUrl: 'https://www.youtube.com/embed/vzVSP-HcZCM',
		coverImage: 'images/PortfolioImages/3DShowcase/3DShowcase-Logo2.png',
		screenshots: ['images/PortfolioImages/3DShowcase/3DShowcase_Shooter.png', 'images/PortfolioImages/3DShowcase/3DShowcase_Space.png', 'images/PortfolioImages/3DShowcase/3DShowcase_King.png', 'images/PortfolioImages/3DShowcase/3DShowcase_DodgeShip.png']
	},
	{
		id: 'space-diver',
		title: 'Space Diver',
		category: 'shipped',
		platforms: ['WebGL', 'PC'],
		role: 'Lead Developer',
		technologies: ['Unity', 'C#', 'Git', 'GitHub', 'VSCode'],
		tags: ['#WebGL', '#2D', '#ProceduralGeneration', '#Platformer'],
		shortDescription: '2D platformer where an astronaut descends through a procedurally generated space cave.',
		fullDescription: [
			'Space Diver is a 2D platformer where players control an astronaut descending through a procedural space cave using a grappling hook to stick to walls, avoiding obstacles and enemies.',
			'The game features infinite procedural level generation using object pooling to load and unload level segments seamlessly. I handled all code, implementation, and game design, while art was created by a collaborator.'
		],
		coverImage: 'images/PortfolioImages/SpaceDiver/SpaceDiver-Logo.png',
		videoUrl: 'https://www.youtube.com/embed/fmL-LMmqv-E',
		devlogUrl: 'https://www.youtube.com/watch?v=ikgwTC9dohY',
		screenshots: ['images/PortfolioImages/SpaceDiver/SpaceDiver-Gameplay1.png', 'images/PortfolioImages/SpaceDiver/SpaceDiver-Gameplay2.png', 'images/PortfolioImages/SpaceDiver/SpaceDiver-Gameplay3.png'],
		externalLink: 'https://bravepixelg.itch.io/space-diver',
		externalLabel: 'Play on Itch.io'
	},
	{
		id: 'heart-of-oak',
		title: 'Heart of Oak',
		category: 'extra',
		platforms: ['PC'],
		role: 'Lead Programmer & Team Lead',
		technologies: ['Unity', 'C#', 'Git', 'GitHub', 'VSCode'],
		tags: ['#WebGL', '#2D', '#Roguelike', '#TeamProject', '#PixelArt'],
		shortDescription: '2D roguelike where a treant defends the forest heart against waves of adventurers.',
		fullDescription: [
			'Heart of Oak is a 2D roguelike developed as part of a bootcamp in 2024, where I led a team of 4 developers. The player controls a treant that must navigate procedurally generated maps, fighting adventurers who seek to steal the forest\u2019s heart.',
			'I served as lead programmer and team lead, coordinating tasks and integrating systems from different team members. I also implemented a procedural map generation system using weighted probabilities to create varied runs with enemies, shops, upgrades, and events.'
		],
		coverImage: 'images/PortfolioImages/HeartOfOakScreenShots/HeartOfOak-Logo.png',
		screenshots: ['images/PortfolioImages/HeartOfOakScreenShots/HeartOfOak-MainMenu.png', 'images/PortfolioImages/HeartOfOakScreenShots/HeartOfOak-Map.png', 'images/PortfolioImages/HeartOfOakScreenShots/HeartOfOak-Gameplay1.png', 'images/PortfolioImages/HeartOfOakScreenShots/HeartOfOak-Shop.png'],
		externalLink: 'https://flexcat.itch.io/the-hearth-of-oak',
		externalLabel: 'Play on Itch.io'
	},
	{
		id: 'arkanoid-clone',
		title: 'Arkanoid Clone',
		category: 'extra',
		platforms: ['PC'],
		role: 'Developer',
		technologies: ['Unity', 'C#', 'Git', 'GitHub', 'VSCode'],
		tags: ['#PC', '#2D', '#Arcade', '#Prototype', '#TechnicalTest'],
		shortDescription: 'One-week Arkanoid clone focused on physics and arcade-style gameplay.',
		fullDescription: [
			'Arkanoid Clone is a prototype developed in under a week as part of a technical test. It includes 6 levels with classic layouts, power-ups, lives, and scoring.',
			'I focused on recreating the original game\u2019s physics feel, ensuring the ball bounces predictably and avoids infinite loops. The project showcases my ability to deliver a polished prototype quickly and accurately replicate classic gameplay.'
		],
		videoUrl: 'https://www.youtube.com/embed/51NoCoBESGM',
		coverImage: 'images/PortfolioImages/ArkanoidClone/Arkanoid_Logo.png',
		screenshots: ['images/PortfolioImages/ArkanoidClone/Arkanoid_MainMenu.png', 'images/PortfolioImages/ArkanoidClone/Arkanoid_LevelReady.png', 'images/PortfolioImages/ArkanoidClone/Arkanoid_GamePlay.png', 'images/PortfolioImages/ArkanoidClone/Arkanoid_SelectLevel.png']
	},
	{
		id: 'game-feel-urp',
		title: 'Game Feel URP',
		category: 'extra',
		platforms: ['PC'],
		role: 'Developer',
		technologies: ['Unity', 'C#', 'Git', 'GitHub', 'VSCode'],
		tags: ['#PC', '#2D', '#URP', '#GameFeel', '#Learning'],
		shortDescription: 'Prototype exploring Unity URP and gameplay feedback enhancements.',
		fullDescription: [
			'Game Feel URP is a learning project from a course focused on enhancing game feel using Unity\u2019s Universal Render Pipeline. I worked with a pre-designed scene and character to implement visual feedback effects like screen shake, particle systems, and dynamic UI responses.',
			'The project allowed me to experiment with post-processing, sprite masking, and persistent decals (like blood splatters on the ground). It\u2019s a technical exploration rather than a full game, but it demonstrates my understanding of URP and game feel principles.'
		],
		videoUrl: 'https://www.youtube.com/embed/4bam4RDjtF8',
		coverImage: 'images/PortfolioImages/GameFeelScreenshots/GameFeel_Icon.png',
		screenshots: ['images/PortfolioImages/GameFeelScreenshots/GameFeel_GamePlay1.png', 'images/PortfolioImages/GameFeelScreenshots/GameFeel_GamePlay2.png', 'images/PortfolioImages/GameFeelScreenshots/GameFeel_GamePlay3.png']
	}
];
