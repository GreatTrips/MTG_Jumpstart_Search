// ─── JUMPSTART DECK DATA ─────────────────────────────────────────────────────
// Each half-deck is 20 cards.
// JMP/J22/J21 packs: ~9 basic lands + 11 spells
// J25 packs: 7 basic lands + 1 Thriving land + 12 spells
// Card names must match Scryfall exactly for images to load.
// Colors: W=White, U=Blue, B=Black, R=Red, G=Green.
// CONTRIBUTING: https://github.com/your-repo/jumpstart-browser
// ─────────────────────────────────────────────────────────────────────────────
const DECK_DATA = {
  editions: [

    // ── JUMPSTART 2020 ────────────────────────────────────────────────────────
    { id:'jmp', name:'Jumpstart', year:2020, code:'JMP', decks:[
      { id:'jmp-above-the-clouds', name:'Above the Clouds', colors:['W'], headliner:'Warden of Evos Isle', variants:[
        { label:'Warden', cards:[{name:'Plains',qty:9,basic:true},{name:'Warden of Evos Isle',qty:2},{name:'Empyrean Eagle',qty:1},{name:'Cloudblazer',qty:1},{name:'Concordia Pegasus',qty:2},{name:'Aether Swooper',qty:2},{name:'Rustwing Falcon',qty:2},{name:'Aerial Assault',qty:1}]},
        { label:'Alela', cards:[{name:'Plains',qty:9,basic:true},{name:'Alela, Artful Provocateur',qty:1},{name:'Empyrean Eagle',qty:1},{name:'Warden of Evos Isle',qty:1},{name:'Concordia Pegasus',qty:2},{name:'Faerie Miscreant',qty:2},{name:'Rustwing Falcon',qty:2},{name:'Aerial Assault',qty:1},{name:'Cloudblazer',qty:1}]}
      ]},
      { id:'jmp-angels', name:'Angels', colors:['W'], headliner:"Emeria's Call", variants:[
        { label:"Emeria's Call", cards:[{name:'Plains',qty:9,basic:true},{name:"Emeria's Call // Emeria, Shattered Skyclave",qty:1},{name:'Baneslayer Angel',qty:1},{name:'Serra Angel',qty:2},{name:'Stalwart Valkyrie',qty:2},{name:'Angel of Vitality',qty:1},{name:"Serra's Guardian",qty:1},{name:'Take Vengeance',qty:2},{name:'Inspired Charge',qty:1}]},
        { label:'Akroma', cards:[{name:'Plains',qty:9,basic:true},{name:'Akroma, Angel of Wrath',qty:1},{name:'Serra Angel',qty:2},{name:'Stalwart Valkyrie',qty:2},{name:'Angel of Vitality',qty:1},{name:"Serra's Guardian",qty:1},{name:'Take Vengeance',qty:2},{name:'Inspired Charge',qty:1},{name:'Angelic Gift',qty:1}]}
      ]},
      { id:'jmp-archaeology', name:'Archaeology', colors:['B'], headliner:'Tinybones, Trinket Thief', variants:[{label:'Tinybones',cards:[]}]},
      { id:'jmp-cats', name:'Cats', colors:['W'], headliner:'Kaheera, the Orphanguard', variants:[
        { label:'Kaheera', cards:[{name:'Plains',qty:9,basic:true},{name:'Kaheera, the Orphanguard',qty:1},{name:'Regal Caracal',qty:1},{name:'Felidar Sovereign',qty:1},{name:'Oreskos Swiftclaw',qty:2},{name:'Savannah Lions',qty:2},{name:'Sacred Cat',qty:2},{name:'Leonin Vanguard',qty:1},{name:'Pacifism',qty:1}]}
      ]},
      { id:'jmp-devilish', name:'Devilish', colors:['R'], headliner:'Zurzoth, Chaos Rider', variants:[{label:'Zurzoth',cards:[]}]},
      { id:'jmp-doctor', name:'Doctor', colors:['U'], headliner:'Surgeon General Commander', variants:[{label:'SGC',cards:[]}]},
      { id:'jmp-dragons', name:'Dragons', colors:['R'], headliner:'Terror of the Peaks', variants:[
        { label:'Terror', cards:[{name:'Mountain',qty:9,basic:true},{name:'Terror of the Peaks',qty:1},{name:'Demanding Dragon',qty:1},{name:'Shivan Dragon',qty:1},{name:'Scorch Spewer',qty:2},{name:'Dragon Egg',qty:2},{name:'Draconic Roar',qty:2},{name:'Shock',qty:2}]}
      ]},
      { id:'jmp-elves', name:'Elves', colors:['G'], headliner:'Allosaurus Shepherd', variants:[
        { label:'Allosaurus', cards:[{name:'Forest',qty:9,basic:true},{name:'Allosaurus Shepherd',qty:1},{name:'Elvish Archdruid',qty:2},{name:'Llanowar Elves',qty:4},{name:'Elvish Clancaller',qty:1},{name:'Fauna Shaman',qty:1},{name:'Ambush Viper',qty:1},{name:'Reclamation Sage',qty:1}]},
        { label:'Imperious Perfect', cards:[{name:'Forest',qty:9,basic:true},{name:'Imperious Perfect',qty:1},{name:'Elvish Archdruid',qty:2},{name:'Llanowar Elves',qty:4},{name:'Elvish Clancaller',qty:1},{name:'Fauna Shaman',qty:1},{name:'Sylvan Messenger',qty:1},{name:'Reclamation Sage',qty:1}]}
      ]},
      { id:'jmp-garruk', name:'Garruk', colors:['G'], headliner:'Garruk, Unleashed', variants:[
        { label:'Garruk', cards:[{name:'Forest',qty:9,basic:true},{name:'Garruk, Unleashed',qty:1},{name:"Garruk's Harbinger",qty:1},{name:"Garruk's Gorehorn",qty:2},{name:"Garruk's Uprising",qty:1},{name:'Primal Might',qty:1},{name:'Ferocious Pup',qty:2},{name:'Fierce Empath',qty:1},{name:'Canopy Stalker',qty:2}]}
      ]},
      { id:'jmp-goblins', name:'Goblins', colors:['R'], headliner:'Muxus, Goblin Grandee', variants:[
        { label:'Muxus', cards:[{name:'Mountain',qty:9,basic:true},{name:'Muxus, Goblin Grandee',qty:1},{name:'Goblin Warchief',qty:2},{name:'Goblin Chieftain',qty:1},{name:'Goblin Ringleader',qty:1},{name:'Munitions Expert',qty:1},{name:'Conspicuous Snoop',qty:1},{name:'Goblin Oriflamme',qty:1},{name:'Goblin Assailant',qty:3}]},
        { label:'Goblin Trashmaster', cards:[{name:'Mountain',qty:9,basic:true},{name:'Goblin Trashmaster',qty:1},{name:'Goblin Warchief',qty:2},{name:'Goblin Chieftain',qty:1},{name:'Goblin Ringleader',qty:1},{name:'Goblin Oriflamme',qty:2},{name:'Skirk Prospector',qty:1},{name:'Goblin Assailant',qty:3}]}
      ]},
      { id:'jmp-heavily-armored', name:'Heavily Armored', colors:['W'], headliner:'Colossus Hammer', variants:[{label:'Colossus',cards:[]}]},
      { id:'jmp-history', name:'History', colors:['W'], headliner:'Rhys the Redeemed', variants:[{label:'Rhys',cards:[]}]},
      { id:'jmp-lab', name:'Lab', colors:['U'], headliner:'Barrin, Master Wizard', variants:[{label:'Barrin',cards:[]}]},
      { id:'jmp-lands', name:'Lands', colors:['G'], headliner:'Phylath, World Sculptor', variants:[{label:'Phylath',cards:[]}]},
      { id:'jmp-lightning', name:'Lightning', colors:['R'], headliner:'Lightning Bolt', variants:[
        { label:'Lightning Bolt', cards:[{name:'Mountain',qty:9,basic:true},{name:'Lightning Bolt',qty:4},{name:'Shock',qty:3},{name:'Lightning Strike',qty:2},{name:'Electrostatic Field',qty:1},{name:'Thrill of Possibility',qty:1}]}
      ]},
      { id:'jmp-liliana', name:'Liliana', colors:['B'], headliner:'Liliana, Waker of the Dead', variants:[
        { label:"Liliana's Devotee", cards:[{name:'Swamp',qty:9,basic:true},{name:'Liliana, Waker of the Dead',qty:1},{name:"Liliana's Devotee",qty:2},{name:"Liliana's Scrounger",qty:2},{name:'Lazotep Reaver',qty:2},{name:'Reassembling Skeleton',qty:2},{name:"Stitcher's Supplier",qty:1},{name:'Vilis, Broker of Blood',qty:1}]}
      ]},
      { id:'jmp-minions', name:'Minions', colors:['B'], headliner:'Davriel, Rogue Shadowmage', variants:[{label:'Davriel',cards:[]}]},
      { id:'jmp-minotaur', name:'Minotaur', colors:['B','R'], headliner:'Sethron, Hurloon General', variants:[{label:'Sethron',cards:[]}]},
      { id:'jmp-mu-yanling', name:'Mu Yanling', colors:['U'], headliner:'Mu Yanling, Sky Dancer', variants:[{label:'Sky Dancer',cards:[]}]},
      { id:'jmp-phyrexian', name:'Phyrexian', colors:['B'], headliner:'Phyrexian Obliterator', variants:[
        { label:'Obliterator', cards:[{name:'Swamp',qty:9,basic:true},{name:'Phyrexian Obliterator',qty:1},{name:'Phyrexian Arena',qty:1},{name:'Phyrexian Rager',qty:2},{name:'Priest of Gix',qty:2},{name:'Fleshbag Marauder',qty:2},{name:'Cauldron Haze',qty:1},{name:'Bone Splinters',qty:2}]}
      ]},
      { id:'jmp-pirates', name:'Pirates', colors:['U'], headliner:'Corsair Captain', variants:[{label:'Captain',cards:[]}]},
      { id:'jmp-plus-one', name:'Plus One', colors:['G'], headliner:'Conclave Mentor', variants:[{label:'Mentor',cards:[]}]},
      { id:'jmp-rainbow', name:'Rainbow', colors:['W','U','B','R','G'], headliner:'Rienne, Angel of Rebirth', variants:[{label:'Rienne',cards:[]}]},
      { id:'jmp-reanimated', name:'Reanimated', colors:['B'], headliner:'Ghoulcaller Gisa', variants:[{label:'Gisa',cards:[]}]},
      { id:'jmp-slivers', name:'Slivers', colors:['W','U','B','R','G'], headliner:'The First Sliver', variants:[{label:'The First Sliver',cards:[]}]},
      { id:'jmp-smashing', name:'Smashing', colors:['G'], headliner:'Awakened Amalgam', variants:[{label:'Amalgam',cards:[]}]},
      { id:'jmp-spells', name:'Spells', colors:['U'], headliner:'Talrand, Sky Summoner', variants:[{label:'Talrand',cards:[]}]},
      { id:'jmp-spreading-seas', name:'Spreading Seas', colors:['U'], headliner:'Thassa, Deep-Dwelling', variants:[{label:'Thassa',cards:[]}]},
      { id:'jmp-teferi', name:'Teferi', colors:['U'], headliner:'Teferi, Master of Time', variants:[
        { label:'Variant A', cards:[{name:'Island',qty:9,basic:true},{name:'Teferi, Master of Time',qty:1},{name:"Teferi's Tutelage",qty:2},{name:"Teferi's Ageless Insight",qty:1},{name:'Frantic Inventory',qty:2},{name:'Opt',qty:3},{name:'Unsummon',qty:1},{name:'Shore Up',qty:1}]},
        { label:'Variant B', cards:[{name:'Island',qty:9,basic:true},{name:'Teferi, Master of Time',qty:1},{name:"Teferi's Tutelage",qty:2},{name:"Teferi's Ageless Insight",qty:1},{name:'Frantic Inventory',qty:2},{name:'Opt',qty:3},{name:'Unsummon',qty:1},{name:'Negate',qty:1}]},
        { label:'Variant C', cards:[{name:'Island',qty:9,basic:true},{name:'Teferi, Master of Time',qty:1},{name:"Teferi's Tutelage",qty:2},{name:"Teferi's Ageless Insight",qty:1},{name:'Frantic Inventory',qty:2},{name:'Opt',qty:3},{name:'Unsummon',qty:1},{name:'Discontinuity',qty:1}]},
        { label:'Variant D', cards:[{name:'Island',qty:9,basic:true},{name:'Teferi, Master of Time',qty:1},{name:"Teferi's Tutelage",qty:2},{name:"Teferi's Ageless Insight",qty:1},{name:'Frantic Inventory',qty:2},{name:'Opt',qty:3},{name:'Unsummon',qty:1},{name:'Mana Leak',qty:1}]}
      ]},
      { id:'jmp-under-the-sea', name:'Under the Sea', colors:['U'], headliner:'Anemospout', variants:[{label:'Anemospout',cards:[]}]},
      { id:'jmp-unicorns', name:'Unicorns', colors:['W'], headliner:'Crested Sunmare', variants:[{label:'Sunmare',cards:[]}]},
      { id:'jmp-vampires', name:'Vampires', colors:['B'], headliner:'Vampire Nocturnus', variants:[
        { label:'Nocturnus', cards:[{name:'Swamp',qty:9,basic:true},{name:'Vampire Nocturnus',qty:1},{name:'Cordial Vampire',qty:2},{name:'Bloodthirsty Aerialist',qty:1},{name:'Champion of Dusk',qty:1},{name:'Sanctum Seeker',qty:1},{name:'Silversmote Ghoul',qty:2},{name:'Vampire of the Dire Moon',qty:2},{name:"Sorin's Thirst",qty:1}]},
        { label:"Edgar's Awakening", cards:[{name:'Swamp',qty:9,basic:true},{name:"Edgar's Awakening",qty:1},{name:'Cordial Vampire',qty:2},{name:'Bloodthirsty Aerialist',qty:1},{name:'Champion of Dusk',qty:1},{name:'Sanctum Seeker',qty:1},{name:'Silversmote Ghoul',qty:2},{name:'Vampire of the Dire Moon',qty:2},{name:"Sorin's Thirst",qty:1}]}
      ]},
      { id:'jmp-walls', name:'Walls', colors:['W','U'], headliner:'Arcades, the Strategist', variants:[{label:'Arcades',cards:[]}]},
      { id:'jmp-witchcraft', name:'Witchcraft', colors:['B'], headliner:'Demonic Tutor', variants:[{label:'Tutor',cards:[]}]},
      { id:'jmp-wolf', name:'Wolf', colors:['G'], headliner:'Nightpack Ambusher', variants:[{label:'Nightpack',cards:[]}]},
      { id:'jmp-zoo', name:'Zoo', colors:['R','G','W'], headliner:'Zilortha, Strength Incarnate', variants:[{label:'Zilortha',cards:[]}]}
    ]},

    // ── JUMPSTART 2022 ────────────────────────────────────────────────────────
    { id:'j22', name:'Jumpstart 2022', year:2022, code:'J22', decks:[
      { id:'j22-beasts', name:'Beasts', colors:['G'], headliner:'Garruk, Primal Hunter', variants:[{label:'Garruk',cards:[]}]},
      { id:'j22-chaos', name:'Chaos', colors:['R'], headliner:'Chaos Warp', variants:[{label:'Chaos Warp',cards:[]}]},
      { id:'j22-death', name:'Death', colors:['B'], headliner:'Grave Titan', variants:[
        { label:"Liliana's Mastery", cards:[{name:'Swamp',qty:7,basic:true},{name:'Thriving Moor',qty:1,basic:true},{name:"Liliana's Mastery",qty:1},{name:'Deadly Plot',qty:1},{name:'Lord of the Accursed',qty:1},{name:'Undead Augur',qty:1},{name:'Cellar Door',qty:1},{name:'Suspicious Shambler',qty:1},{name:'Shambling Ghoul',qty:1},{name:'Crow of Dark Tidings',qty:1},{name:'Marauding Boneslasher',qty:1},{name:'Maalfeld Twins',qty:1},{name:'Dead Weight',qty:1},{name:'Cemetery Recruitment',qty:1}]},
        { label:'Massacre Wurm', cards:[{name:'Swamp',qty:6,basic:true},{name:'Thriving Moor',qty:1,basic:true},{name:'Leechridden Swamp',qty:1,basic:true},{name:'Massacre Wurm',qty:1},{name:'Skullslither Worm',qty:1},{name:'Plaguecrafter',qty:1},{name:'Yargle, Glutton of Urborg',qty:1},{name:'Infernal Idol',qty:1},{name:'Blight Keeper',qty:1},{name:'Black Cat',qty:1},{name:'Durable Coilbug',qty:1},{name:'Devouring Swarm',qty:1},{name:'Eaten Alive',qty:1},{name:'Grotesque Mutation',qty:1},{name:'Strangling Spores',qty:1}]},
        { label:'Phyrexian Plaguelord', cards:[{name:'Swamp',qty:6,basic:true},{name:'Thriving Moor',qty:1,basic:true},{name:'Blighted Fen',qty:1,basic:true},{name:'Phyrexian Plaguelord',qty:1},{name:'Plaguecrafter',qty:1},{name:'Skullslither Worm',qty:1},{name:'Phyrexian Reclamation',qty:1},{name:'Blight Keeper',qty:1},{name:'Durable Coilbug',qty:1},{name:'Deathbloom Thallid',qty:1},{name:'Devouring Swarm',qty:1},{name:'Phyrexian Debaser',qty:1},{name:'Eaten Alive',qty:1},{name:'Fungal Infection',qty:1},{name:'Grotesque Mutation',qty:1}]},
        { label:'Deathbringer Regent', cards:[{name:'Swamp',qty:6,basic:true},{name:'Thriving Moor',qty:1,basic:true},{name:'Deathbringer Regent',qty:1},{name:'Plaguecrafter',qty:1},{name:'Skullslither Worm',qty:1},{name:'Kraul Swarm',qty:1},{name:'Death Wind',qty:1},{name:'Blight Keeper',qty:1},{name:'Durable Coilbug',qty:1},{name:'Dune Beetle',qty:1},{name:'Devouring Swarm',qty:1},{name:'Eaten Alive',qty:1},{name:'Grotesque Mutation',qty:1},{name:'Infernal Idol',qty:1}]}
      ]},
      { id:'j22-dominaria', name:'Dominaria', colors:['W'], headliner:'Teferi, Temporal Pilgrim', variants:[{label:'Teferi',cards:[]}]},
      { id:'j22-dragons', name:'Dragons', colors:['R'], headliner:'Ganax, Astral Hunter', variants:[{label:'Ganax',cards:[]}]},
      { id:'j22-elder-dragons', name:'Elder Dragons', colors:['W','U','B','R','G'], headliner:'Chromium, the Mutable', variants:[{label:'Chromium',cards:[]},{label:'Vaevictis',cards:[]}]},
      { id:'j22-enchantments', name:'Enchantments', colors:['W','U'], headliner:'Katilda, Dawnhart Martyr', variants:[{label:'Katilda',cards:[]}]},
      { id:'j22-faeries', name:'Faeries', colors:['U','B'], headliner:'Alela, Cunning Conqueror', variants:[{label:'Alela',cards:[]}]},
      { id:'j22-goblins', name:'Goblins', colors:['R'], headliner:'Krenko, Tin Street Kingpin', variants:[{label:'Krenko',cards:[]}]},
      { id:'j22-heroes', name:'Heroes', colors:['W'], headliner:'Starnheim Courser', variants:[
        { label:'Lita, Mechanical Engineer', cards:[{name:'Plains',qty:7,basic:true},{name:'Thriving Heath',qty:1,basic:true},{name:'Lita, Mechanical Engineer',qty:1},{name:'Peacewalker Colossus',qty:1},{name:'Hotshot Mechanic',qty:1},{name:'Imperial Recovery Unit',qty:1},{name:'Aethershield Artificer',qty:1},{name:'Aerial Modification',qty:1},{name:'Kitsune Ace',qty:1},{name:'Sanctum Gargoyle',qty:1},{name:'Built to Last',qty:1},{name:'Caught in the Brights',qty:1},{name:'Giant Ox',qty:1},{name:'Aradara Express',qty:1}]}
      ]},
      { id:'j22-lore', name:'Lore', colors:['U'], headliner:'Sage of the Falls', variants:[
        { label:'Isu the Abominable', cards:[{name:'Snow-Covered Island',qty:7,basic:true},{name:'Shimmerdrift Vale',qty:1,basic:true},{name:'Isu the Abominable',qty:1},{name:"Marit Lage's Slumber",qty:1},{name:'Coldsteel Heart',qty:1},{name:'Avalanche Caller',qty:1},{name:'Phyrexian Ironfoot',qty:1},{name:'Icebind Pillar',qty:1},{name:'Pilfering Hawk',qty:1},{name:'Frostpeak Yeti',qty:1},{name:'Chillerpillar',qty:1},{name:'Berg Strider',qty:1},{name:"Winter's Rest",qty:1},{name:'Crippling Chill',qty:1}]},
        { label:'Barrin, Tolarian Archmage', cards:[{name:'Island',qty:7,basic:true},{name:'Thriving Isle',qty:1,basic:true},{name:'Barrin, Tolarian Archmage',qty:1},{name:'Biblioplex Kraken',qty:1},{name:'Kasmina, Enigmatic Mentor',qty:1},{name:'Dismiss',qty:1},{name:'Overwhelmed Apprentice',qty:1},{name:'Merfolk Pupil',qty:1},{name:'Wizard Mentor',qty:1},{name:'Tragic Lesson',qty:1},{name:'Elite Instructor',qty:1},{name:'Tolarian Sentinel',qty:1},{name:'Academy Journeymage',qty:1},{name:'Bury in Books',qty:1}]},
        { label:'Rhystic Study', cards:[{name:'Island',qty:7,basic:true},{name:'Thriving Isle',qty:1,basic:true},{name:'Rhystic Study',qty:1},{name:'Multiple Choice',qty:1},{name:'Biblioplex Kraken',qty:1},{name:'Kasmina, Enigmatic Mentor',qty:1},{name:'Overwhelmed Apprentice',qty:1},{name:'Dismiss',qty:1},{name:'Merfolk Pupil',qty:1},{name:'Campus Guide',qty:1},{name:"Teferi's Protege",qty:1},{name:'Elite Instructor',qty:1},{name:'Academy Journeymage',qty:1},{name:'Bury in Books',qty:1}]},
        { label:'Kenessos, Priest of Thassa', cards:[{name:'Island',qty:7,basic:true},{name:'Thriving Isle',qty:1,basic:true},{name:'Kenessos, Priest of Thassa',qty:1},{name:'Biblioplex Kraken',qty:1},{name:'Cryptic Serpent',qty:1},{name:'Perilous Voyage',qty:1},{name:'Interpret the Signs',qty:1},{name:'Preordain',qty:1},{name:'Faerie Seer',qty:1},{name:"Sage's Row Savant",qty:1},{name:'Moonfolk Puzzlemaker',qty:1},{name:'Octoprophet',qty:1},{name:'No Escape',qty:1},{name:"Raiders' Karve",qty:1}]}
      ]},
      { id:'j22-minotaurs', name:'Minotaurs', colors:['B','R'], headliner:'Fanatic of Mogis', variants:[{label:'Fanatic',cards:[]}]},
      { id:'j22-party', name:'Party', colors:['W','U','B','R'], headliner:'Tazri, Stalwart Survivor', variants:[{label:'Tazri',cards:[]}]},
      { id:'j22-rogues', name:'Rogues', colors:['U','B'], headliner:'Zareth San, the Trickster', variants:[{label:'Zareth San',cards:[]}]},
      { id:'j22-shapeshifters', name:'Shapeshifters', colors:['U'], headliner:'Vesuvan Shapeshifter', variants:[{label:'Shapeshifter',cards:[]}]},
      { id:'j22-skulls', name:'Skulls', colors:['B'], headliner:'Danse Macabre', variants:[{label:'Danse Macabre',cards:[]}]},
      { id:'j22-soldiers', name:'Soldiers', colors:['W'], headliner:'Myrel, Shield of Argive', variants:[{label:'Myrel',cards:[]}]},
      { id:'j22-spells', name:'Spells', colors:['U'], headliner:'Archmage Emeritus', variants:[{label:'Archmage',cards:[]}]},
      { id:'j22-stompy', name:'Stompy', colors:['G'], headliner:'Maskwood Nexus', variants:[{label:'Stompy',cards:[]}]},
      { id:'j22-undead', name:'Undead', colors:['B'], headliner:'Gleaming Overseer', variants:[{label:'Overseer',cards:[]}]},
      { id:'j22-vampires', name:'Vampires', colors:['B'], headliner:'Florian, Voldaren Scion', variants:[{label:'Florian',cards:[]}]},
      { id:'j22-wizards', name:'Wizards', colors:['U','R'], headliner:'Adeliz, the Cinder Wind', variants:[{label:'Adeliz',cards:[]}]}
    ]},

    // ── HISTORIC HORIZONS (J21) ───────────────────────────────────────────────
    { id:'j21', name:'Historic Horizons', year:2021, code:'J21', decks:[
      { id:'j21-assembled', name:'Assembled', colors:['W'], headliner:'Heliod, Sun-Crowned', variants:[{label:'Heliod',cards:[]}]},
      { id:'j21-bob', name:'B.O.B.', colors:['R'], headliner:'Bag of Boulders', variants:[{label:'B.O.B.',cards:[]}]},
      { id:'j21-collected', name:'Collected', colors:['G'], headliner:'Collected Company', variants:[{label:'CoCo',cards:[]}]},
      { id:'j21-dominaria', name:'Dominaria', colors:['W'], headliner:'Teferi, Hero of Dominaria', variants:[{label:'Teferi',cards:[]}]},
      { id:'j21-dragons', name:'Dragons', colors:['R'], headliner:'Braids, Conjurer Adept', variants:[{label:'Braids',cards:[]}]},
      { id:'j21-enchantments', name:'Enchantments', colors:['W','U'], headliner:"Sythis, Harvest's Hand", variants:[{label:'Sythis',cards:[]}]},
      { id:'j21-elves', name:'Elves', colors:['G'], headliner:'Elvish Warmaster', variants:[{label:'Warmaster',cards:[]}]},
      { id:'j21-goblins', name:'Goblins', colors:['R'], headliner:'Goblin Anarchomancer', variants:[{label:'Anarchomancer',cards:[]}]},
      { id:'j21-gods', name:'Gods', colors:['W','U','B','R','G'], headliner:'Purphoros, Bronze-Blooded', variants:[{label:'Purphoros',cards:[]}]},
      { id:'j21-humans', name:'Humans', colors:['W'], headliner:'Champion of the Parish', variants:[{label:'Champion',cards:[]}]},
      { id:'j21-lands', name:'Lands', colors:['G'], headliner:'Valakut Exploration', variants:[{label:'Valakut',cards:[]}]},
      { id:'j21-merfolk', name:'Merfolk', colors:['U'], headliner:'Svyelun of Sea and Sky', variants:[{label:'Svyelun',cards:[]}]},
      { id:'j21-modified', name:'Modified', colors:['G'], headliner:'Hamza, Guardian of Arashin', variants:[{label:'Hamza',cards:[]}]},
      { id:'j21-phyrexian', name:'Phyrexian', colors:['B'], headliner:'Glistener Elf', variants:[{label:'Glistener Elf',cards:[]}]},
      { id:'j21-rogues', name:'Rogues', colors:['U','B'], headliner:'Anowon, the Ruin Thief', variants:[{label:'Anowon',cards:[]}]},
      { id:'j21-spirits', name:'Spirits', colors:['W','U'], headliner:'Katilda, Dawnhart Prime', variants:[{label:'Katilda',cards:[]}]},
      { id:'j21-vampires', name:'Vampires', colors:['B'], headliner:'Sorin the Mirthless', variants:[{label:'Sorin',cards:[]}]},
      { id:'j21-wizards', name:'Wizards', colors:['U'], headliner:'Baral, Chief of Compliance', variants:[{label:'Baral',cards:[]}]},
      { id:'j21-wolves', name:'Wolves', colors:['G'], headliner:'Tovolar, Dire Overlord', variants:[{label:'Tovolar',cards:[]}]},
      { id:'j21-zombies', name:'Zombies', colors:['B'], headliner:'Thalisse, Reverent Medium', variants:[{label:'Thalisse',cards:[]}]}
    ]},

    // ── FOUNDATIONS JUMPSTART / J25 ───────────────────────────────────────────
    // Released Nov 15, 2024. 46 themes. Card lists from official Wizards decklists.
    // Each pack: 12 spells + 1 Thriving land + 7 basic lands = 20 cards.
    { id:'j25', name:'Foundations Jumpstart', year:2024, code:'J25', decks:[
      // WHITE
      { id:'j25-angels', name:'Angels', colors:['W'], headliner:"Qala, Ajani's Pridemate", variants:[
        { label:'Qala', cards:[{name:'Plains',qty:7,basic:true},{name:'Thriving Heath',qty:1,basic:true},{name:"Qala, Ajani's Pridemate",qty:1},{name:'Hinterland Sanctifier',qty:1},{name:'Speaker of the Heavens',qty:1},{name:"Ajani's Pridemate",qty:1},{name:'Mesa Unicorn',qty:1},{name:'Angel of Vitality',qty:1},{name:'Brightmare',qty:1},{name:'Angel of Mercy',qty:1},{name:'Divine Arrow',qty:1},{name:'Revitalize',qty:1},{name:'Desperate Lunge',qty:1},{name:"Faith's Fetters",qty:1}]}
      ]},
      { id:'j25-armed', name:'Armed', colors:['W'], headliner:'Danitha Capashen, Paragon', variants:[
        { label:'Danitha', cards:[{name:'Plains',qty:7,basic:true},{name:'Thriving Heath',qty:1,basic:true},{name:'Danitha Capashen, Paragon',qty:1},{name:'Fencing Ace',qty:1},{name:'Sunspear Shikari',qty:1},{name:'Ancestral Blade',qty:1},{name:'Starnheim Courser',qty:1},{name:'Faithful Pikemaster',qty:1},{name:'Mirran Bardiche',qty:1},{name:"Valkyrie's Sword",qty:1},{name:'Pacifism',qty:1},{name:'Divine Arrow',qty:1},{name:'Starnheim Memento',qty:1},{name:'Mace of the Valiant',qty:1}]}
      ]},
      { id:'j25-clerics', name:'Clerics', colors:['W'], headliner:'Daru Spiritualist', variants:[{label:'Clerics',cards:[]}]},
      { id:'j25-enchanted', name:'Enchanted', colors:['W'], headliner:'Psemilla, Meletian Poet', variants:[{label:'Psemilla',cards:[]}]},
      { id:'j25-giddyap', name:'Giddyap', colors:['W'], headliner:'Crested Sunmare', variants:[{label:'Sunmare',cards:[]}]},
      { id:'j25-healers', name:'Healers', colors:['W'], headliner:'Loran, Disciple of History', variants:[{label:'Loran',cards:[]}]},
      { id:'j25-heroes', name:'Heroes', colors:['W'], headliner:'Adeline, Resplendent Cathar', variants:[{label:'Adeline',cards:[]}]},
      { id:'j25-prideful', name:'Prideful', colors:['W'], headliner:'Brimaz, King of Oreskos', variants:[{label:'Brimaz',cards:[]}]},
      { id:'j25-soaring', name:'Soaring', colors:['W'], headliner:'Lyra Dawnbringer', variants:[{label:'Lyra',cards:[]}]},
      // BLUE
      { id:'j25-bookworms', name:'Bookworms', colors:['U'], headliner:'Sage of the Falls', variants:[{label:'Sage',cards:[]}]},
      { id:'j25-drowned', name:'Drowned', colors:['U'], headliner:'Plagon, Lord of the Beach', variants:[
        { label:'Plagon', cards:[{name:'Island',qty:7,basic:true},{name:'Thriving Isle',qty:1,basic:true},{name:'Plagon, Lord of the Beach',qty:1},{name:'Shorecomber Crab',qty:1},{name:'Sigiled Starfish',qty:1},{name:'Purple-Crystal Crab',qty:1},{name:'Gilded Scuttler',qty:1},{name:'Tidepool Turtle',qty:1},{name:"Yarok's Wavecrasher",qty:1},{name:'Kapsho Kitefins',qty:1},{name:'Omen of the Sea',qty:1},{name:'Starlight Snare',qty:1},{name:'Delightful Discovery',qty:1},{name:'Run Ashore',qty:1}]}
      ]},
      { id:'j25-illusions', name:'Illusions', colors:['U'], headliner:'Phantom Nishoba', variants:[{label:'Phantoms',cards:[]}]},
      { id:'j25-inventive', name:'Inventive', colors:['U'], headliner:'Vedalken Engineer', variants:[{label:'Engineer',cards:[]}]},
      { id:'j25-ninjas', name:'Ninjas', colors:['U'], headliner:'Satoru Umezawa', variants:[{label:'Satoru',cards:[]}]},
      { id:'j25-of-the-coast', name:'Of the Coast', colors:['U'], headliner:'Aether Channeler', variants:[{label:'Aether Channeler',cards:[]}]},
      { id:'j25-stalwart', name:'Stalwart', colors:['U'], headliner:'Basri Ket', variants:[{label:'Basri',cards:[]}]},
      { id:'j25-surprise', name:'Surprise!', colors:['U'], headliner:'Leyline of Anticipation', variants:[{label:'Leyline',cards:[]}]},
      { id:'j25-wizards', name:'Wizards', colors:['U'], headliner:'Naban, Dean of Iteration', variants:[{label:'Naban',cards:[]}]},
      // BLACK
      { id:'j25-ghastly', name:'Ghastly', colors:['B'], headliner:'Gorex, the Tombshell', variants:[
        { label:'Gorex', cards:[{name:'Swamp',qty:7,basic:true},{name:'Thriving Moor',qty:1,basic:true},{name:'Gorex, the Tombshell',qty:1},{name:'Eye Collector',qty:1},{name:'Wailing Ghoul',qty:1},{name:'Eternal Taskmaster',qty:1},{name:'Graveblade Marauder',qty:1},{name:'Gorging Vulture',qty:1},{name:'Diregraf Scavenger',qty:1},{name:'Gravedigger',qty:1},{name:'Grave Strength',qty:1},{name:'Murder',qty:1},{name:'Deal Gone Bad',qty:1},{name:'Revoke Demise',qty:1}]}
      ]},
      { id:'j25-grave-robbers', name:'Grave-Robbers', colors:['B'], headliner:'Evereth, Viceroy of Plunder', variants:[{label:'Evereth',cards:[]}]},
      { id:'j25-icky', name:'Icky', colors:['B'], headliner:'Aphelia, Viper Whisperer', variants:[
        { label:'Aphelia', cards:[{name:'Swamp',qty:7,basic:true},{name:'Thriving Moor',qty:1,basic:true},{name:'Aphelia, Viper Whisperer',qty:1},{name:"Pharika's Chosen",qty:1},{name:'Scourge of the Undercity',qty:1},{name:"Vraska's Finisher",qty:1},{name:'Hooded Blightfang',qty:1},{name:'Venomous Hierophant',qty:1},{name:'Serpent Assassin',qty:1},{name:'Ukud Cobra',qty:1},{name:'Killing Glare',qty:1},{name:'Coat with Venom',qty:1},{name:"Night's Whisper",qty:1},{name:'Gorgon Flail',qty:1}]}
      ]},
      { id:'j25-legion', name:'Legion', colors:['B'], headliner:'Ozox, the Clattering King', variants:[{label:'Ozox',cards:[]}]},
      { id:'j25-nefarious', name:'Nefarious', colors:['B'], headliner:'Vilis, Broker of Blood', variants:[
        { label:'Vilis', cards:[{name:'Swamp',qty:7,basic:true},{name:'Thriving Moor',qty:1,basic:true},{name:'Vilis, Broker of Blood',qty:1},{name:'Scourge of the Undercity',qty:1},{name:'Dark Confidant',qty:1},{name:'Audacious Thief',qty:1},{name:'Arrogant Outlaw',qty:1},{name:'Howling Banshee',qty:1},{name:'Vampire Scrivener',qty:1},{name:"Alchemist's Gift",qty:1},{name:'Infernal Grasp',qty:1},{name:"Metalspinner's Puzzleknot",qty:1},{name:'Ulcerate',qty:1},{name:'Read the Bones',qty:1}]}
      ]},
      { id:'j25-nerdowells', name:"N'er-do-wells", colors:['B'], headliner:'Ruthless Technomancer', variants:[
        { label:'Technomancer', cards:[{name:'Swamp',qty:7,basic:true},{name:'Thriving Moor',qty:1,basic:true},{name:'Ruthless Technomancer',qty:1},{name:'Shambling Ghast',qty:1},{name:'Reassembling Skeleton',qty:1},{name:'Dire Fleet Hoarder',qty:1},{name:'Undercity Scrounger',qty:1},{name:'Ruthless Knave',qty:1},{name:'Evereth, Viceroy of Plunder',qty:1},{name:'Pitiless Plunderer',qty:1},{name:'Deadly Dispute',qty:1},{name:'Fake Your Own Death',qty:1},{name:'Bastion of Remembrance',qty:1},{name:'Grim Bounty',qty:1}]}
      ]},
      { id:'j25-snakes', name:'Snakes', colors:['B'], headliner:'Hooded Blightfang', variants:[{label:'Blightfang',cards:[]}]},
      { id:'j25-treasures', name:'Treasures', colors:['B'], headliner:'Pitiless Plunderer', variants:[{label:'Plunderer',cards:[]}]},
      { id:'j25-vampires', name:'Vampires', colors:['B'], headliner:'Nazar, the Velvet Fang', variants:[
        { label:'Nazar', cards:[{name:'Swamp',qty:7,basic:true},{name:'Thriving Moor',qty:1,basic:true},{name:'Nazar, the Velvet Fang',qty:1},{name:'Vampire of the Dire Moon',qty:1},{name:'Scourge of the Undercity',qty:1},{name:'Blood Burglar',qty:1},{name:'Skymarch Bloodletter',qty:1},{name:'Gluttonous Guest',qty:1},{name:'Sangromancer',qty:1},{name:'Bloodtithe Collector',qty:1},{name:'Blood Fountain',qty:1},{name:'Gift of Fangs',qty:1},{name:'Urge to Feed',qty:1},{name:'Bleed Dry',qty:1}]}
      ]},
      // RED
      { id:'j25-bloody', name:'Bloody', colors:['R'], headliner:'Ivora, Insatiable Heir', variants:[
        { label:'Markov Blademaster', cards:[{name:'Mountain',qty:7,basic:true},{name:'Thriving Bluff',qty:1,basic:true},{name:'Markov Blademaster',qty:1},{name:'Markov Enforcer',qty:1},{name:'Ivora, Insatiable Heir',qty:1},{name:'Blood Hypnotist',qty:1},{name:'Blood Petal Celebrant',qty:1},{name:'Falkenrath Celebrants',qty:1},{name:'Flame-Blessed Bolt',qty:1},{name:'Insolent Neonate',qty:1},{name:'Markov Retribution',qty:1},{name:'Soul Sear',qty:1},{name:'Stolen Vitality',qty:1},{name:'Voldaren Duelist',qty:1}]},
        { label:'Scion of Opulence', cards:[{name:'Mountain',qty:7,basic:true},{name:'Thriving Bluff',qty:1,basic:true},{name:'Scion of Opulence',qty:1},{name:'Ivora, Insatiable Heir',qty:1},{name:'Blood Feud',qty:1},{name:'Blood Petal Celebrant',qty:1},{name:'Falkenrath Celebrants',qty:1},{name:'Flame-Blessed Bolt',qty:1},{name:'Insolent Neonate',qty:1},{name:'Markov Warlord',qty:1},{name:'Soul Sear',qty:1},{name:'Vampiric Fury',qty:1},{name:'Voldaren Duelist',qty:1},{name:'Belligerent Guest',qty:1}]}
      ]},
      { id:'j25-burning', name:'Burning', colors:['R'], headliner:'Rionya, Fire Dancer', variants:[{label:'Rionya',cards:[]}]},
      { id:'j25-copied', name:'Copied', colors:['R'], headliner:'Fiendish Duo', variants:[{label:'Fiendish Duo',cards:[]}]},
      { id:'j25-dragons', name:'Dragons', colors:['R'], headliner:'Lathliss, Dragon Queen', variants:[
        { label:'Lathliss', cards:[{name:'Mountain',qty:7,basic:true},{name:'Forgotten Cave',qty:1,basic:true},{name:'Lathliss, Dragon Queen',qty:1},{name:'Firespitter Whelp',qty:1},{name:"Dragon's Fire",qty:1},{name:'Seize the Spoils',qty:1},{name:'Bathe in Dragonfire',qty:1},{name:'Dragon Hatchling',qty:1},{name:'Dragon Whelp',qty:1},{name:"Dragonlord's Servant",qty:1},{name:'Rapacious Dragon',qty:1},{name:'Sparktongue Dragon',qty:1},{name:'Hellkite Whelp',qty:1},{name:"Sarkhan's Rage",qty:1}]},
        { label:'Lathliss + Sarkhan', cards:[{name:'Mountain',qty:7,basic:true},{name:'Forgotten Cave',qty:1,basic:true},{name:'Lathliss, Dragon Queen',qty:1},{name:'Sarkhan, Fireblood',qty:1},{name:'Firespitter Whelp',qty:1},{name:"Dragon's Fire",qty:1},{name:'Seize the Spoils',qty:1},{name:'Dragon Hatchling',qty:1},{name:'Dragon Whelp',qty:1},{name:"Dragonlord's Servant",qty:1},{name:'Hellkite Whelp',qty:1},{name:"Sarkhan's Rage",qty:1},{name:'Sparktongue Dragon',qty:1},{name:"Carnelian Orb of Dragonkind",qty:1}]}
      ]},
      { id:'j25-goblins', name:'Goblins', colors:['R'], headliner:'Krenko, Tin Street Kingpin', variants:[
        { label:'Goblin Rabblemaster', cards:[{name:'Mountain',qty:7,basic:true},{name:'Thriving Bluff',qty:1,basic:true},{name:'Goblin Rabblemaster',qty:1},{name:'Goblin Surprise',qty:1},{name:'General Kreat, the Boltbringer',qty:1},{name:'Battle Cry Goblin',qty:1},{name:'Destructive Digger',qty:1},{name:"Krenko's Command",qty:1},{name:'Volley Veteran',qty:1},{name:'Brute Strength',qty:1},{name:'Fanatical Firebrand',qty:1},{name:'Fire Prophecy',qty:1},{name:'Fissure Wizard',qty:1},{name:'Shock',qty:1}]},
        { label:'Dropkick Bomber', cards:[{name:'Mountain',qty:7,basic:true},{name:'Thriving Bluff',qty:1,basic:true},{name:'Dropkick Bomber',qty:1},{name:'Goblin Surprise',qty:1},{name:'General Kreat, the Boltbringer',qty:1},{name:'Battle Cry Goblin',qty:1},{name:"Krenko's Command",qty:1},{name:'Volley Veteran',qty:1},{name:'Brute Strength',qty:1},{name:'Fissure Wizard',qty:1},{name:'Goblin Researcher',qty:1},{name:'Open Fire',qty:1},{name:'Shock',qty:1},{name:'Weaselback Redcap',qty:1}]},
        { label:'Goblin Goliath', cards:[{name:'Mountain',qty:7,basic:true},{name:'Thriving Bluff',qty:1,basic:true},{name:'Dropkick Bomber',qty:1},{name:'Goblin Goliath',qty:1},{name:'Goblin Surprise',qty:1},{name:'General Kreat, the Boltbringer',qty:1},{name:'Battle Cry Goblin',qty:1},{name:"Krenko's Command",qty:1},{name:'Volley Veteran',qty:1},{name:'Goblin Arsonist',qty:1},{name:'Kindled Fury',qty:1},{name:'Mogg Flunkies',qty:1},{name:'Open Fire',qty:1},{name:'Shock',qty:1}]},
        { label:'Krenko', cards:[{name:'Mountain',qty:7,basic:true},{name:'Thriving Bluff',qty:1,basic:true},{name:'Krenko, Tin Street Kingpin',qty:1},{name:'Goblin Surprise',qty:1},{name:'General Kreat, the Boltbringer',qty:1},{name:'Beetleback Chief',qty:1},{name:'Goblin Smuggler',qty:1},{name:"Krenko's Command",qty:1},{name:'Volley Veteran',qty:1},{name:'Goblin Trailblazer',qty:1},{name:'Open Fire',qty:1},{name:'Scavenged Blade',qty:1},{name:'Shock',qty:1},{name:'Weaselback Redcap',qty:1}]}
      ]},
      { id:'j25-stoked', name:'Stoked', colors:['R'], headliner:'Zada, Hedron Grinder', variants:[{label:'Zada',cards:[]}]},
      { id:'j25-too-many', name:'Too Many', colors:['R'], headliner:'Fiendish Duo', variants:[{label:'Too Many',cards:[]}]},
      { id:'j25-warriors', name:'Warriors', colors:['R'], headliner:'Gornog, the Red Reaper', variants:[
        { label:'Boldwyr', cards:[{name:'Mountain',qty:7,basic:true},{name:'Thriving Bluff',qty:1,basic:true},{name:'Gornog, the Red Reaper',qty:1},{name:'Goma Fada Vanguard',qty:1},{name:'Kruin Striker',qty:1},{name:'Boggart Brute',qty:1},{name:'Expedition Champion',qty:1},{name:'Keldon Raider',qty:1},{name:'Wrecking Crew',qty:1},{name:'Boldwyr Intimidator',qty:1},{name:'Kindled Fury',qty:1},{name:'Pyrophobia',qty:1},{name:'Relic Axe',qty:1},{name:'Soul Sear',qty:1}]}
      ]},
      { id:'j25-zealots', name:'Zealots', colors:['R'], headliner:'Young Pyromancer', variants:[{label:'Spells Matter',cards:[]}]},
      // GREEN
      { id:'j25-beasts', name:'Beasts', colors:['G'], headliner:'Canopy Baloth', variants:[{label:'Baloth',cards:[]}]},
      { id:'j25-dinosaurs', name:'Dinosaurs', colors:['G'], headliner:'Ghalta, Primal Hunger', variants:[{label:'Ghalta',cards:[]}]},
      { id:'j25-dinner', name:'Dinner', colors:['G'], headliner:'Brinelin, the Moon Kraken', variants:[{label:'Brinelin',cards:[]}]},
      { id:'j25-elves', name:'Elves', colors:['G'], headliner:'Dionus, Elvish Archdruid', variants:[
        { label:'Leaf-Crowned', cards:[{name:'Forest',qty:7,basic:true},{name:'Thriving Grove',qty:1,basic:true},{name:'Leaf-Crowned Visionary',qty:1},{name:'Razorgrass Invoker',qty:1},{name:'Dionus, Elvish Archdruid',qty:1},{name:'Elvish Visionary',qty:1},{name:'Llanowar Elves',qty:1},{name:'Arbor Armament',qty:1},{name:'Band Together',qty:1},{name:'Bounty of Skemfar',qty:1},{name:'Ghirapur Guide',qty:1},{name:'Overcome',qty:1},{name:'Tajuru Pathwarden',qty:1},{name:'Thornweald Archer',qty:1}]},
        { label:'Elvish Archdruid', cards:[{name:'Forest',qty:7,basic:true},{name:'Thriving Grove',qty:1,basic:true},{name:'Elvish Archdruid',qty:1},{name:'Razorgrass Invoker',qty:1},{name:'Dionus, Elvish Archdruid',qty:1},{name:'Elvish Visionary',qty:1},{name:'Llanowar Elves',qty:1},{name:"Dwynen's Elite",qty:1},{name:'Bounty of Skemfar',qty:1},{name:'High-Rise Sawjack',qty:1},{name:"Hunter's Edge",qty:1},{name:'Kujar Seedsculptor',qty:1},{name:'Might of the Masses',qty:1},{name:'Overcome',qty:1}]},
        { label:'Marwyn', cards:[{name:'Forest',qty:7,basic:true},{name:'Thriving Grove',qty:1,basic:true},{name:'Marwyn, the Nurturer',qty:1},{name:'Go Forth',qty:1},{name:'Razorgrass Invoker',qty:1},{name:'Dionus, Elvish Archdruid',qty:1},{name:'Llanowar Elves',qty:1},{name:'Band Together',qty:1},{name:'Bounty of Skemfar',qty:1},{name:"Dwynen's Elite",qty:1},{name:'Llanowar Visionary',qty:1},{name:'Overcome',qty:1},{name:'Tajuru Pathwarden',qty:1},{name:'Thornweald Archer',qty:1}]},
        { label:'Tyvar', cards:[{name:'Forest',qty:7,basic:true},{name:'Thriving Grove',qty:1,basic:true},{name:'Tyvar Kell',qty:1},{name:'Voice of the Woods',qty:1},{name:'Dionus, Elvish Archdruid',qty:1},{name:'Llanowar Elves',qty:1},{name:'Arbor Armament',qty:1},{name:'Ghirapur Guide',qty:1},{name:'High-Rise Sawjack',qty:1},{name:"Hunter's Edge",qty:1},{name:'Ivy Lane Denizen',qty:1},{name:'Overcome',qty:1},{name:'Paradise Druid',qty:1},{name:'Reckless Amplimancer',qty:1}]}
      ]},
      { id:'j25-encounter', name:'Encounter', colors:['G'], headliner:'Baloth Woodcrasher', variants:[{label:'Baloth',cards:[]}]},
      { id:'j25-explorers', name:'Explorers', colors:['G'], headliner:'Lotus Cobra', variants:[{label:'Lotus Cobra',cards:[]}]},
      { id:'j25-fun-guys', name:'Fun Guys', colors:['G'], headliner:'Mycoloth', variants:[{label:'Mycoloth',cards:[]}]},
      { id:'j25-landfall', name:'Landfall', colors:['G'], headliner:'Undergrowth Champion', variants:[{label:'Champion',cards:[]}]},
      { id:'j25-modified', name:'Modified', colors:['G'], headliner:'Hamza, Guardian of Arashin', variants:[{label:'Hamza',cards:[]}]},
      // MULTICOLOR
      { id:'j25-chaos', name:'Chaos', colors:['W','U','B','R','G'], headliner:'Averna, the Chaos Bloom', variants:[{label:'Averna',cards:[]}]}
    ]},

    // ── AVATAR: THE LAST AIRBENDER JUMPSTART (ATJ, 2025) ─────────────────────
    // Released 2025. 46 themes, standalone product.
    { id:'atj', name:'Avatar: The Last Airbender Jumpstart', year:2025, code:'ATJ', decks:[
      // Metadata only. Full card lists to be contributed.
      { id:'atj-air', name:'Air', colors:['W','U'], headliner:'Aang', variants:[{label:'Air',cards:[]}]},
      { id:'atj-water', name:'Water', colors:['U'], headliner:'Katara', variants:[{label:'Water',cards:[]}]},
      { id:'atj-earth', name:'Earth', colors:['G'], headliner:'Toph Beifong', variants:[{label:'Earth',cards:[]}]},
      { id:'atj-fire', name:'Fire', colors:['R'], headliner:'Zuko', variants:[{label:'Fire',cards:[]}]},
      { id:'atj-fire-nation', name:'Fire Nation', colors:['R','B'], headliner:'Fire Lord Ozai', variants:[{label:'Fire Nation',cards:[]}]},
      { id:'atj-team-avatar', name:'Team Avatar', colors:['W','U','B','R','G'], headliner:'Avatar Aang', variants:[{label:'Team Avatar',cards:[]}]}
    ]},

    // ── TIE-IN JUMPSTART EDITIONS ─────────────────────────────────────────────
    // These were smaller 10-theme (5 color × 2 variant) products released
    // alongside each premier set from 2022–2023. Each pack includes a
    // "random rare or mythic rare" slot from the parent set.

    // ── DOMINARIA UNITED JUMPSTART (JDMU, Sep 2022) ───────────────────────────
    { id:'jdmu', name:'Dominaria United Jumpstart', year:2022, code:'JDMU',
      note:'Set-specific tie-in. Each pack includes 1 random rare/mythic from the main set.',
      decks:[
        { id:'jdmu-karn', name:'Karn', colors:['W'], headliner:'Karn, Living Legacy', variants:[{label:'Karn A',cards:[]},{label:'Karn B',cards:[]}]},
        { id:'jdmu-teferi', name:'Teferi', colors:['U'], headliner:'Teferi', variants:[{label:'Teferi A',cards:[]},{label:'Teferi B',cards:[]}]},
        { id:'jdmu-weatherlight', name:'Weatherlight', colors:['B'], headliner:'Weatherlight Compleated', variants:[{label:'Phyrexian A',cards:[]},{label:'Phyrexian B',cards:[]}]},
        { id:'jdmu-jaya', name:'Jaya', colors:['R'], headliner:'Jaya, Fiery Negotiator', variants:[{label:'Jaya A',cards:[]},{label:'Jaya B',cards:[]}]},
        { id:'jdmu-llanowar', name:'Llanowar', colors:['G'], headliner:'Llanowar Loamspeaker', variants:[{label:'Llanowar A',cards:[]},{label:'Llanowar B',cards:[]}]}
      ]},

    // ── THE BROTHERS' WAR JUMPSTART (JBRO, Nov 2022) ─────────────────────────
    { id:'jbro', name:"The Brothers' War Jumpstart", year:2022, code:'JBRO',
      note:'Set-specific tie-in. Each pack includes 1 random rare/mythic from the main set.',
      decks:[
        { id:'jbro-urza', name:"Urza's Soldiers", colors:['W'], headliner:"Urza's Sylex", variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jbro-sea-skiff', name:'Sea Skiff', colors:['U'], headliner:'Tocasia, Dig Site Mentor', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jbro-gix', name:"Gix's Legions", colors:['B'], headliner:"Gix, Yawgmoth Praetor", variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jbro-mishra', name:"Mishra's Army", colors:['R'], headliner:"Mishra, Claimed by Gix", variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jbro-titania', name:"Titania's Grove", colors:['G'], headliner:'Titania, Voice of Gaea', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]}
      ]},

    // ── PHYREXIA: ALL WILL BE ONE JUMPSTART (JONE, Feb 2023) ─────────────────
    // Card lists from official Wizards decklists. Random rare/mythic slot noted.
    { id:'jone', name:'Phyrexia: All Will Be One Jumpstart', year:2023, code:'JONE',
      note:'Set-specific tie-in. "1 Random rare or mythic rare" slot is not a fixed card.',
      decks:[
        { id:'jone-white', name:'Mites', colors:['W'], headliner:'Mite Overseer', variants:[
          { label:'Infect A', cards:[{name:'Plains',qty:7,basic:true},{name:'The Fair Basilica',qty:1,basic:true},{name:'Mite Overseer',qty:1},{name:'Bladed Ambassador',qty:1},{name:'Sinew Dancer',qty:1},{name:'Duelist of Deep Faith',qty:1},{name:'Basilica Shepherd',qty:1},{name:'Planar Disruption',qty:1},{name:'Charge of the Mites',qty:1},{name:'Vanish into Eternity',qty:1},{name:'Annex Sentry',qty:1},{name:'Porcelain Zealot',qty:1},{name:'Infested Fleshcutter',qty:1}]},
          { label:'Infect B', cards:[{name:'Plains',qty:7,basic:true},{name:'The Fair Basilica',qty:1,basic:true},{name:'Mite Overseer',qty:1},{name:'Bladed Ambassador',qty:1},{name:'Crawling Chorus',qty:1},{name:'Mandible Justiciar',qty:1},{name:'Duelist of Deep Faith',qty:1},{name:"Zealot's Conviction",qty:1},{name:'Compleat Devotion',qty:1},{name:'Vanish into Eternity',qty:1},{name:'Porcelain Zealot',qty:1}]}
        ]},
        { id:'jone-blue', name:'Proliferate', colors:['U'], headliner:'Prologue to Phyresis', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jone-black', name:'Corrupted', colors:['B'], headliner:'Vraska, Betrayal\'s Sting', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jone-red', name:'Burn', colors:['R'], headliner:'Urabrask\'s Forge', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jone-green', name:'Toxic', colors:['G'], headliner:'Goliath Hatchery', variants:[
          { label:'Toxic A', cards:[{name:'Forest',qty:7,basic:true},{name:'The Hunter Maze',qty:1,basic:true},{name:'Goliath Hatchery',qty:1},{name:'Cankerbloom',qty:1},{name:'Copper Longlegs',qty:1},{name:'Branchblight Stalker',qty:1},{name:'Contagious Vorrac',qty:1},{name:'Titanic Growth',qty:1},{name:'Venomous Brutalizer',qty:1},{name:'Paladin of Predation',qty:1},{name:'Infectious Bite',qty:1},{name:'Phyrexian Atlas',qty:1},{name:'Ichorspit Basilisk',qty:1}]},
          { label:'Toxic B', cards:[{name:'Forest',qty:7,basic:true},{name:'The Hunter Maze',qty:1,basic:true},{name:'Goliath Hatchery',qty:1},{name:'Cankerbloom',qty:1},{name:'Rustvine Cultivator',qty:1},{name:'Branchblight Stalker',qty:1},{name:'Contagious Vorrac',qty:1},{name:'Ruthless Predation',qty:1},{name:'Viral Spawning',qty:1},{name:'Paladin of Predation',qty:1},{name:"Tyvar's Stand",qty:1},{name:'Lattice-Blade Mantis',qty:1}]}
        ]}
      ]},

    // ── MARCH OF THE MACHINE JUMPSTART (JMOM, May 2023) ──────────────────────
    { id:'jmom', name:'March of the Machine Jumpstart', year:2023, code:'JMOM',
      note:'Set-specific tie-in. Each pack includes 1 random rare/mythic from the main set.',
      decks:[
        { id:'jmom-white', name:'Defenders', colors:['W'], headliner:'Invasion of Gobakhan', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jmom-blue', name:'Proliferate', colors:['U'], headliner:'Chrome Host Seedshark', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jmom-black', name:'Incubate', colors:['B'], headliner:'Pile On', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jmom-red', name:'Convoke', colors:['R'], headliner:'Invasion of Regatha', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jmom-green', name:'Battles', colors:['G'], headliner:'Invasion of Zendikar', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]}
      ]},

    // ── LORD OF THE RINGS JUMPSTART Vol 1 (JLTR, Jun 2023) ───────────────────
    { id:'jltr', name:'Lord of the Rings Jumpstart Vol. 1', year:2023, code:'JLTR',
      note:'Set-specific tie-in. Each pack includes 1 random rare/mythic from the main set.',
      decks:[
        { id:'jltr-white', name:'The Fellowship', colors:['W'], headliner:'Saradoc, Master of Buckland', variants:[
          { label:'Hobbits A', cards:[{name:'Plains',qty:8,basic:true},{name:'Saradoc, Master of Buckland',qty:1},{name:'Esquire of the King',qty:1},{name:'Samwise the Stouthearted',qty:1},{name:'Took Reaper',qty:1},{name:'Rosie Cotton of South Lane',qty:1},{name:'Errand-Rider of Gondor',qty:1},{name:'Bill the Pony',qty:1},{name:'Lost to Legend',qty:1},{name:'Fog on the Barrow-Downs',qty:1},{name:'Slip On the Ring',qty:1},{name:'Escape from Orthanc',qty:1}]},
          { label:'Hobbits B', cards:[{name:'Plains',qty:8,basic:true},{name:'Saradoc, Master of Buckland',qty:1},{name:'Nimble Hobbit',qty:1},{name:'Samwise the Stouthearted',qty:1},{name:'Took Reaper',qty:1},{name:'Rosie Cotton of South Lane',qty:1},{name:'Eastfarthing Farmer',qty:1},{name:'Bill the Pony',qty:1}]}
        ]},
        { id:'jltr-blue', name:'Trickery', colors:['U'], headliner:'Gandalf, Friend of the Shire', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jltr-black', name:'The Shadow', colors:['B'], headliner:'Sauron\'s Ransom', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jltr-red', name:"Isengard", colors:['R'], headliner:'Saruman of Many Colours', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jltr-green', name:'Ents', colors:['G'], headliner:'Treebeard, Gracious Host', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]}
      ]},

    // ── LORD OF THE RINGS JUMPSTART Vol 2 (JLTR2, Nov 2023) ──────────────────
    { id:'jltr2', name:'Lord of the Rings Jumpstart Vol. 2', year:2023, code:'JLTR2',
      note:'Set-specific tie-in. Each pack includes 1 random rare/mythic from the main set.',
      decks:[
        { id:'jltr2-white', name:'Gondor', colors:['W'], headliner:'Éowyn, Lady of Rohan', variants:[
          { label:'Gondor', cards:[{name:'Plains',qty:8,basic:true},{name:'Eagle of Deliverance',qty:1},{name:'Took Reaper',qty:1},{name:'Eastfarthing Farmer',qty:1},{name:'Soldier of the Grey Host',qty:1},{name:'Second Breakfast',qty:1},{name:'Fog on the Barrow-Downs',qty:1},{name:'Banish from Edoras',qty:1},{name:'Shire Shirriff',qty:1},{name:"Éowyn, Lady of Rohan",qty:1},{name:'Faramir, Field Commander',qty:1},{name:'Barrow-Blade',qty:1}]}
        ]},
        { id:'jltr2-blue', name:'Istari', colors:['U'], headliner:'Gandalf the White', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jltr2-black', name:'Mordor', colors:['B'], headliner:'The Mouth of Sauron', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jltr2-red', name:"Rohan", colors:['R'], headliner:'Théoden, King of Rohan', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]},
        { id:'jltr2-green', name:'The Shire', colors:['G'], headliner:'Samwise Gamgee', variants:[{label:'A',cards:[]},{label:'B',cards:[]}]}
      ]}
  ]
};
