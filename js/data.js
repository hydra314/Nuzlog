'use strict';

var data = {};

data.games = [
			"Pokemon Green",
			"Pokemon Blue",
			"Pokemon Red",
			"Pokemon Yellow",
			"Pokemon Gold",
			"Pokemon Silver",
			"Pokemon Crystal",
			"Pokemon Fire Red",
			"Pokemon Leaf Green",
			"Pokemon Ruby",
			"Pokemon Sapphire",
			"Pokemon Emerald",
			"Pokemon Diamond",
			"Pokemon Pearl",
			"Pokemon Platinum",
			"Pokemon Heart Gold",
			"Pokemon Soul Silver",
			"Pokemon Black",
			"Pokemon White",
			"Pokemon Black 2",
			"Pokemon White 2",
			"Pokemon X",
			"Pokemon Y",
			"Pokemon Omega Ruby",
			"Pokemon Alpha Sapphire",
			"Pokemon Sun",
			"Pokemon Moon"];
			
data.pokemon = [
			"Bulbasaur",
			"Ivysaur",
			"Venusaur",
			"Charmander",
			"Charmeleon",
			"Charizard",
			"Squirtle",
			"Wartortle",
			"Blastoise",
			"Caterpie",
			"Metapod",
			"Butterfree",
			"Weedle",
			"Kakuna",
			"Beedrill",
			"Pidgey",
			"Pidgeotto",
			"Pidgeot",
			"Rattata",
			"Raticate",
			"Spearow",
			"Fearow",
			"Ekans",
			"Arbok",
			"Pikachu",
			"Raichu",
			"Sandshrew",
			"Sandslash",
			"Nidoran♀",
			"Nidorina",
			"Nidoqueen",
			"Nidoran♂",
			"Nidorino",
			"Nidoking",
			"Clefairy",
			"Clefable",
			"Vulpix",
			"Ninetales",
			"Jigglypuff",
			"Wigglytuff",
			"Zubat",
			"Golbat",
			"Oddish",
			"Gloom",
			"Vileplume",
			"Paras",
			"Parasect",
			"Venonat",
			"Venomoth",
			"Diglett",
			"Dugtrio",
			"Meowth",
			"Persian",
			"Psyduck",
			"Golduck",
			"Mankey",
			"Primeape",
			"Growlithe",
			"Arcanine",
			"Poliwag",
			"Poliwhirl",
			"Poliwrath",
			"Abra",
			"Kadabra",
			"Alakazam",
			"Machop",
			"Machoke",
			"Machamp",
			"Bellsprout",
			"Weepinbell",
			"Victreebel",
			"Tentacool",
			"Tentacruel",
			"Geodude",
			"Graveler",
			"Golem",
			"Ponyta",
			"Rapidash",
			"Slowpoke",
			"Slowbro",
			"Magnemite",
			"Magneton",
			"Farfetch'd",
			"Doduo",
			"Dodrio",
			"Seel",
			"Dewgong",
			"Grimer",
			"Muk",
			"Shellder",
			"Cloyster",
			"Gastly",
			"Haunter",
			"Gengar",
			"Onix",
			"Drowzee",
			"Hypno",
			"Krabby",
			"Kingler",
			"Voltorb",
			"Electrode",
			"Exeggcute",
			"Exeggutor",
			"Cubone",
			"Marowak",
			"Hitmonlee",
			"Hitmonchan",
			"Lickitung",
			"Koffing",
			"Weezing",
			"Rhyhorn",
			"Rhydon",
			"Chansey",
			"Tangela",
			"Kangaskhan",
			"Horsea",
			"Seadra",
			"Goldeen",
			"Seaking",
			"Staryu",
			"Starmie",
			"Mr. Mime",
			"Scyther",
			"Jynx",
			"Electabuzz",
			"Magmar",
			"Pinsir",
			"Tauros",
			"Magikarp",
			"Gyarados",
			"Lapras",
			"Ditto",
			"Eevee",
			"Vaporeon",
			"Jolteon",
			"Flareon",
			"Porygon",
			"Omanyte",
			"Omastar",
			"Kabuto",
			"Kabutops",
			"Aerodactyl",
			"Snorlax",
			"Articuno",
			"Zapdos",
			"Moltres",
			"Dratini",
			"Dragonair",
			"Dragonite",
			"Mewtwo",
			"Mew",
			"Chikorita",
			"Bayleef",
			"Meganium",
			"Cyndaquil",
			"Quilava",
			"Typhlosion",
			"Totodile",
			"Croconaw",
			"Feraligatr",
			"Sentret",
			"Furret",
			"Hoothoot",
			"Noctowl",
			"Ledyba",
			"Ledian",
			"Spinarak",
			"Ariados",
			"Crobat",
			"Chinchou",
			"Lanturn",
			"Pichu",
			"Cleffa",
			"Igglybuff",
			"Togepi",
			"Togetic",
			"Natu",
			"Xatu",
			"Mareep",
			"Flaaffy",
			"Ampharos",
			"Bellossom",
			"Marill",
			"Azumarill",
			"Sudowoodo",
			"Politoed",
			"Hoppip",
			"Skiploom",
			"Jumpluff",
			"Aipom",
			"Sunkern",
			"Sunflora",
			"Yanma",
			"Wooper",
			"Quagsire",
			"Espeon",
			"Umbreon",
			"Murkrow",
			"Slowking",
			"Misdreavus",
			"Unown",
			"Wobbuffet",
			"Girafarig",
			"Pineco",
			"Forretress",
			"Dunsparce",
			"Gligar",
			"Steelix",
			"Snubbull",
			"Granbull",
			"Qwilfish",
			"Scizor",
			"Shuckle",
			"Heracross",
			"Sneasel",
			"Teddiursa",
			"Ursaring",
			"Slugma",
			"Magcargo",
			"Swinub",
			"Piloswine",
			"Corsola",
			"Remoraid",
			"Octillery",
			"Delibird",
			"Mantine",
			"Skarmory",
			"Houndour",
			"Houndoom",
			"Kingdra",
			"Phanpy",
			"Donphan",
			"Porygon2",
			"Stantler",
			"Smeargle",
			"Tyrogue",
			"Hitmontop",
			"Smoochum",
			"Elekid",
			"Magby",
			"Miltank",
			"Blissey",
			"Raikou",
			"Entei",
			"Suicune",
			"Larvitar",
			"Pupitar",
			"Tyranitar",
			"Lugia",
			"Ho-Oh",
			"Celebi",
			"Treecko",
			"Grovyle",
			"Sceptile",
			"Torchic",
			"Combusken",
			"Blaziken",
			"Mudkip",
			"Marshtomp",
			"Swampert",
			"Poochyena",
			"Mightyena",
			"Zigzagoon",
			"Linoone",
			"Wurmple",
			"Silcoon",
			"Beautifly",
			"Cascoon",
			"Dustox",
			"Lotad",
			"Lombre",
			"Ludicolo",
			"Seedot",
			"Nuzleaf",
			"Shiftry",
			"Taillow",
			"Swellow",
			"Wingull",
			"Pelipper",
			"Ralts",
			"Kirlia",
			"Gardevoir",
			"Surskit",
			"Masquerain",
			"Shroomish",
			"Breloom",
			"Slakoth",
			"Vigoroth",
			"Slaking",
			"Nincada",
			"Ninjask",
			"Shedinja",
			"Whismur",
			"Loudred",
			"Exploud",
			"Makuhita",
			"Hariyama",
			"Azurill",
			"Nosepass",
			"Skitty",
			"Delcatty",
			"Sableye",
			"Mawile",
			"Aron",
			"Lairon",
			"Aggron",
			"Meditite",
			"Medicham",
			"Electrike",
			"Manectric",
			"Plusle",
			"Minun",
			"Volbeat",
			"Illumise",
			"Roselia",
			"Gulpin",
			"Swalot",
			"Carvanha",
			"Sharpedo",
			"Wailmer",
			"Wailord",
			"Numel",
			"Camerupt",
			"Torkoal",
			"Spoink",
			"Grumpig",
			"Spinda",
			"Trapinch",
			"Vibrava",
			"Flygon",
			"Cacnea",
			"Cacturne",
			"Swablu",
			"Altaria",
			"Zangoose",
			"Seviper",
			"Lunatone",
			"Solrock",
			"Barboach",
			"Whiscash",
			"Corphish",
			"Crawdaunt",
			"Baltoy",
			"Claydol",
			"Lileep",
			"Cradily",
			"Anorith",
			"Armaldo",
			"Feebas",
			"Milotic",
			"Castform",
			"Kecleon",
			"Shuppet",
			"Banette",
			"Duskull",
			"Dusclops",
			"Tropius",
			"Chimecho",
			"Absol",
			"Wynaut",
			"Snorunt",
			"Glalie",
			"Spheal",
			"Sealeo",
			"Walrein",
			"Clamperl",
			"Huntail",
			"Gorebyss",
			"Relicanth",
			"Luvdisc",
			"Bagon",
			"Shelgon",
			"Salamence",
			"Beldum",
			"Metang",
			"Metagross",
			"Regirock",
			"Regice",
			"Registeel",
			"Latias",
			"Latios",
			"Kyogre",
			"Groudon",
			"Rayquaza",
			"Jirachi",
			"Deoxys",
			"Turtwig",
			"Grotle",
			"Torterra",
			"Chimchar",
			"Monferno",
			"Infernape",
			"Piplup",
			"Prinplup",
			"Empoleon",
			"Starly",
			"Staravia",
			"Staraptor",
			"Bidoof",
			"Bibarel",
			"Kricketot",
			"Kricketune",
			"Shinx",
			"Luxio",
			"Luxray",
			"Budew",
			"Roserade",
			"Cranidos",
			"Rampardos",
			"Shieldon",
			"Bastiodon",
			"Burmy",
			"Wormadam",
			"Mothim",
			"Combee",
			"Vespiquen",
			"Pachirisu",
			"Buizel",
			"Floatzel",
			"Cherubi",
			"Cherrim",
			"Shellos",
			"Gastrodon",
			"Ambipom",
			"Drifloon",
			"Drifblim",
			"Buneary",
			"Lopunny",
			"Mismagius",
			"Honchkrow",
			"Glameow",
			"Purugly",
			"Chingling",
			"Stunky",
			"Skuntank",
			"Bronzor",
			"Bronzong",
			"Bonsly",
			"Mime Jr.",
			"Happiny",
			"Chatot",
			"Spiritomb",
			"Gible",
			"Gabite",
			"Garchomp",
			"Munchlax",
			"Riolu",
			"Lucario",
			"Hippopotas",
			"Hippowdon",
			"Skorupi",
			"Drapion",
			"Croagunk",
			"Toxicroak",
			"Carnivine",
			"Finneon",
			"Lumineon",
			"Mantyke",
			"Snover",
			"Abomasnow",
			"Weavile",
			"Magnezone",
			"Lickilicky",
			"Rhyperior",
			"Tangrowth",
			"Electivire",
			"Magmortar",
			"Togekiss",
			"Yanmega",
			"Leafeon",
			"Glaceon",
			"Gliscor",
			"Mamoswine",
			"Porygon-Z",
			"Gallade",
			"Probopass",
			"Dusknoir",
			"Froslass",
			"Rotom",
			"Uxie",
			"Mesprit",
			"Azelf",
			"Dialga",
			"Palkia",
			"Heatran",
			"Regigigas",
			"Giratina",
			"Cresselia",
			"Phione",
			"Manaphy",
			"Darkrai",
			"Shaymin",
			"Arceus",
			"Victini",
			"Snivy",
			"Servine",
			"Serperior",
			"Tepig",
			"Pignite",
			"Emboar",
			"Oshawott",
			"Dewott",
			"Samurott",
			"Patrat",
			"Watchog",
			"Lillipup",
			"Herdier",
			"Stoutland",
			"Purrloin",
			"Liepard",
			"Pansage",
			"Simisage",
			"Pansear",
			"Simisear",
			"Panpour",
			"Simipour",
			"Munna",
			"Musharna",
			"Pidove",
			"Tranquill",
			"Unfezant",
			"Blitzle",
			"Zebstrika",
			"Roggenrola",
			"Boldore",
			"Gigalith",
			"Woobat",
			"Swoobat",
			"Drilbur",
			"Excadrill",
			"Audino",
			"Timburr",
			"Gurdurr",
			"Conkeldurr",
			"Tympole",
			"Palpitoad",
			"Seismitoad",
			"Throh",
			"Sawk",
			"Sewaddle",
			"Swadloon",
			"Leavanny",
			"Venipede",
			"Whirlipede",
			"Scolipede",
			"Cottonee",
			"Whimsicott",
			"Petilil",
			"Lilligant",
			"Basculin",
			"Sandile",
			"Krokorok",
			"Krookodile",
			"Darumaka",
			"Darmanitan",
			"Maractus",
			"Dwebble",
			"Crustle",
			"Scraggy",
			"Scrafty",
			"Sigilyph",
			"Yamask",
			"Cofagrigus",
			"Tirtouga",
			"Carracosta",
			"Archen",
			"Archeops",
			"Trubbish",
			"Garbodor",
			"Zorua",
			"Zoroark",
			"Minccino",
			"Cinccino",
			"Gothita",
			"Gothorita",
			"Gothitelle",
			"Solosis",
			"Duosion",
			"Reuniclus",
			"Ducklett",
			"Swanna",
			"Vanillite",
			"Vanillish",
			"Vanilluxe",
			"Deerling",
			"Sawsbuck",
			"Emolga",
			"Karrablast",
			"Escavalier",
			"Foongus",
			"Amoonguss",
			"Frillish",
			"Jellicent",
			"Alomomola",
			"Joltik",
			"Galvantula",
			"Ferroseed",
			"Ferrothorn",
			"Klink",
			"Klang",
			"Klinklang",
			"Tynamo",
			"Eelektrik",
			"Eelektross",
			"Elgyem",
			"Beheeyem",
			"Litwick",
			"Lampent",
			"Chandelure",
			"Axew",
			"Fraxure",
			"Haxorus",
			"Cubchoo",
			"Beartic",
			"Cryogonal",
			"Shelmet",
			"Accelgor",
			"Stunfisk",
			"Mienfoo",
			"Mienshao",
			"Druddigon",
			"Golett",
			"Golurk",
			"Pawniard",
			"Bisharp",
			"Bouffalant",
			"Rufflet",
			"Braviary",
			"Vullaby",
			"Mandibuzz",
			"Heatmor",
			"Durant",
			"Deino",
			"Zweilous",
			"Hydreigon",
			"Larvesta",
			"Volcarona",
			"Cobalion",
			"Terrakion",
			"Virizion",
			"Tornadus",
			"Thundurus",
			"Reshiram",
			"Zekrom",
			"Landorus",
			"Kyurem",
			"Keldeo",
			"Meloetta",
			"Genesect",
			"Chespin",
			"Quilladin",
			"Chesnaught",
			"Fennekin",
			"Braixen",
			"Delphox",
			"Froakie",
			"Frogadier",
			"Greninja",
			"Bunnelby",
			"Diggersby",
			"Fletchling",
			"Fletchinder",
			"Talonflame",
			"Scatterbug",
			"Spewpa",
			"Vivillon",
			"Litleo",
			"Pyroar",
			"Flabebe",
			"Floette",
			"Florges",
			"Skiddo",
			"Gogoat",
			"Pancham",
			"Pangoro",
			"Furfrou",
			"Espurr",
			"Meowstic",
			"Honedge",
			"Doublade",
			"Aegislash",
			"Spritzee",
			"Aromatisse",
			"Swirlix",
			"Slurpuff",
			"Inkay",
			"Malamar",
			"Binacle",
			"Barbaracle",
			"Skrelp",
			"Dragalge",
			"Clauncher",
			"Clawitzer",
			"Helioptile",
			"Heliolisk",
			"Tyrunt",
			"Tyrantrum",
			"Amaura",
			"Aurorus",
			"Sylveon",
			"Hawlucha",
			"Dedenne",
			"Carbink",
			"Goomy",
			"Sliggoo",
			"Goodra",
			"Klefki",
			"Phantump",
			"Trevenant",
			"Pumpkaboo",
			"Gourgeist",
			"Bergmite",
			"Avalugg",
			"Noibat",
			"Noivern",
			"Xerneas",
			"Yveltal",
			"Zygarde",
			"Diancie",
			"Hoopa",
			"Volcanion"];
			
