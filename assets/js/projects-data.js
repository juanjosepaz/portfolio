/* Portfolio projects data.
 * Each project:
 *  - id, title, category ('shipped' | 'prototype' | 'technical-demo' | 'community')
 *  - platforms, role, technologies, shortDescription, fullDescription (array of paragraphs)
 *  - videoUrl (optional embed URL), coverImage, screenshots (array of image paths)
 *  - externalLink (optional), externalLabel
 */
window.PORTFOLIO_PROJECTS = [
	{
		id: 'helix-tower',
		title: 'Helix Tower 3D',
		category: 'shipped',
		platforms: ['Android'],
		role: 'Lead Gameplay Programmer',
		technologies: ['Unity', 'C#', 'URP', 'Firebase', 'PlayFab', 'AdMob'],
		shortDescription: '3D hyper-casual puzzle game with one-touch controls, released on Google Play.',
		fullDescription: [
			'Helix Tower 3D is a hyper-casual mobile game released on Google Play, built around quick one-hand play sessions with instant pick-up-and-play controls, a core requirement for the hyper-casual market.',
			'As Lead Gameplay Programmer I owned the core gameplay loop and game feel, and integrated the full live-ops stack: Firebase for analytics and remote configuration, PlayFab for leaderboards and player data, and AdMob for rewarded and interstitial advertising.',
			'Working with the Universal Render Pipeline, I optimized the project to keep load times short and frame rate stable across a wide range of Android devices.'
		],
		coverImage: 'images/PortfolioImages/HelixTower/HelixTower-Cover.png',
		screenshots: ['images/PortfolioImages/HelixTower/HelixTower-Cover.png'],
		externalLink: 'https://play.google.com/store/apps/details?id=com.pixiemeta.phasetower',
		externalLabel: 'Play on Google Play'
	},
	{
		id: 'castle-trap',
		title: 'Castle Trap',
		category: 'shipped',
		platforms: ['Android'],
		role: 'Lead Developer',
		technologies: ['Unity', 'C#', '2D Physics'],
		shortDescription: 'Hyper-casual 2D platformer. Jump, climb, and dodge traps in fast-paced levels. Released on Google Play.',
		fullDescription: [
			'Castle Trap is a hyper-casual 2D platformer published on Google Play. Players jump, climb, and dodge traps across fast-paced levels designed for short, addictive sessions.',
			'As Lead Developer I owned the project end to end: gameplay programming, 2D physics tuning, level design, and the launch pipeline including analytics, ads integration, and store publishing.'
		],
		coverImage: 'images/PortfolioImages/CastleTrap/CastleTrap-Icon.png',
		screenshots: [
			'images/PortfolioImages/CastleTrap/CastleTrap-Banner.png',
			'images/PortfolioImages/CastleTrap/CastleTrap-King.png',
			'images/PortfolioImages/CastleTrap/CastleTrap-DontFall.png',
			'images/PortfolioImages/CastleTrap/CastleTrap-PlayNow.png',
			'images/PortfolioImages/CastleTrap/CastleTrap-UnklockAllCharacters.png'
		],
		externalLink: 'https://play.google.com/store/apps/details?id=com.bravepixelg.castletrap',
		externalLabel: 'Play on Google Play'
	},
	{
		id: 'match-slash',
		title: 'Match & Slash',
		category: 'shipped',
		platforms: ['WebGL', 'PC'],
		role: 'Lead Developer',
		technologies: ['Unity', 'C#', 'Scriptable Objects', 'JSON'],
		shortDescription: 'Match-3, turn-based roguelike. Combine tiles, upgrade units, and defeat enemy waves and bosses.',
		fullDescription: [
			'Match & Slash is a match-3, turn-based roguelike where players combine tiles to upgrade units and defeat enemy waves and bosses. Released on Itch.io for WebGL and PC.',
			'The game is built around a data-driven architecture using Scriptable Objects to define units, tiles, and upgrades, with a JSON-based save system. As Lead Developer I designed and implemented the core systems: matching logic, turn flow, enemy waves, and progression.'
		],
		coverImage: 'images/PortfolioImages/Match&Slash/Match&Slash-Logo.png',
		screenshots: [
			'images/PortfolioImages/Match&Slash/Match&Slash-Wave.png',
			'images/PortfolioImages/Match&Slash/Match&Slash-Boss.png',
			'images/PortfolioImages/Match&Slash/Match&Slash-Store.png',
			'images/PortfolioImages/Match&Slash/Match&Slash-Boss2.png',
			'images/PortfolioImages/Match&Slash/Match&Slash-Defeat.png'
		],
		externalLink: 'https://bravepixelg.itch.io/matchslash',
		externalLabel: 'Play on Itch.io'
	},
	{
		id: 'monster-tactics',
		title: 'Monster Tactics',
		category: 'technical-demo',
		platforms: ['PC'],
		role: 'Gameplay Programmer',
		technologies: ['Unity', 'C#', 'URP', 'State Machines', 'Zenject', 'NavMesh'],
		shortDescription: '3D tactical RPG. Control monster squads in turn-based battles with strategy and positioning.',
		fullDescription: [
			'Monster Tactics is a 3D tactical RPG prototype where players control monster squads in turn-based battles driven by strategy and positioning.',
			'Built as a technical demo, it showcases clean architecture: the battle flow is managed with state machines, dependency injection with Zenject keeps the systems decoupled and testable, and NavMesh drives unit movement and pathfinding across the arena.'
		],
		videoUrl: 'https://www.youtube.com/embed/AIBdYmzDbAw',
		coverImage: 'images/PortfolioImages/MonsterTacticsScreenshots/MonsterTactics-Icon.png',
		screenshots: [
			'images/PortfolioImages/MonsterTacticsScreenshots/MonsterTactics-CloseUp.png',
			'images/PortfolioImages/MonsterTacticsScreenshots/MonsterTactics-Hit.png',
			'images/PortfolioImages/MonsterTacticsScreenshots/MonsterTactics-EnemyTurn.png',
			'images/PortfolioImages/MonsterTacticsScreenshots/MonsterTactics-MainGame.png',
			'images/PortfolioImages/MonsterTacticsScreenshots/MonsterTactics-PlayerTurn.png'
		]
	},
	{
		id: 'multiplayer-tanks',
		title: 'Multiplayer Tanks',
		category: 'technical-demo',
		platforms: ['PC'],
		role: 'Gameplay Programmer',
		technologies: ['Unity', 'C#', 'Netcode', 'Unity Relay', 'Lobby'],
		shortDescription: 'Online multiplayer tank shooter. Matchmaking, team battles, and player-hosted sessions.',
		fullDescription: [
			'Multiplayer Tanks is an online multiplayer tank shooter prototype with matchmaking and team-based battles.',
			'It explores Unity Netcode for GameObjects together with Unity Relay and the Lobby service to support player-hosted sessions without port forwarding, covering connection management, RPCs, and the full session lifecycle.'
		],
		videoUrl: 'https://www.youtube.com/embed/m0Ocqm5MK-8',
		coverImage: 'images/PortfolioImages/MultiplayerTanks/MultiplayerTanks-Icon.png',
		screenshots: [
			'images/PortfolioImages/MultiplayerTanks/MultiplayerTanks-GamePlayTeam.png',
			'images/PortfolioImages/MultiplayerTanks/MultiplayerTanks-MainMenu.png',
			'images/PortfolioImages/MultiplayerTanks/MultiplayerTanks-Lobby.png',
			'images/PortfolioImages/MultiplayerTanks/MultiplayerTanks-EditorGamePlay.png'
		]
	},
	{
		id: 'clockedout',
		title: 'ClockedOut',
		category: 'shipped',
		platforms: ['WebGL', 'PC'],
		role: 'Lead Developer',
		technologies: ['Unity', 'C#', '2D Physics', 'Procedural Generation'],
		shortDescription: 'Fast-paced dungeon crawler where your clock is your weapon, your lifeline, and sometimes your worst enemy.',
		fullDescription: [
			'ClockedOut is a fast-paced dungeon crawler where your clock is your weapon, your lifeline, and sometimes your worst enemy. Released on Itch.io for WebGL and PC.',
			'As Lead Developer I built the game around 2D physics and procedural generation, creating levels that change on every run while keeping the timer-driven pressure of the core loop.'
		],
		coverImage: 'images/PortfolioImages/ClockedOut/ClockedOut_Logo.png',
		screenshots: [
			'images/PortfolioImages/ClockedOut/ClockedOut_1.png',
			'images/PortfolioImages/ClockedOut/ClockedOut_2.png',
			'images/PortfolioImages/ClockedOut/ClockedOut_3.png',
			'images/PortfolioImages/ClockedOut/ClockedOut_4.png'
		],
		externalLink: 'https://bravepixelg.itch.io/clocked-out',
		externalLabel: 'Play on Itch.io'
	},
	{
		id: 'bloomguard',
		title: 'Bloomguard',
		category: 'shipped',
		platforms: ['WebGL', 'PC'],
		role: 'Lead Developer',
		technologies: ['Unity', 'C#', '2D Physics', 'Day/Night Cycle'],
		shortDescription: 'Defend the crystals and survive as many nights as you can. Plant and harvest seeds by day and fight at night.',
		fullDescription: [
			'Bloomguard is a survival strategy game where you defend the crystals and survive as many nights as you can. Plant and harvest seeds by day, fight waves of enemies when night falls. Released on Itch.io.',
			'The day/night cycle is the heart of the game: it drives spawning, resource timing, and risk/reward decisions. As Lead Developer I implemented the cycle, the wave AI, and the 2D physics combat.'
		],
		coverImage: 'images/PortfolioImages/Bloomguard/Bloomguard-Logo.png',
		screenshots: [
			'images/PortfolioImages/Bloomguard/Bloomguard-Day1.png',
			'images/PortfolioImages/Bloomguard/Bloomguard-Heal.png',
			'images/PortfolioImages/Bloomguard/Bloomguard-Attack.png',
			'images/PortfolioImages/Bloomguard/Bloomguard-Day2.png',
			'images/PortfolioImages/Bloomguard/Bloomguard-Destroy.png'
		],
		externalLink: 'https://bravepixelg.itch.io/bloomguard',
		externalLabel: 'Play on Itch.io'
	},
	{
		id: '3d-showcase',
		title: '3D Showcase',
		category: 'technical-demo',
		platforms: ['PC'],
		role: 'Developer',
		technologies: ['Unity', 'C#', 'URP', 'Shader Graph', 'VFX'],
		shortDescription: 'Collection of 3D prototypes focused on game feel, VFX, and post-processing using Unity 6.',
		fullDescription: [
			'3D Showcase is a collection of 3D prototypes focused on game feel, VFX, and post-processing, built with Unity 6 and the Universal Render Pipeline.',
			'Each scene explores a different technique: Shader Graph materials, VFX particles, camera work, and post-processing stacks, all used to build polished, arcade-style gameplay moments.'
		],
		videoUrl: 'https://www.youtube.com/embed/vzVSP-HcZCM',
		coverImage: 'images/PortfolioImages/3DShowcase/3DShowcase-Logo2.png',
		screenshots: [
			'images/PortfolioImages/3DShowcase/3DShowcase_Shooter.png',
			'images/PortfolioImages/3DShowcase/3DShowcase_Space.png',
			'images/PortfolioImages/3DShowcase/3DShowcase_King.png',
			'images/PortfolioImages/3DShowcase/3DShowcase_DodgeShip.png'
		]
	},
	{
		id: 'dooroseum',
		title: 'Dooroseum',
		category: 'shipped',
		platforms: ['WebGL', 'PC'],
		role: 'Lead Developer',
		technologies: ['Unity', 'C#', '2D Physics'],
		shortDescription: 'Top-down action shooter. Fight through waves of door-shaped enemies in a deadly coliseum.',
		fullDescription: [
			'Dooroseum is a top-down action shooter where you fight through waves of door-shaped enemies in a deadly coliseum. Released on Itch.io for WebGL and PC.',
			'As Lead Developer I built the combat, enemy waves, and 2D physics gameplay, polishing the game feel so every hit is readable and satisfying.'
		],
		coverImage: 'images/PortfolioImages/DooroseumScreenshots/Dooroseum-Icon.png',
		screenshots: [
			'images/PortfolioImages/DooroseumScreenshots/Dooroseum-Gameplay1.png',
			'images/PortfolioImages/DooroseumScreenshots/Dooroseum-Gameplay2.png'
		],
		externalLink: 'https://bravepixelg.itch.io/dooroseum',
		externalLabel: 'Play on Itch.io'
	},
	{
		id: 'space-diver',
		title: 'Space Diver',
		category: 'shipped',
		platforms: ['WebGL', 'PC'],
		role: 'Lead Developer',
		technologies: ['Unity', 'C#', '2D Physics', 'Procedural Generation'],
		shortDescription: 'Hyper-casual descent game. Navigate a space cave full of enemies and hidden treasures.',
		fullDescription: [
			'Space Diver is a hyper-casual descent game where you navigate a space cave full of enemies and hidden treasures. Released on Itch.io.',
			'No run plays the same twice: procedural generation and 2D physics create the cave layout, enemy placements, and collectibles for each dive.'
		],
		coverImage: 'images/PortfolioImages/SpaceDiver/SpaceDiver-Logo.png',
		screenshots: [
			'images/PortfolioImages/SpaceDiver/SpaceDiver-Gameplay1.png',
			'images/PortfolioImages/SpaceDiver/SpaceDiver-Gameplay2.png',
			'images/PortfolioImages/SpaceDiver/SpaceDiver-Gameplay3.png'
		],
		externalLink: 'https://bravepixelg.itch.io/space-diver',
		externalLabel: 'Play on Itch.io'
	},
	{
		id: 'bravepixelg-youtube',
		title: 'BravePixelG YouTube Channel',
		category: 'community',
		platforms: ['YouTube'],
		role: 'Content Creator',
		technologies: ['Unity', 'C#', 'Tutorials'],
		shortDescription: 'YouTube channel with 14k+ subscribers. Tutorials on Unity and game development fundamentals.',
		fullDescription: [
			'BravePixelG is my YouTube channel with over 14,000 subscribers, dedicated to Unity and game development tutorials.',
			'I create tutorials on C#, game systems, and game feel, sharing the techniques I use in my own projects with the community.'
		],
		coverImage: 'images/PortfolioImages/BravePixel/Logo3-BPG.png',
		screenshots: [
			'images/PortfolioImages/BravePixel/Logo2-BPG.png',
			'images/PortfolioImages/BravePixel/Background-BPG.png'
		],
		externalLink: 'https://www.youtube.com/@BravePixelG',
		externalLabel: 'Visit Channel'
	},
	{
		id: 'heart-of-oak',
		title: 'Heart of Oak',
		category: 'shipped',
		platforms: ['WebGL', 'PC'],
		role: 'Developer',
		technologies: ['Unity', 'C#'],
		shortDescription: '2D roguelike adventure. Play as a forest guardian on a quest to recover ancient treasure.',
		fullDescription: [
			'Heart of Oak is a 2D roguelike adventure where you play as a forest guardian on a quest to recover ancient treasure.',
			'Worked on gameplay programming with a focus on the map, exploration, and shop progression systems.'
		],
		coverImage: 'images/PortfolioImages/HeartOfOakScreenShots/HeartOfOak-Logo.png',
		screenshots: [
			'images/PortfolioImages/HeartOfOakScreenShots/HeartOfOak-MainMenu.png',
			'images/PortfolioImages/HeartOfOakScreenShots/HeartOfOak-Map.png',
			'images/PortfolioImages/HeartOfOakScreenShots/HeartOfOak-Gameplay1.png',
			'images/PortfolioImages/HeartOfOakScreenShots/HeartOfOak-Shop.png'
		],
		externalLink: 'https://flexcat.itch.io/the-hearth-of-oak',
		externalLabel: 'Play on Itch.io'
	},
	{
		id: 'arkanoid-clone',
		title: 'Arkanoid (Clone)',
		category: 'prototype',
		platforms: ['PC'],
		role: 'Developer',
		technologies: ['Unity', 'C#'],
		shortDescription: 'One-week Arkanoid clone. A short prototype focused on physics and arcade-style gameplay.',
		fullDescription: [
			'Arkanoid (Clone) is a one-week prototype built to practice physics-driven arcade gameplay.',
			'The goal was to ship a complete, polished vertical slice in a single week: physics, level flow, scoring, and menu systems.'
		],
		videoUrl: 'https://www.youtube.com/embed/51NoCoBESGM',
		coverImage: 'images/PortfolioImages/ArkanoidClone/Arkanoid_Logo.png',
		screenshots: [
			'images/PortfolioImages/ArkanoidClone/Arkanoid_MainMenu.png',
			'images/PortfolioImages/ArkanoidClone/Arkanoid_LevelReady.png',
			'images/PortfolioImages/ArkanoidClone/Arkanoid_GamePlay.png',
			'images/PortfolioImages/ArkanoidClone/Arkanoid_SelectLevel.png'
		]
	},
	{
		id: 'game-feel-urp',
		title: 'Game Feel URP',
		category: 'prototype',
		platforms: ['PC'],
		role: 'Developer',
		technologies: ['Unity', 'C#', 'URP'],
		shortDescription: 'Prototype to experiment with Unity URP and gameplay feedback enhancements.',
		fullDescription: [
			'Game Feel URP is a prototype for experimenting with Unity\u2019s Universal Render Pipeline and gameplay feedback techniques.',
			'It explores how visual effects, lighting, and camera work amplify player feedback, turning simple mechanics into satisfying moments.'
		],
		videoUrl: 'https://www.youtube.com/embed/4bam4RDjtF8',
		coverImage: 'images/PortfolioImages/GameFeelScreenshots/GameFeel_Icon.png',
		screenshots: [
			'images/PortfolioImages/GameFeelScreenshots/GameFeel_GamePlay1.png',
			'images/PortfolioImages/GameFeelScreenshots/GameFeel_GamePlay2.png',
			'images/PortfolioImages/GameFeelScreenshots/GameFeel_GamePlay3.png'
		]
	}
];
