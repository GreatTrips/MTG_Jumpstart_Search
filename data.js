const DECK_DATA = {
  editions: [
    {
      id: 'jmp',
      name: 'Jumpstart',
      year: 2020,
      code: 'JMP',
      decks: [
        {
          id: 'jmp-above-the-clouds',
          name: 'Above the Clouds',
          colors: ['W'],
          headliner: 'Warden of Evos Isle',
          variants: [
            {
              label: 'Warden',
              cards: [
                { name: 'Plains', qty: 9, basic: true },
                { name: 'Warden of Evos Isle', qty: 2 },
                { name: 'Empyrean Eagle', qty: 1 },
                { name: 'Cloudblazer', qty: 1 },
                { name: 'Concordia Pegasus', qty: 2 },
                { name: 'Aether Swooper', qty: 2 },
                { name: 'Rustwing Falcon', qty: 2 },
                { name: 'Aerial Assault', qty: 1 },
              ]
            },
            {
              label: 'Alela',
              cards: [
                { name: 'Plains', qty: 9, basic: true },
                { name: 'Alela, Artful Provocateur', qty: 1 },
                { name: 'Empyrean Eagle', qty: 1 },
                { name: 'Warden of Evos Isle', qty: 1 },
                { name: 'Concordia Pegasus', qty: 2 },
                { name: 'Cloudblazer', qty: 1 },
                { name: 'Faerie Miscreant', qty: 2 },
                { name: 'Rustwing Falcon', qty: 2 },
                { name: 'Aerial Assault', qty: 1 },
              ]
            }
          ]
        },
        {
          id: 'jmp-angels',
          name: 'Angels',
          colors: ['W'],
          headliner: "Emeria's Call",
          variants: [
            {
              label: "Emeria's Call",
              cards: [
                { name: 'Plains', qty: 9, basic: true },
                { name: "Emeria's Call // Emeria, Shattered Skyclave", qty: 1 },
                { name: 'Baneslayer Angel', qty: 1 },
                { name: 'Serra Angel', qty: 2 },
                { name: 'Stalwart Valkyrie', qty: 2 },
                { name: 'Angel of Vitality', qty: 1 },
                { name: "Serra's Guardian", qty: 1 },
                { name: 'Take Vengeance', qty: 2 },
                { name: 'Inspired Charge', qty: 1 },
              ]
            },
            {
              label: 'Akroma',
              cards: [
                { name: 'Plains', qty: 9, basic: true },
                { name: 'Akroma, Angel of Wrath', qty: 1 },
                { name: 'Serra Angel', qty: 2 },
                { name: 'Stalwart Valkyrie', qty: 2 },
                { name: 'Angel of Vitality', qty: 1 },
                { name: "Serra's Guardian", qty: 1 },
                { name: 'Take Vengeance', qty: 2 },
                { name: 'Inspired Charge', qty: 1 },
                { name: 'Angelic Gift', qty: 1 },
              ]
            }
          ]
        },
        {
          id: 'jmp-archaeology',
          name: 'Archaeology',
          colors: ['B'],
          headliner: 'Tinybones, Trinket Thief',
          variants: [
            {
              label: 'Tinybones',
              cards: [
                { name: 'Swamp', qty: 9, basic: true },
                { name: 'Tinybones, Trinket Thief', qty: 1 },
                { name: 'Mire Triton', qty: 2 },
                { name: "Death's-Head Buzzard", qty: 2 },
                { name: 'Bogbrew Witch', qty: 1 },
                { name: 'Wayfarer\'s Bauble', qty: 2 },
                { name: 'Barrin, Tolarian Archmage', qty: 1 },
                { name: 'Reliquary Tower', qty: 1 },
                { name: 'Grim Tutor', qty: 1 },
              ]
            }
          ]
        },
        {
          id: 'jmp-cats',
          name: 'Cats',
          colors: ['W'],
          headliner: 'Kaheera, the Orphanguard',
          variants: [
            {
              label: 'Kaheera',
              cards: [
                { name: 'Plains', qty: 9, basic: true },
                { name: 'Kaheera, the Orphanguard', qty: 1 },
                { name: 'Regal Caracal', qty: 1 },
                { name: 'Felidar Sovereign', qty: 1 },
                { name: 'Oreskos Swiftclaw', qty: 2 },
                { name: 'Savannah Lions', qty: 2 },
                { name: 'Sacred Cat', qty: 2 },
                { name: 'Leonin Vanguard', qty: 1 },
                { name: 'Pacifism', qty: 1 },
              ]
            }
          ]
        },
        {
          id: 'jmp-devilish',
          name: 'Devilish',
          colors: ['R'],
          headliner: 'Zurzoth, Chaos Rider',
          variants: [
            {
              label: 'Zurzoth',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-doctor',
          name: 'Doctor',
          colors: ['U'],
          headliner: 'Surgeon General Commander',
          variants: [
            {
              label: 'SGC',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-dragons',
          name: 'Dragons',
          colors: ['R'],
          headliner: 'Terror of the Peaks',
          variants: [
            {
              label: 'Terror',
              cards: [
                { name: 'Mountain', qty: 9, basic: true },
                { name: 'Terror of the Peaks', qty: 1 },
                { name: 'Demanding Dragon', qty: 1 },
                { name: 'Shivan Dragon', qty: 1 },
                { name: 'Scorch Spewer', qty: 2 },
                { name: 'Dragon Egg', qty: 2 },
                { name: 'Draconic Roar', qty: 2 },
                { name: 'Shock', qty: 2 },
              ]
            }
          ]
        },
        {
          id: 'jmp-elves',
          name: 'Elves',
          colors: ['G'],
          headliner: 'Allosaurus Shepherd',
          variants: [
            {
              label: 'Allosaurus',
              cards: [
                { name: 'Forest', qty: 9, basic: true },
                { name: 'Allosaurus Shepherd', qty: 1 },
                { name: 'Elvish Archdruid', qty: 2 },
                { name: 'Llanowar Elves', qty: 4 },
                { name: 'Elvish Clancaller', qty: 1 },
                { name: 'Fauna Shaman', qty: 1 },
                { name: 'Ambush Viper', qty: 1 },
                { name: 'Reclamation Sage', qty: 1 },
              ]
            },
            {
              label: 'Imperious Perfect',
              cards: [
                { name: 'Forest', qty: 9, basic: true },
                { name: 'Imperious Perfect', qty: 1 },
                { name: 'Elvish Archdruid', qty: 2 },
                { name: 'Llanowar Elves', qty: 4 },
                { name: 'Elvish Clancaller', qty: 1 },
                { name: 'Fauna Shaman', qty: 1 },
                { name: 'Sylvan Messenger', qty: 1 },
                { name: 'Reclamation Sage', qty: 1 },
              ]
            }
          ]
        },
        {
          id: 'jmp-garruk',
          name: 'Garruk',
          colors: ['G'],
          headliner: 'Garruk, Unleashed',
          variants: [
            {
              label: "Garruk's Harbinger",
              cards: [
                { name: 'Forest', qty: 9, basic: true },
                { name: 'Garruk, Unleashed', qty: 1 },
                { name: "Garruk's Harbinger", qty: 1 },
                { name: "Garruk's Gorehorn", qty: 2 },
                { name: "Garruk's Uprising", qty: 1 },
                { name: 'Primal Might', qty: 1 },
                { name: 'Ferocious Pup', qty: 2 },
                { name: 'Fierce Empath', qty: 1 },
                { name: 'Canopy Stalker', qty: 2 },
              ]
            }
          ]
        },
        {
          id: 'jmp-goblins',
          name: 'Goblins',
          colors: ['R'],
          headliner: 'Muxus, Goblin Grandee',
          variants: [
            {
              label: 'Muxus',
              cards: [
                { name: 'Mountain', qty: 9, basic: true },
                { name: 'Muxus, Goblin Grandee', qty: 1 },
                { name: 'Goblin Warchief', qty: 2 },
                { name: 'Goblin Chieftain', qty: 1 },
                { name: 'Goblin Ringleader', qty: 1 },
                { name: 'Munitions Expert', qty: 1 },
                { name: 'Conspicuous Snoop', qty: 1 },
                { name: 'Goblin Oriflamme', qty: 1 },
                { name: 'Goblin Assailant', qty: 3 },
              ]
            },
            {
              label: 'Goblin Trashmaster',
              cards: [
                { name: 'Mountain', qty: 9, basic: true },
                { name: 'Goblin Trashmaster', qty: 1 },
                { name: 'Goblin Warchief', qty: 2 },
                { name: 'Goblin Chieftain', qty: 1 },
                { name: 'Goblin Ringleader', qty: 1 },
                { name: 'Goblin Oriflamme', qty: 2 },
                { name: 'Skirk Prospector', qty: 1 },
                { name: 'Goblin Assailant', qty: 3 },
              ]
            }
          ]
        },
        {
          id: 'jmp-heavily-armored',
          name: 'Heavily Armored',
          colors: ['W'],
          headliner: 'Colossus Hammer',
          variants: [
            {
              label: 'Colossus',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-history',
          name: 'History',
          colors: ['W'],
          headliner: 'Rhys the Redeemed',
          variants: [
            {
              label: 'Rhys',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-lab',
          name: 'Lab',
          colors: ['U'],
          headliner: "Barrin, Master Wizard",
          variants: [
            {
              label: 'Barrin',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-lands',
          name: 'Lands',
          colors: ['G'],
          headliner: 'Phylath, World Sculptor',
          variants: [
            {
              label: 'Phylath',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-lightning',
          name: 'Lightning',
          colors: ['R'],
          headliner: 'Lightning Bolt',
          variants: [
            {
              label: 'Lightning Bolt',
              cards: [
                { name: 'Mountain', qty: 9, basic: true },
                { name: 'Lightning Bolt', qty: 4 },
                { name: 'Shock', qty: 3 },
                { name: 'Lightning Strike', qty: 2 },
                { name: 'Electrostatic Field', qty: 1 },
                { name: 'Thrill of Possibility', qty: 1 },
              ]
            }
          ]
        },
        {
          id: 'jmp-liliana',
          name: 'Liliana',
          colors: ['B'],
          headliner: 'Liliana, Waker of the Dead',
          variants: [
            {
              label: "Liliana's Devotee",
              cards: [
                { name: 'Swamp', qty: 9, basic: true },
                { name: 'Liliana, Waker of the Dead', qty: 1 },
                { name: "Liliana's Devotee", qty: 2 },
                { name: "Liliana's Scrounger", qty: 2 },
                { name: 'Lazotep Reaver', qty: 2 },
                { name: 'Reassembling Skeleton', qty: 2 },
                { name: "Stitcher's Supplier", qty: 1 },
                { name: 'Vilis, Broker of Blood', qty: 1 },
              ]
            }
          ]
        },
        {
          id: 'jmp-minions',
          name: 'Minions',
          colors: ['B'],
          headliner: 'Davriel, Rogue Shadowmage',
          variants: [
            {
              label: 'Davriel',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-minotaur',
          name: 'Minotaur',
          colors: ['B', 'R'],
          headliner: 'Sethron, Hurloon General',
          variants: [
            {
              label: 'Sethron',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-mu-yanling',
          name: 'Mu Yanling',
          colors: ['U'],
          headliner: 'Mu Yanling, Sky Dancer',
          variants: [
            {
              label: 'Sky Dancer',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-phyrexian',
          name: 'Phyrexian',
          colors: ['B'],
          headliner: 'Phyrexian Obliterator',
          variants: [
            {
              label: 'Obliterator',
              cards: [
                { name: 'Swamp', qty: 9, basic: true },
                { name: 'Phyrexian Obliterator', qty: 1 },
                { name: 'Phyrexian Arena', qty: 1 },
                { name: 'Phyrexian Rager', qty: 2 },
                { name: 'Priest of Gix', qty: 2 },
                { name: 'Fleshbag Marauder', qty: 2 },
                { name: 'Cauldron Haze', qty: 1 },
                { name: 'Bone Splinters', qty: 2 },
              ]
            }
          ]
        },
        {
          id: 'jmp-pirates',
          name: 'Pirates',
          colors: ['U'],
          headliner: "Corsair Captain",
          variants: [
            {
              label: 'Captain',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-plus-one',
          name: 'Plus One',
          colors: ['G'],
          headliner: 'Conclave Mentor',
          variants: [
            {
              label: 'Mentor',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-rainbow',
          name: 'Rainbow',
          colors: ['W', 'U', 'B', 'R', 'G'],
          headliner: 'Rienne, Angel of Rebirth',
          variants: [
            {
              label: 'Rienne',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-reanimated',
          name: 'Reanimated',
          colors: ['B'],
          headliner: 'Ghoulcaller Gisa',
          variants: [
            {
              label: 'Gisa',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-slivers',
          name: 'Slivers',
          colors: ['W', 'U', 'B', 'R', 'G'],
          headliner: 'The First Sliver',
          variants: [
            {
              label: 'The First Sliver',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-smashing',
          name: 'Smashing',
          colors: ['G'],
          headliner: 'Awakened Amalgam',
          variants: [
            {
              label: 'Amalgam',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-spells',
          name: 'Spells',
          colors: ['U'],
          headliner: 'Talrand, Sky Summoner',
          variants: [
            {
              label: 'Talrand',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-spreading-seas',
          name: 'Spreading Seas',
          colors: ['U'],
          headliner: 'Thassa, Deep-Dwelling',
          variants: [
            {
              label: 'Thassa',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-teferi',
          name: 'Teferi',
          colors: ['U'],
          headliner: 'Teferi, Master of Time',
          variants: [
            {
              label: 'Variant A (+1: Draw, Discard)',
              cards: [
                { name: 'Island', qty: 9, basic: true },
                { name: 'Teferi, Master of Time', qty: 1 },
                { name: "Teferi's Tutelage", qty: 2 },
                { name: "Teferi's Ageless Insight", qty: 1 },
                { name: 'Frantic Inventory', qty: 2 },
                { name: 'Opt', qty: 3 },
                { name: 'Unsummon', qty: 1 },
                { name: 'Shore Up', qty: 1 },
              ]
            },
            {
              label: 'Variant B (+1: Scry 2)',
              cards: [
                { name: 'Island', qty: 9, basic: true },
                { name: 'Teferi, Master of Time', qty: 1 },
                { name: "Teferi's Tutelage", qty: 2 },
                { name: "Teferi's Ageless Insight", qty: 1 },
                { name: 'Frantic Inventory', qty: 2 },
                { name: 'Opt', qty: 3 },
                { name: 'Unsummon', qty: 1 },
                { name: 'Negate', qty: 1 },
              ]
            },
            {
              label: 'Variant C (+1: Exile Top)',
              cards: [
                { name: 'Island', qty: 9, basic: true },
                { name: 'Teferi, Master of Time', qty: 1 },
                { name: "Teferi's Tutelage", qty: 2 },
                { name: "Teferi's Ageless Insight", qty: 1 },
                { name: 'Frantic Inventory', qty: 2 },
                { name: 'Opt', qty: 3 },
                { name: 'Unsummon', qty: 1 },
                { name: 'Discontinuity', qty: 1 },
              ]
            },
            {
              label: 'Variant D (+1: Draw, Bounce)',
              cards: [
                { name: 'Island', qty: 9, basic: true },
                { name: 'Teferi, Master of Time', qty: 1 },
                { name: "Teferi's Tutelage", qty: 2 },
                { name: "Teferi's Ageless Insight", qty: 1 },
                { name: 'Frantic Inventory', qty: 2 },
                { name: 'Opt', qty: 3 },
                { name: 'Unsummon', qty: 1 },
                { name: 'Mana Leak', qty: 1 },
              ]
            }
          ]
        },
        {
          id: 'jmp-under-the-sea',
          name: 'Under the Sea',
          colors: ['U'],
          headliner: 'Anemospout',
          variants: [
            {
              label: 'Anemospout',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-unicorns',
          name: 'Unicorns',
          colors: ['W'],
          headliner: 'Crested Sunmare',
          variants: [
            {
              label: 'Sunmare',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-vampires',
          name: 'Vampires',
          colors: ['B'],
          headliner: 'Vampire Nocturnus',
          variants: [
            {
              label: 'Nocturnus',
              cards: [
                { name: 'Swamp', qty: 9, basic: true },
                { name: 'Vampire Nocturnus', qty: 1 },
                { name: 'Cordial Vampire', qty: 2 },
                { name: 'Bloodthirsty Aerialist', qty: 1 },
                { name: 'Champion of Dusk', qty: 1 },
                { name: 'Sanctum Seeker', qty: 1 },
                { name: 'Silversmote Ghoul', qty: 2 },
                { name: 'Vampire of the Dire Moon', qty: 2 },
                { name: "Sorin's Thirst", qty: 1 },
              ]
            },
            {
              label: "Edgar's Awakening",
              cards: [
                { name: 'Swamp', qty: 9, basic: true },
                { name: "Edgar's Awakening", qty: 1 },
                { name: 'Cordial Vampire', qty: 2 },
                { name: 'Bloodthirsty Aerialist', qty: 1 },
                { name: 'Champion of Dusk', qty: 1 },
                { name: 'Sanctum Seeker', qty: 1 },
                { name: 'Silversmote Ghoul', qty: 2 },
                { name: 'Vampire of the Dire Moon', qty: 2 },
                { name: "Sorin's Thirst", qty: 1 },
              ]
            }
          ]
        },
        {
          id: 'jmp-walls',
          name: 'Walls',
          colors: ['W', 'U'],
          headliner: 'Arcades, the Strategist',
          variants: [
            {
              label: 'Arcades',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-witchcraft',
          name: 'Witchcraft',
          colors: ['B'],
          headliner: "Demonic Tutor",
          variants: [
            {
              label: 'Tutor',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-wolf',
          name: 'Wolf',
          colors: ['G'],
          headliner: "Nightpack Ambusher",
          variants: [
            {
              label: 'Nightpack',
              cards: []
            }
          ]
        },
        {
          id: 'jmp-zoo',
          name: 'Zoo',
          colors: ['R', 'G', 'W'],
          headliner: "Zilortha, Strength Incarnate",
          variants: [
            {
              label: 'Zilortha',
              cards: []
            }
          ]
        }
      ]
    },
    {
      id: 'j22',
      name: 'Jumpstart 2022',
      year: 2022,
      code: 'J22',
      decks: [
        {
          id: 'j22-beasts',
          name: 'Beasts',
          colors: ['G'],
          headliner: 'Garruk, Primal Hunter',
          variants: [{ label: 'Garruk', cards: [] }]
        },
        {
          id: 'j22-chaos',
          name: 'Chaos',
          colors: ['R'],
          headliner: 'Chaos Warp',
          variants: [{ label: 'Chaos Warp', cards: [] }]
        },
        {
          id: 'j22-death',
          name: 'Death',
          colors: ['B'],
          headliner: 'Grave Titan',
          variants: [{ label: 'Grave Titan', cards: [] }]
        },
        {
          id: 'j22-dominaria',
          name: 'Dominaria',
          colors: ['W'],
          headliner: 'Teferi, Temporal Pilgrim',
          variants: [{ label: 'Teferi', cards: [] }]
        },
        {
          id: 'j22-dragons',
          name: 'Dragons',
          colors: ['R'],
          headliner: 'Ganax, Astral Hunter',
          variants: [{ label: 'Ganax', cards: [] }]
        },
        {
          id: 'j22-elder-dragons',
          name: 'Elder Dragons',
          colors: ['W', 'U', 'B', 'R', 'G'],
          headliner: 'Chromium, the Mutable',
          variants: [
            { label: 'Chromium', cards: [] },
            { label: 'Vaevictis', cards: [] }
          ]
        },
        {
          id: 'j22-enchantments',
          name: 'Enchantments',
          colors: ['W', 'U'],
          headliner: 'Katilda, Dawnhart Martyr',
          variants: [{ label: 'Katilda', cards: [] }]
        },
        {
          id: 'j22-faeries',
          name: 'Faeries',
          colors: ['U', 'B'],
          headliner: 'Alela, Cunning Conqueror',
          variants: [{ label: 'Alela', cards: [] }]
        },
        {
          id: 'j22-goblins',
          name: 'Goblins',
          colors: ['R'],
          headliner: 'Krenko, Tin Street Kingpin',
          variants: [{ label: 'Krenko', cards: [] }]
        },
        {
          id: 'j22-heroes',
          name: 'Heroes',
          colors: ['W'],
          headliner: 'Starnheim Courser',
          variants: [{ label: 'Starnheim', cards: [] }]
        },
        {
          id: 'j22-lore',
          name: 'Lore',
          colors: ['U'],
          headliner: 'Sage of the Falls',
          variants: [{ label: 'Sage', cards: [] }]
        },
        {
          id: 'j22-minotaurs',
          name: 'Minotaurs',
          colors: ['B', 'R'],
          headliner: 'Fanatic of Mogis',
          variants: [{ label: 'Fanatic', cards: [] }]
        },
        {
          id: 'j22-party',
          name: 'Party',
          colors: ['W', 'U', 'B', 'R'],
          headliner: 'Tazri, Stalwart Survivor',
          variants: [{ label: 'Tazri', cards: [] }]
        },
        {
          id: 'j22-rogues',
          name: 'Rogues',
          colors: ['U', 'B'],
          headliner: 'Zareth San, the Trickster',
          variants: [{ label: 'Zareth San', cards: [] }]
        },
        {
          id: 'j22-shapeshifters',
          name: 'Shapeshifters',
          colors: ['U'],
          headliner: "Realmbreaker's Grasp",
          variants: [{ label: 'Shapeshifter', cards: [] }]
        },
        {
          id: 'j22-skulls',
          name: 'Skulls',
          colors: ['B'],
          headliner: 'Danse Macabre',
          variants: [{ label: 'Danse Macabre', cards: [] }]
        },
        {
          id: 'j22-soldiers',
          name: 'Soldiers',
          colors: ['W'],
          headliner: 'Myrel, Shield of Argive',
          variants: [{ label: 'Myrel', cards: [] }]
        },
        {
          id: 'j22-spells',
          name: 'Spells',
          colors: ['U'],
          headliner: 'Archmage Emeritus',
          variants: [{ label: 'Archmage', cards: [] }]
        },
        {
          id: 'j22-stompy',
          name: 'Stompy',
          colors: ['G'],
          headliner: 'Maskwood Nexus',
          variants: [{ label: 'Stompy', cards: [] }]
        },
        {
          id: 'j22-undead',
          name: 'Undead',
          colors: ['B'],
          headliner: "Gleaming Overseer",
          variants: [{ label: 'Overseer', cards: [] }]
        },
        {
          id: 'j22-vampires',
          name: 'Vampires',
          colors: ['B'],
          headliner: 'Florian, Voldaren Scion',
          variants: [{ label: 'Florian', cards: [] }]
        },
        {
          id: 'j22-wizards',
          name: 'Wizards',
          colors: ['U', 'R'],
          headliner: 'Adeliz, the Cinder Wind',
          variants: [{ label: 'Adeliz', cards: [] }]
        }
      ]
    },
    {
      id: 'j21',
      name: 'Historic Horizons',
      year: 2021,
      code: 'J21',
      decks: [
        {
          id: 'j21-assembled',
          name: 'Assembled',
          colors: ['W'],
          headliner: 'Heliod, Sun-Crowned',
          variants: [{ label: 'Heliod', cards: [] }]
        },
        {
          id: 'j21-bob',
          name: 'B.O.B.',
          colors: ['R'],
          headliner: 'Bag of Boulders',
          variants: [{ label: 'B.O.B.', cards: [] }]
        },
        {
          id: 'j21-collected',
          name: 'Collected',
          colors: ['G'],
          headliner: 'Collected Company',
          variants: [{ label: 'CoCo', cards: [] }]
        },
        {
          id: 'j21-dominaria',
          name: 'Dominaria',
          colors: ['W'],
          headliner: 'Teferi, Hero of Dominaria',
          variants: [{ label: 'Teferi', cards: [] }]
        },
        {
          id: 'j21-dragons',
          name: 'Dragons',
          colors: ['R'],
          headliner: 'Braids, Conjurer Adept',
          variants: [{ label: 'Braids', cards: [] }]
        },
        {
          id: 'j21-enchantments',
          name: 'Enchantments',
          colors: ['W', 'U'],
          headliner: 'Sythis, Harvest\'s Hand',
          variants: [{ label: 'Sythis', cards: [] }]
        },
        {
          id: 'j21-elves',
          name: 'Elves',
          colors: ['G'],
          headliner: 'Elvish Warmaster',
          variants: [{ label: 'Warmaster', cards: [] }]
        },
        {
          id: 'j21-goblins',
          name: 'Goblins',
          colors: ['R'],
          headliner: 'Goblin Anarchomancer',
          variants: [{ label: 'Anarchomancer', cards: [] }]
        },
        {
          id: 'j21-gods',
          name: 'Gods',
          colors: ['W', 'U', 'B', 'R', 'G'],
          headliner: "Purphoros, Bronze-Blooded",
          variants: [{ label: 'Purphoros', cards: [] }]
        },
        {
          id: 'j21-humans',
          name: 'Humans',
          colors: ['W'],
          headliner: 'Champion of the Parish',
          variants: [{ label: 'Champion', cards: [] }]
        },
        {
          id: 'j21-lands',
          name: 'Lands',
          colors: ['G'],
          headliner: 'Valakut Exploration',
          variants: [{ label: 'Valakut', cards: [] }]
        },
        {
          id: 'j21-merfolk',
          name: 'Merfolk',
          colors: ['U'],
          headliner: 'Svyelun of Sea and Sky',
          variants: [{ label: 'Svyelun', cards: [] }]
        },
        {
          id: 'j21-modified',
          name: 'Modified',
          colors: ['G'],
          headliner: 'Hamza, Guardian of Arashin',
          variants: [{ label: 'Hamza', cards: [] }]
        },
        {
          id: 'j21-phyrexian',
          name: 'Phyrexian',
          colors: ['B'],
          headliner: 'Glistener Elf',
          variants: [{ label: 'Glistener Elf', cards: [] }]
        },
        {
          id: 'j21-rogues',
          name: 'Rogues',
          colors: ['U', 'B'],
          headliner: "Anowon, the Ruin Thief",
          variants: [{ label: 'Anowon', cards: [] }]
        },
        {
          id: 'j21-spirits',
          name: 'Spirits',
          colors: ['W', 'U'],
          headliner: 'Katilda, Dawnhart Prime',
          variants: [{ label: 'Katilda', cards: [] }]
        },
        {
          id: 'j21-vampires',
          name: 'Vampires',
          colors: ['B'],
          headliner: 'Sorin the Mirthless',
          variants: [{ label: 'Sorin', cards: [] }]
        },
        {
          id: 'j21-wizards',
          name: 'Wizards',
          colors: ['U'],
          headliner: 'Baral, Chief of Compliance',
          variants: [{ label: 'Baral', cards: [] }]
        },
        {
          id: 'j21-wolves',
          name: 'Wolves',
          colors: ['G'],
          headliner: 'Tovolar, Dire Overlord',
          variants: [{ label: 'Tovolar', cards: [] }]
        },
        {
          id: 'j21-zombies',
          name: 'Zombies',
          colors: ['B'],
          headliner: 'Thalisse, Reverent Medium',
          variants: [{ label: 'Thalisse', cards: [] }]
        }
      ]
    }
  ]
};