data.abilities = [
			"Adaptability",
			"Aerilate",
			"Aftermath",
			"Air Lock",
			"Analytic",
			"Anger Point",
			"Anticipation",
			"Arena Trap",
			"Aroma Veil",
			"Aura Break",
			"Bad Dreams",
			"Battle Armor",
			"Big Pecks",
			"Blaze",
			"Bulletproof",
			"Cheek Pouch",
			"Chlorophyll",
			"Clear Body",
			"Cloud Nine",
			"Color Change",
			"Competitive",
			"Compound Eyes",
			"Contrary",
			"Cursed Body",
			"Cute Charm",
			"Damp",
			"Dark Aura",
			"Defeatist",
			"Defiant",
			"Delta Stream",
			"Desolate Land",
			"Download",
			"Drizzle",
			"Drought",
			"Dry Skin",
			"Early Bird",
			"Effect Spore",
			"Fairy Aura",
			"Filter",
			"Flame Body",
			"Flare Boost",
			"Flash Fire",
			"Flower Gift",
			"Flower Veil",
			"Forecast",
			"Forewarn",
			"Friend Guard",
			"Frisk",
			"Fur Coat",
			"Gale Wings",
			"Gluttony",
			"Gooey",
			"Grass Pelt",
			"Guts",
			"Harvest",
			"Healer",
			"Heatproof",
			"Heavy Metal",
			"Honey Gather",
			"Huge Power",
			"Hustle",
			"Hydration",
			"Hyper Cutter",
			"Ice Body",
			"Illuminate",
			"Illusion",
			"Immunity",
			"Imposter",
			"Infiltrator",
			"Inner Focus",
			"Insomnia",
			"Intimidate",
			"Iron Barbs",
			"Iron Fist",
			"Justified",
			"Keen Eye",
			"Klutz",
			"Leaf Guard",
			"Levitate",
			"Light Metal",
			"Lightning Rod",
			"Limber",
			"Liquid Ooze",
			"Magic Bounce",
			"Magic Guard",
			"Magician",
			"Magma Armor",
			"Magnet Pull",
			"Marvel Scale",
			"Mega Launcher",
			"Minus",
			"Mold Breaker",
			"Moody",
			"Motor Drive",
			"Moxie",
			"Multiscale",
			"Multitype",
			"Mummy",
			"Natural Cure",
			"No Guard",
			"Normalize",
			"Oblivious",
			"Overcoat",
			"Overgrow",
			"Own Tempo",
			"Parental Bond",
			"Pickpocket",
			"Pickup",
			"Pixilate",
			"Plus",
			"Poison Heal",
			"Poison Point",
			"Poison Touch",
			"Prankster",
			"Pressure",
			"Primordial Sea",
			"Protean",
			"Pure Power",
			"Quick Feet",
			"Rain Dish",
			"Rattled",
			"Reckless",
			"Refrigerate",
			"Regenerator",
			"Rivalry",
			"Rock Head",
			"Rough Skin",
			"Run Away",
			"Sand Force",
			"Sand Rush",
			"Sand Stream",
			"Sand Veil",
			"Sap Sipper",
			"Scrappy",
			"Serene Grace",
			"Shadow Tag",
			"Shed Skin",
			"Sheer Force",
			"Shell Armor",
			"Shield Dust",
			"Simple",
			"Skill Link",
			"Slow Start",
			"Sniper",
			"Snow Cloak",
			"Snow Warning",
			"Solar Power",
			"Solid Rock",
			"Soundproof",
			"Speed Boost",
			"Stall",
			"Stance Change",
			"Static",
			"Steadfast",
			"Stench",
			"Sticky Hold",
			"Storm Drain",
			"Strong Jaw",
			"Sturdy",
			"Suction Cups",
			"Super Luck",
			"Swarm",
			"Sweet Veil",
			"Swift Swim",
			"Symbiosis",
			"Synchronize",
			"Tangled Feet",
			"Technician",
			"Telepathy",
			"Teravolt",
			"Thick Fat",
			"Tinted Lens",
			"Torrent",
			"Tough Claws",
			"Toxic Boost",
			"Trace",
			"Truant",
			"Turboblaze",
			"Unaware",
			"Unburden",
			"Unnerve",
			"Victory Star",
			"Vital Spirit",
			"Volt Absorb",
			"Water Absorb",
			"Water Veil",
			"Weak Armor",
			"White Smoke",
			"Wonder Guard",
			"Wonder Skin",
			"Zen Mode",];
								
data.moves = [
			"Absorb",
			"Acid",
			"Acid Armor",
			"Acid Spray",
			"Acrobatics",
			"Acupressure",
			"Aerial Ace",
			"Aeroblast",
			"After You",
			"Agility",
			"Air Cutter",
			"Air Slash",
			"Ally Switch",
			"Amnesia",
			"Ancient Power",
			"Aqua Jet",
			"Aqua Ring",
			"Aqua Tail",
			"Arm Thrust",
			"Aromatherapy",
			"Aromatic Mist",
			"Assist",
			"Assurance",
			"Astonish",
			"Attack Order",
			"Attract",
			"Aura Sphere",
			"Aurora Beam",
			"Autotomize",
			"Avalanche",
			"Baby-Doll Eyes",
			"Barrage",
			"Barrier",
			"Baton Pass",
			"Beat Up",
			"Belch",
			"Belly Drum",
			"Bestow",
			"Bide",
			"Bind",
			"Bite",
			"Blast Burn",
			"Blaze Kick",
			"Blizzard",
			"Block",
			"Blue Flare",
			"Body Slam",
			"Bolt Strike",
			"Bone Club",
			"Bone Rush",
			"Bonemerang",
			"Boomburst",
			"Bounce",
			"Brave Bird",
			"Brick Break",
			"Brine",
			"Bubble",
			"Bubble Beam",
			"Bug Bite",
			"Bug Buzz",
			"Bulk Up",
			"Bulldoze",
			"Bullet Punch",
			"Bullet Seed",
			"Calm Mind",
			"Camouflage",
			"Captivate",
			"Celebrate",
			"Charge",
			"Charge Beam",
			"Charm",
			"Chatter",
			"Chip Away",
			"Circle Throw",
			"Clamp",
			"Clear Smog",
			"Close Combat",
			"Coil",
			"Comet Punch",
			"Confide",
			"Confuse Ray",
			"Confusion",
			"Constrict",
			"Conversion",
			"Conversion 2",
			"Copycat",
			"Cosmic Power",
			"Cotton Guard",
			"Cotton Spore",
			"Counter",
			"Covet",
			"Crabhammer",
			"Crafty Shield",
			"Cross Chop",
			"Cross Poison",
			"Crunch",
			"Crush Claw",
			"Crush Grip",
			"Curse",
			"Cut",
			"Dark Pulse",
			"Dark Void",
			"Dazzling Gleam",
			"Defend Order",
			"Defense Curl",
			"Defog",
			"Destiny Bond",
			"Detect",
			"Diamond Storm",
			"Dig",
			"Disable",
			"Disarming Voice",
			"Discharge",
			"Dive",
			"Dizzy Punch",
			"Doom Desire",
			"Double Hit",
			"Double Kick",
			"Double Slap",
			"Double Team",
			"Double-Edge",
			"Draco Meteor",
			"Dragon Ascent",
			"Dragon Breath",
			"Dragon Claw",
			"Dragon Dance",
			"Dragon Pulse",
			"Dragon Rage",
			"Dragon Rush",
			"Dragon Tail",
			"Drain Punch",
			"Draining Kiss",
			"Dream Eater",
			"Drill Peck",
			"Drill Run",
			"Dual Chop",
			"Dynamic Punch",
			"Earth Power",
			"Earthquake",
			"Echoed Voice",
			"Eerie Impulse",
			"Egg Bomb",
			"Electric Terrain",
			"Electrify",
			"Electro Ball",
			"Electroweb",
			"Embargo",
			"Ember",
			"Encore",
			"Endeavor",
			"Endure",
			"Energy Ball",
			"Entrainment",
			"Eruption",
			"Explosion",
			"Extrasensory",
			"Extreme Speed",
			"Facade",
			"Fairy Lock",
			"Fairy Wind",
			"Fake Out",
			"Fake Tears",
			"False Swipe",
			"Feather Dance",
			"Feint",
			"Feint Attack",
			"Fell Stinger",
			"Fiery Dance",
			"Final Gambit",
			"Fire Blast",
			"Fire Fang",
			"Fire Pledge",
			"Fire Punch",
			"Fire Spin",
			"Fissure",
			"Flail",
			"Flame Burst",
			"Flame Charge",
			"Flame Wheel",
			"Flamethrower",
			"Flare Blitz",
			"Flash",
			"Flash Cannon",
			"Flatter",
			"Fling",
			"Flower Shield",
			"Fly",
			"Flying Press",
			"Focus Blast",
			"Focus Energy",
			"Focus Punch",
			"Follow Me",
			"Force Palm",
			"Foresight",
			"Forest's Curse",
			"Foul Play",
			"Freeze Shock",
			"Freeze-Dry",
			"Frenzy Plant",
			"Frost Breath",
			"Frustration",
			"Fury Attack",
			"Fury Cutter",
			"Fury Swipes",
			"Fusion Bolt",
			"Fusion Flare",
			"Future Sight",
			"Gastro Acid",
			"Gear Grind",
			"Geomancy",
			"Giga Drain",
			"Giga Impact",
			"Glaciate",
			"Glare",
			"Grass Knot",
			"Grass Pledge",
			"Grass Whistle",
			"Grassy Terrain",
			"Gravity",
			"Growl",
			"Growth",
			"Grudge",
			"Guard Split",
			"Guard Swap",
			"Guillotine",
			"Gunk Shot",
			"Gust",
			"Gyro Ball",
			"Hail",
			"Hammer Arm",
			"Happy Hour",
			"Harden",
			"Haze",
			"Head Charge",
			"Head Smash",
			"Headbutt",
			"Heal Bell",
			"Heal Block",
			"Heal Order",
			"Heal Pulse",
			"Healing Wish",
			"Heart Stamp",
			"Heart Swap",
			"Heat Crash",
			"Heat Wave",
			"Heavy Slam",
			"Helping Hand",
			"Hex",
			"Hidden Power",
			"High Jump Kick",
			"Hold Back",
			"Hold Hands",
			"Hone Claws",
			"Horn Attack",
			"Horn Drill",
			"Horn Leech",
			"Howl",
			"Hurricane",
			"Hydro Cannon",
			"Hydro Pump",
			"Hyper Beam",
			"Hyper Fang",
			"Hyper Voice",
			"Hyperspace Fury",
			"Hyperspace Hole",
			"Hypnosis",
			"Ice Ball",
			"Ice Beam",
			"Ice Burn",
			"Ice Fang",
			"Ice Punch",
			"Ice Shard",
			"Icicle Crash",
			"Icicle Spear",
			"Icy Wind",
			"Imprison",
			"Incinerate",
			"Inferno",
			"Infestation",
			"Ingrain",
			"Ion Deluge",
			"Iron Defense",
			"Iron Head",
			"Iron Tail",
			"Judgment",
			"Jump Kick",
			"Karate Chop",
			"Kinesis",
			"King's Shield",
			"Knock Off",
			"Land's Wrath",
			"Last Resort",
			"Lava Plume",
			"Leaf Blade",
			"Leaf Storm",
			"Leaf Tornado",
			"Leech Life",
			"Leech Seed",
			"Leer",
			"Lick",
			"Light of Ruin",
			"Light Screen",
			"Lock-On",
			"Lovely Kiss",
			"Low Kick",
			"Low Sweep",
			"Lucky Chant",
			"Lunar Dance",
			"Luster Purge",
			"Mach Punch",
			"Magic Coat",
			"Magic Room",
			"Magical Leaf",
			"Magma Storm",
			"Magnet Bomb",
			"Magnet Rise",
			"Magnetic Flux",
			"Magnitude",
			"Mat Block",
			"Me First",
			"Mean Look",
			"Meditate",
			"Mega Drain",
			"Mega Kick",
			"Mega Punch",
			"Megahorn",
			"Memento",
			"Metal Burst",
			"Metal Claw",
			"Metal Sound",
			"Meteor Mash",
			"Metronome",
			"Milk Drink",
			"Mimic",
			"Mind Reader",
			"Minimize",
			"Miracle Eye",
			"Mirror Coat",
			"Mirror Move",
			"Mirror Shot",
			"Mist",
			"Mist Ball",
			"Misty Terrain",
			"Moonblast",
			"Moonlight",
			"Morning Sun",
			"Mud Bomb",
			"Mud Shot",
			"Mud Sport",
			"Mud-Slap",
			"Muddy Water",
			"Mystical Fire",
			"Nasty Plot",
			"Natural Gift",
			"Nature Power",
			"Needle Arm",
			"Night Daze",
			"Night Shade",
			"Night Slash",
			"Nightmare",
			"Noble Roar",
			"Nuzzle",
			"Oblivion Wing",
			"Octazooka",
			"Odor Sleuth",
			"Ominous Wind",
			"Origin Pulse",
			"Outrage",
			"Overheat",
			"Pain Split",
			"Parabolic Charge",
			"Parting Shot",
			"Pay Day",
			"Payback",
			"Peck",
			"Perish Song",
			"Petal Blizzard",
			"Petal Dance",
			"Phantom Force",
			"Pin Missile",
			"Play Nice",
			"Play Rough",
			"Pluck",
			"Poison Fang",
			"Poison Gas",
			"Poison Jab",
			"Poison Powder",
			"Poison Sting",
			"Poison Tail",
			"Pound",
			"Powder",
			"Powder Snow",
			"Power Gem",
			"Power Split",
			"Power Swap",
			"Power Trick",
			"Power Whip",
			"Power-Up Punch",
			"Precipice Blades",
			"Present",
			"Protect",
			"Psybeam",
			"Psych Up",
			"Psychic",
			"Psycho Boost",
			"Psycho Cut",
			"Psycho Shift",
			"Psyshock",
			"Psystrike",
			"Psywave",
			"Punishment",
			"Pursuit",
			"Quash",
			"Quick Attack",
			"Quick Guard",
			"Quiver Dance",
			"Rage",
			"Rage Powder",
			"Rain Dance",
			"Rapid Spin",
			"Razor Leaf",
			"Razor Shell",
			"Razor Wind",
			"Recover",
			"Recycle",
			"Reflect",
			"Reflect Type",
			"Refresh",
			"Relic Song",
			"Rest",
			"Retaliate",
			"Return",
			"Revenge",
			"Reversal",
			"Roar",
			"Roar of Time",
			"Rock Blast",
			"Rock Climb",
			"Rock Polish",
			"Rock Slide",
			"Rock Smash",
			"Rock Throw",
			"Rock Tomb",
			"Rock Wrecker",
			"Role Play",
			"Rolling Kick",
			"Rollout",
			"Roost",
			"Rototiller",
			"Round",
			"Sacred Fire",
			"Sacred Sword",
			"Safeguard",
			"Sand Attack",
			"Sand Tomb",
			"Sandstorm",
			"Scald",
			"Scary Face",
			"Scratch",
			"Screech",
			"Searing Shot",
			"Secret Power",
			"Secret Sword",
			"Seed Bomb",
			"Seed Flare",
			"Seismic Toss",
			"Self-Destruct",
			"Shadow Ball",
			"Shadow Claw",
			"Shadow Force",
			"Shadow Punch",
			"Shadow Sneak",
			"Sharpen",
			"Sheer Cold",
			"Shell Smash",
			"Shift Gear",
			"Shock Wave",
			"Signal Beam",
			"Silver Wind",
			"Simple Beam",
			"Sing",
			"Sketch",
			"Skill Swap",
			"Skull Bash",
			"Sky Attack",
			"Sky Drop",
			"Sky Uppercut",
			"Slack Off",
			"Slam",
			"Slash",
			"Sleep Powder",
			"Sleep Talk",
			"Sludge",
			"Sludge Bomb",
			"Sludge Wave",
			"Smack Down",
			"Smelling Salts",
			"Smog",
			"Smokescreen",
			"Snarl",
			"Snatch",
			"Snore",
			"Soak",
			"Soft-Boiled",
			"Solar Beam",
			"Sonic Boom",
			"Spacial Rend",
			"Spark",
			"Spider Web",
			"Spike Cannon",
			"Spikes",
			"Spiky Shield",
			"Spit Up",
			"Spite",
			"Splash",
			"Spore",
			"Stealth Rock",
			"Steam Eruption",
			"Steamroller",
			"Steel Wing",
			"Sticky Web",
			"Stockpile",
			"Stomp",
			"Stone Edge",
			"Stored Power",
			"Storm Throw",
			"Strength",
			"String Shot",
			"Struggle",
			"Struggle Bug",
			"Stun Spore",
			"Submission",
			"Substitute",
			"Sucker Punch",
			"Sunny Day",
			"Super Fang",
			"Superpower",
			"Supersonic",
			"Surf",
			"Swagger",
			"Swallow",
			"Sweet Kiss",
			"Sweet Scent",
			"Swift",
			"Switcheroo",
			"Swords Dance",
			"Synchronoise",
			"Synthesis",
			"Tackle",
			"Tail Glow",
			"Tail Slap",
			"Tail Whip",
			"Tailwind",
			"Take Down",
			"Taunt",
			"Techno Blast",
			"Teeter Dance",
			"Telekinesis",
			"Teleport",
			"Thief",
			"Thousand Arrows",
			"Thousand Waves",
			"Thrash",
			"Thunder",
			"Thunder Fang",
			"Thunder Punch",
			"Thunder Shock",
			"Thunder Wave",
			"Thunderbolt",
			"Tickle",
			"Topsy-Turvy",
			"Torment",
			"Toxic",
			"Toxic Spikes",
			"Transform",
			"Tri Attack",
			"Trick",
			"Trick Room",
			"Trick-or-Treat",
			"Triple Kick",
			"Trump Card",
			"Twineedle",
			"Twister",
			"U-turn",
			"Uproar",
			"V-create",
			"Vacuum Wave",
			"Venom Drench",
			"Venoshock",
			"Vice Grip",
			"Vine Whip",
			"Vital Throw",
			"Volt Switch",
			"Volt Tackle",
			"Wake-Up Slap",
			"Water Gun",
			"Water Pledge",
			"Water Pulse",
			"Water Shuriken",
			"Water Sport",
			"Water Spout",
			"Waterfall",
			"Weather Ball",
			"Whirlpool",
			"Whirlwind",
			"Wide Guard",
			"Wild Charge",
			"Will-O-Wisp",
			"Wing Attack",
			"Wish",
			"Withdraw",
			"Wonder Room",
			"Wood Hammer",
			"Work Up",
			"Worry Seed",
			"Wrap",
			"Wring Out",
			"X-Scissor",
			"Yawn",
			"Zap Cannon",
			"Zen Headbutt"];