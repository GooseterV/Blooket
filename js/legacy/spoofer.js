/*
const blookInfo = {
	"Blooks": {
		"Chick": {
			"Rarity": "Common",
			"Box": "Farm",
			"dropRate": "Not dropped."
		},
		"Chicken": {
			"Rarity": "Common",
			"Box": "Farm",
			"dropRate": "Not dropped."
		},
		"Cow": {
			"Rarity": "Common",
			"Box": "Farm",
			"dropRate": "Not dropped."
		},
		"Goat": {
			"Rarity": "Common",
			"Box": "Farm",
			"dropRate": "Not dropped."
		},
		"Horse": {
			"Rarity": "Common",
			"Box": "Farm",
			"dropRate": "Not dropped."
		},
		"Pig": {
			"Rarity": "Common",
			"Box": "Farm",
			"dropRate": "Not dropped."
		},
		"Sheep": {
			"Rarity": "Common",
			"Box": "Farm",
			"dropRate": "Not dropped."
		},
		"Duck": {
			"Rarity": "Common",
			"Box": "Farm",
			"dropRate": "Not dropped."
		},
		"Dog": {
			"Rarity": "Common",
			"Box": "Pet",
			"dropRate": "Not dropped."
		},
		"Cat": {
			"Rarity": "Common",
			"Box": "Pet",
			"dropRate": "Not dropped."
		},
		"Rabbit": {
			"Rarity": "Common",
			"Box": "Pet",
			"dropRate": "Not dropped."
		},
		"Goldfish": {
			"Rarity": "Common",
			"Box": "Pet",
			"dropRate": "Not dropped."
		},
		"Hamster": {
			"Rarity": "Common",
			"Box": "Pet",
			"dropRate": "Not dropped."
		},
		"Turtle": {
			"Rarity": "Common",
			"Box": "Pet",
			"dropRate": "Not dropped."
		},
		"Kitten": {
			"Rarity": "Common",
			"Box": "Pet",
			"dropRate": "Not dropped."
		},
		"Puppy": {
			"Rarity": "Common",
			"Box": "Pet",
			"dropRate": "Not dropped."
		},
		"Bear": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Moose": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Fox": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Raccoon": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Squirrel": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Owl": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Hedgehog": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Tiger": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Orangutan": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Cockatoo": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Parrot": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Anaconda": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Jaguar": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Macaw": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Toucan": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Panther": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Capuchin": {
			"Rarity": "Common",
			"Box": "Forest",
			"dropRate": "Not dropped."
		},
		"Snowy Owl": {
			"Rarity": "Common",
			"Box": "Snowy",
			"dropRate": "Not dropped."
		},
		"Polar Bear": {
			"Rarity": "Common",
			"Box": "Snowy",
			"dropRate": "Not dropped."
		},
		"Arctic Fox": {
			"Rarity": "Common",
			"Box": "Snowy",
			"dropRate": "Not dropped."
		},
		"Baby Penguin": {
			"Rarity": "Common",
			"Box": "Snowy",
			"dropRate": "Not dropped."
		},
		"Penguin": {
			"Rarity": "Common",
			"Box": "Snowy",
			"dropRate": "Not dropped."
		},
		"Arctic Hare": {
			"Rarity": "Common",
			"Box": "Snowy",
			"dropRate": "Not dropped."
		},
		"Seal": {
			"Rarity": "Common",
			"Box": "Snowy",
			"dropRate": "Not dropped."
		},
		"Walrus": {
			"Rarity": "Common",
			"Box": "Snowy",
			"dropRate": "Not dropped."
		},
		"Witch": {
			"Rarity": "Uncommon",
			"Box": "Medieval",
			"dropRate": 13.4
		},
		"Wizard": {
			"Rarity": "Uncommon",
			"Box": "Medieval",
			"dropRate": 13.4
		},
		"Elf": {
			"Rarity": "Uncommon",
			"Box": "Medieval",
			"dropRate": 13.4
		},
		"Fairy": {
			"Rarity": "Uncommon",
			"Box": "Medieval",
			"dropRate": 13.4
		},
		"Slime Monster": {
			"Rarity": "Uncommon",
			"Box": "Medieval",
			"dropRate": 13.4
		},
		"Jester": {
			"Rarity": "Rare",
			"Box": "Medieval",
			"dropRate": 9
		},
		"Dragon": {
			"Rarity": "Rare",
			"Box": "Medieval",
			"dropRate": 9
		},
		"Queen": {
			"Rarity": "Rare",
			"Box": "Medieval",
			"dropRate": 9
		},
		"Unicorn": {
			"Rarity": "Epic",
			"Box": "Medieval",
			"dropRate": 5
		},
		"King": {
			"Rarity": "Legendary",
			"Box": "Medieval",
			"dropRate": 1
		},
		"Two of Spades": {
			"Rarity": "Uncommon",
			"Box": "Wonderland",
			"dropRate": 15.2
		},
		"Eat Me": {
			"Rarity": "Uncommon",
			"Box": "Wonderland",
			"dropRate": 15
		},
		"Drink Me": {
			"Rarity": "Uncommon",
			"Box": "Wonderland",
			"dropRate": 15
		},
		"Alice": {
			"Rarity": "Uncommon",
			"Box": "Wonderland",
			"dropRate": 15
		},
		"Queen of Hearts": {
			"Rarity": "Uncommon",
			"Box": "Wonderland",
			"dropRate": 15
		},
		"Dormouse": {
			"Rarity": "Rare",
			"Box": "Wonderland",
			"dropRate": 6.5
		},
		"White Rabbit": {
			"Rarity": "Rare",
			"Box": "Wonderland",
			"dropRate": 6.5
		},
		"Cheshire Cat": {
			"Rarity": "Rare",
			"Box": "Wonderland",
			"dropRate": 6.5
		},
		"Caterpillar": {
			"Rarity": "Epic",
			"Box": "Wonderland",
			"dropRate": 2.5
		},
		"Mad Hatter": {
			"Rarity": "Epic",
			"Box": "Wonderland",
			"dropRate": 2.5
		},
		"King of Hearts": {
			"Rarity": "Legendary",
			"Box": "Wonderland",
			"dropRate": 0.3
		},
		"Toast": {
			"Rarity": "Uncommon",
			"Box": "Breakfast",
			"dropRate": 12.5
		},
		"Cereal": {
			"Rarity": "Uncommon",
			"Box": "Breakfast",
			"dropRate": 12.5
		},
		"Yogurt": {
			"Rarity": "Uncommon",
			"Box": "Breakfast",
			"dropRate": 12.5
		},
		"Breakfast Combo": {
			"Rarity": "Uncommon",
			"Box": "Breakfast",
			"dropRate": 12.5
		},
		"Orange Juice": {
			"Rarity": "Uncommon",
			"Box": "Breakfast",
			"dropRate": 12.5
		},
		"Milk": {
			"Rarity": "Uncommon",
			"Box": "Breakfast",
			"dropRate": 12.5
		},
		"Waffle": {
			"Rarity": "Rare",
			"Box": "Breakfast",
			"dropRate": 9
		},
		"Pancakes": {
			"Rarity": "Rare",
			"Box": "Breakfast",
			"dropRate": 9
		},
		"French Toast": {
			"Rarity": "Epic",
			"Box": "Breakfast",
			"dropRate": 5
		},
		"Pizza": {
			"Rarity": "Epic",
			"Box": "Breakfast",
			"dropRate": 2
		},
		"Earth": {
			"Rarity": "Uncommon",
			"Box": "Space",
			"dropRate": 18.75
		},
		"Meteor": {
			"Rarity": "Uncommon",
			"Box": "Space",
			"dropRate": 18.75
		},
		"Stars": {
			"Rarity": "Uncommon",
			"Box": "Space",
			"dropRate": 18.75
		},
		"Alien": {
			"Rarity": "Uncommon",
			"Box": "Space",
			"dropRate": 18.75
		},
		"Planet": {
			"Rarity": "Rare",
			"Box": "Space",
			"dropRate": 10
		},
		"UFO": {
			"Rarity": "Rare",
			"Box": "Space",
			"dropRate": 10
		},
		"Spaceship": {
			"Rarity": "Epic",
			"Box": "Space",
			"dropRate": 4.5
		},
		"Astronaut": {
			"Rarity": "Legendary",
			"Box": "Space",
			"dropRate": 0.45
		},
		"Lil Bot": {
			"Rarity": "Uncommon",
			"Box": "Bot",
			"dropRate": 19.5
		},
		"Lovely Bot": {
			"Rarity": "Uncommon",
			"Box": "Bot",
			"dropRate": 19.5
		},
		"Angry Bot": {
			"Rarity": "Uncommon",
			"Box": "Bot",
			"dropRate": 19.5
		},
		"Happy Bot": {
			"Rarity": "Uncommon",
			"Box": "Bot",
			"dropRate": 19.5
		},
		"Watson": {
			"Rarity": "Rare",
			"Box": "Bot",
			"dropRate": 9
		},
		"Buddy Bot": {
			"Rarity": "Rare",
			"Box": "Bot",
			"dropRate": 9
		},
		"Brainy Bot": {
			"Rarity": "Epic",
			"Box": "Bot",
			"dropRate": 3.7
		},
		"Mega Bot": {
			"Rarity": "Legendary",
			"Box": "Bot",
			"dropRate": 0.3
		},
		"Old Boot": {
			"Rarity": "Uncommon",
			"Box": "Aquatic",
			"dropRate": 15
		},
		"Jellyfish": {
			"Rarity": "Uncommon",
			"Box": "Aquatic",
			"dropRate": 15
		},
		"Clownfish": {
			"Rarity": "Uncommon",
			"Box": "Aquatic",
			"dropRate": 15
		},
		"Frog": {
			"Rarity": "Uncommon",
			"Box": "Aquatic",
			"dropRate": 15
		},
		"Crab": {
			"Rarity": "Uncommon",
			"Box": "Aquatic",
			"dropRate": 15
		},
		"Pufferfish": {
			"Rarity": "Rare",
			"Box": "Aquatic",
			"dropRate": 6.8
		},
		"Blobfish": {
			"Rarity": "Rare",
			"Box": "Aquatic",
			"dropRate": 6.8
		},
		"Octopus": {
			"Rarity": "Rare",
			"Box": "Aquatic",
			"dropRate": 6.8
		},
		"Narwhal": {
			"Rarity": "Epic",
			"Box": "Aquatic",
			"dropRate": 3.9
		},
		"Baby Shark": {
			"Rarity": "Legendary",
			"Box": "Aquatic",
			"dropRate": 0.5
		},
		"Megalodon": {
			"Rarity": "Legendary",
			"Box": "Aquatic",
			"dropRate": 0.2
		},
		"Panda": {
			"Rarity": "Uncommon",
			"Box": "Safari",
			"dropRate": 15
		},
		"Sloth": {
			"Rarity": "Uncommon",
			"Box": "Safari",
			"dropRate": 15
		},
		"Tenrec": {
			"Rarity": "Uncommon",
			"Box": "Safari",
			"dropRate": 15
		},
		"Flamingo": {
			"Rarity": "Uncommon",
			"Box": "Safari",
			"dropRate": 15
		},
		"Zebra": {
			"Rarity": "Uncommon",
			"Box": "Safari",
			"dropRate": 15
		},
		"Elephant": {
			"Rarity": "Rare",
			"Box": "Safari",
			"dropRate": 7
		},
		"Lemur": {
			"Rarity": "Rare",
			"Box": "Safari",
			"dropRate": 7
		},
		"Peacock": {
			"Rarity": "Rare",
			"Box": "Safari",
			"dropRate": 7
		},
		"Chameleon": {
			"Rarity": "Epic",
			"Box": "Safari",
			"dropRate": 3.48
		},
		"Lion": {
			"Rarity": "Legendary",
			"Box": "Safari",
			"dropRate": 0.5
		},
		"Snow Globe": {
			"Rarity": "Uncommon",
			"Box": "Blizzard",
			"dropRate": 17.75
		},
		"Holiday Gift": {
			"Rarity": "Uncommon",
			"Box": "Blizzard",
			"dropRate": 17.75
		},
		"Hot Chocolate": {
			"Rarity": "Uncommon",
			"Box": "Blizzard",
			"dropRate": 17.75
		},
		"Holiday Wreath": {
			"Rarity": "Uncommon",
			"Box": "Blizzard",
			"dropRate": 17.75
		},
		"Gingerbread Man": {
			"Rarity": "Rare",
			"Box": "Blizzard",
			"dropRate": 11
		},
		"Gingerbread House": {
			"Rarity": "Rare",
			"Box": "Blizzard",
			"dropRate": 11
		},
		"Snowman": {
			"Rarity": "Epic",
			"Box": "Blizzard",
			"dropRate": 5.9
		},
		"Santa Claus": {
			"Rarity": "Legendary",
			"Box": "Blizzard",
			"dropRate": 1.05
		},
		"Pumpkin": {
			"Rarity": "Uncommon",
			"Box": "Spooky",
			"dropRate": 18.5
		},
		"Swamp Monster": {
			"Rarity": "Uncommon",
			"Box": "Spooky",
			"dropRate": 18.5
		},
		"Frankenstein": {
			"Rarity": "Uncommon",
			"Box": "Spooky",
			"dropRate": 18.5
		},
		"Vampire": {
			"Rarity": "Uncommon",
			"Box": "Spooky",
			"dropRate": 18.5
		},
		"Zombie": {
			"Rarity": "Rare",
			"Box": "Spooky",
			"dropRate": 10.5
		},
		"Mummy": {
			"Rarity": "Rare",
			"Box": "Spooky",
			"dropRate": 10.5
		},
		"Werewolf": {
			"Rarity": "Epic",
			"Box": "Spooky",
			"dropRate": 5
		},
		"Ghost": {
			"Rarity": "Legendary",
			"Box": "Spooky",
			"dropRate": 0.7
		},
		"Red Astronaut": {
			"Rarity": "Chroma",
			"Box": "Space",
			"dropRate": 0.05
		},
		"Blue Astronaut": {
			"Rarity": "Chroma",
			"Box": "Space",
			"dropRate": "Unreleased"
		},
		"Green Astronaut": {
			"Rarity": "Chroma",
			"Box": "Space",
			"dropRate": 0.05
		},
		"Pink Astronaut": {
			"Rarity": "Chroma",
			"Box": "Space",
			"dropRate": 0.05
		},
		"Orange Astronaut": {
			"Rarity": "Chroma",
			"Box": "Space",
			"dropRate": 0.05
		},
		"Yellow Astronaut": {
			"Rarity": "Chroma",
			"Box": "Space",
			"dropRate": 0.05
		},
		"Black Astronaut": {
			"Rarity": "Chroma",
			"Box": "Space",
			"dropRate": 0.05
		},
		"Purple Astronaut": {
			"Rarity": "Chroma",
			"Box": "Unreleased",
			"dropRate": "Unreleased"
		},
		"Brown Astronaut": {
			"Rarity": "Chroma",
			"Box": "Space",
			"dropRate": 0.05
		},
		"Cyan Astronaut": {
			"Rarity": "Chroma",
			"Box": "PAC Event",
			"dropRate": "Awarded"
		},
		"Lime Astronaut": {
			"Rarity": "Chroma",
			"Box": "PAC Event",
			"dropRate": "Awarded"
		},
		"Rainbow Panda": {
			"Rarity": "Chroma",
			"Box": "Safari",
			"dropRate": 0.02
		},
		"Spooky Pumpkin": {
			"Rarity": "Chroma",
			"Box": "Spooky",
			"dropRate": "Awarded"
		},
		"Spooky Mummy": {
			"Rarity": "Chroma",
			"Box": "Spooky",
			"dropRate": "Awarded"
		},
		"Spooky Ghost": {
			"Rarity": "Mystical",
			"Box": "Spooky",
			"dropRate": "Awarded"
		},
		"Frost Wreath": {
			"Rarity": "Chroma",
			"Box": "Blizzard",
			"dropRate": 0.03
		},
		"Tropical Globe": {
			"Rarity": "Chroma",
			"Box": "Blizzard",
			"dropRate": 0.02
		},
		"Haunted Pumpkin": {
			"Rarity": "Chroma",
			"Box": "Spooky",
			"dropRate": 0.05
		},
		"Tim the Alien": {
			"Rarity": "Mystical",
			"Box": "PAC Event",
			"dropRate": "Awarded"
		},
		"Master Elf": {
			"Rarity": "Chroma",
			"Box": "POP Event",
			"dropRate": "Awarded"
		},
		"Agent Owl": {
			"Rarity": "Chroma",
			"Box": "POP Event",
			"dropRate": "Awarded"
		},
		"Phantom King": {
			"Rarity": "Mystical",
			"Box": "POP Event",
			"dropRate": "Awarded"
		},
		
		"Lovely Frog": {
			"Rarity":"Chroma",
			"Box":"Lovely Box",
			"dropRate": 100
		},
		"School of Fish": {
			"Rarity":"Mystical",
			"Box":"Unknown",
			"dropRate":"Awarded"
		}
	},
	"Sell Prices": {
		"Common":"Unsellable",
		"Uncommon": 5,
		"Rare": 20,
		"Epic": 75,
		"Legendary": 200,
		"Chroma": 300,
		"Mystical": 1000
	}
};



let spoofBlooks = {
	"Chick": "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chick.svg",
	"Chicken": "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chicken.svg",
	"Cow": "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/cow.svg",
	"Goat": "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/goat.svg",
	"Horse": "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/horse.svg",
	"Pig": "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/pig.svg",
	"Sheep": "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/sheep.svg",
	"Duck": "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/duck.svg",
	"Dog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/dog.svg",
	"Cat": "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/cat.svg",
	"Rabbit": "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/rabbit.svg",
	"Goldfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/goldfish.svg",
	"Hamster": "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/hamster.svg",
	"Turtle": "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/turtle.svg",
	"Kitten": "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/kitten.svg",
	"Puppy": "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/puppy.svg",
	"Bear": "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/bear.svg",
	"Moose": "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/moose.svg",
	"Fox": "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/fox.svg",
	"Raccoon": "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/raccoon.svg",
	"Squirrel": "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/squirrel.svg",
	"Owl": "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/owl.svg",
	"Hedgehog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/hedgehog.svg",
	"Tiger": "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/tiger.svg",
	"Orangutan": "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/orangutan.svg",
	"Cockatoo": "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/cockatoo.svg",
	"Parrot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/parrot.svg",
	"Anaconda": "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/anaconda.svg",
	"Jaguar": "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/jaguar.svg",
	"Macaw": "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/macaw.svg",
	"Toucan": "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/toucan.svg",
	"Panther": "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/panther.svg",
	"Capuchin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/capuchin.svg",
	"Snowy Owl": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/snowyOwl.svg",
	"Polar Bear": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/polarBear.svg",
	"Arctic Fox": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticFox.svg",
	"Baby Penguin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/babyPenguin.svg",
	"Penguin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/penguin.svg",
	"Arctic Hare": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticHare.svg",
	"Seal": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/seal.svg",
	"Walrus": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/walrus.svg",
	"Witch": "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/witch.svg",
	"Wizard": "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/wizard.svg",
	"Elf": "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/elf.svg",
	"Fairy": "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/fairy.svg",
	"Slime Monster": "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/slimeMonster.svg",
	"Jester": "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/jester.svg",
	"Dragon": "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/dragon.svg",
	"Queen": "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/queen.svg",
	"Unicorn": "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/unicorn.svg",
	"King": "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/king.svg",
	"Two of Spades": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/twoOfSpades.svg",
	"Eat Me": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/eat.svg",
	"Drink Me": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/drink.svg",
	"Alice": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/alice.svg",
	"Queen of Hearts": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/queenOfHearts.svg",
	"Dormouse": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/dormouse.svg",
	"White Rabbit": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/whiteRabbit.svg",
	"Cheshire Cat": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/cheshireCat.svg",
	"Caterpillar": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/caterpillar.svg",
	"Mad Hatter": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/madHatter.svg",
	"King of Hearts": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/kingOfHearts.svg",
	"Toast": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/toast.svg",
	"Cereal": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/cereal.svg",
	"Yogurt": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/yogurt.svg",
	"Breakfast Combo": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/breakfastCombo.svg",
	"Orange Juice": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/orangeJuice.svg",
	"Milk": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/milk.svg",
	"Waffle": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/waffle.svg",
	"Pancakes": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/pancakes.svg",
	"French Toast": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/frenchToast.svg",
	"Pizza": "https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/pizza.svg",
	"Earth": "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/earth.svg",
	"Meteor": "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/meteor.svg",
	"Stars": "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/stars.svg",
	"Alien": "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/alien.svg",
	"Planet": "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/planet.svg",
	"UFO": "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/UFO.svg",
	"Spaceship": "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/spaceship.svg",
	"Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/astronaut.svg",
	"Lil Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lilBot.svg",
	"Lovely Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lovelyBot.svg",
	"Angry Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/angryBot.svg",
	"Happy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/happyBot.svg",
	"Watson": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/watson.svg",
	"Buddy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/buddyBot.svg",
	"Brainy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/brainyBot.svg",
	"Mega Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/megaBot.svg",
	"Old Boot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/oldBoot.svg",
	"Jellyfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/jellyfish.svg",
	"Clownfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/clownfish.svg",
	"Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/frog.svg",
	"Crab": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/crab.svg",
	"Pufferfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/pufferFish.svg",
	"Blobfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/blobfish.svg",
	"Octopus": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/octopus.svg",
	"Narwhal": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/narwhal.svg",
	"Baby Shark": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/babyShark.svg",
	"Megalodon": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/megalodon.svg",
	"Panda":"https://media.blooket.com/image/upload/v1643835595/Blooks/panda.svg",
	"Sloth":"https://media.blooket.com/image/upload/v1643835594/Blooks/sloth.svg",
	"Tenrec":"https://media.blooket.com/image/upload/v1643835594/Blooks/tenrec.svg",
	"Flamingo":"https://media.blooket.com/image/upload/v1643835592/Blooks/flamingo.svg",
	"Zebra":"https://media.blooket.com/image/upload/v1643835592/Blooks/zebra.svg",
	"Elephant":"https://media.blooket.com/image/upload/v1643835592/Blooks/elephant.svg",
	"Lemur":"https://media.blooket.com/image/upload/v1643835594/Blooks/lemur.svg",
	"Peacock":"https://media.blooket.com/image/upload/v1643835594/Blooks/peacock.svg",
	"Chameleon":"https://media.blooket.com/image/upload/v1643835592/Blooks/chameleon.svg",
	"Lion":"https://media.blooket.com/image/upload/v1643835592/Blooks/lion.svg",
	"Snow Globe": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowGlobe.svg",
	"Holiday Gift": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayGift.svg",
	"Hot Chocolate": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/hotChocolate.svg",
	"Holiday Wreath": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayWreath.svg",
	"Gingerbread Man": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/gingerbreadMan.svg",
	"Gingerbread House": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/gingerbreadHouse.svg",
	"Snowman": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowman.svg",
	"Santa Claus": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/santaClaus.svg",
	"Pumpkin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/pumpkin.svg",
	"Swamp Monster": "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/swampMonster.svg",
	"Frankenstein": "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/frankenstein.svg",
	"Vampire": "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/vampire.svg",
	"Zombie": "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/zombie.svg",
	"Mummy": "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/mummy.svg",
	"Werewolf": "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/werewolf.svg",
	"Ghost": "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/ghost.svg",
	"Red Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/redAstronaut.svg",
	"Blue Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blueAstronaut.svg",
	"Green Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/greenAstronaut.svg",
	"Pink Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/pinkAstronaut.svg",
	"Orange Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/orangeAstronaut.svg",
	"Yellow Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/yellowAstronaut.svg",
	"Black Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blackAstronaut.svg",
	"Purple Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/purpleAstronaut.svg",
	"Brown Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/brownAstronaut.svg",
	"Cyan Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/cyanAstronaut.svg",
	"Lime Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/limeAstronaut.svg",
	"Rainbow Panda":"https://media.blooket.com/image/upload/v1643835594/Blooks/rainbowPanda.svg",
	"Haunted Pumpkin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/hauntedPumpkin.svg",
	"Spooky Pumpkin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyPumpkin.svg",
	"Spooky Mummy": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyMummy.svg",
	"Spooky Ghost": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyGhost.svg",
	"Frost Wreath": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/frostWreath.svg",
	"Tropical Globe": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/tropicalGlobe.svg",
	"Tim the Alien": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/timTheAlien.svg",
	"Master Elf":"https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/masterElf.svg",
	"Agent Owl":"https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/agentOwl.svg",
	"Phantom King":"https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/phantomKing.svg",
	"White Peacock":"https://media.blooket.com/image/upload/v1643835592/Blooks/whitePeacock.svg",
	"Tiger Zebra":"https://media.blooket.com/image/upload/v1643835596/Blooks/tigerZebra.svg",
	"School of Fish":"https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/other/schoolOfFish.svg",
	// Fishing Frenzy Blooks
	"Rainbow Jellyfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/rainbowJellyfish.svg",
	"Blizzard Clownfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/blizzardClownfish.svg",
	"Lovely Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/lovelyFrog.svg",
	"Poison Dart Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/poisonDartFrog.svg",
	"Lemon Crab": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/lemonCrab.svg",
	"Pirate Pufferfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/piratePufferfish.svg",
	"Donut Blobfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/donutBlobfish.svg",
	"Crimson Octopus": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/crimsonOctopus.svg",
	"Rainbow Narwhal": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/rainbowNarwhal.svg",

	// Tower Defense Blooks
	/*
	"Fire Dragon": "https://res.cloudinary.com/blooket/image/upload/v1591214955/Blooks/fireDragon.svg",
	"Wind Dragon": "https://res.cloudinary.com/blooket/image/upload/v1591215793/Blooks/windDragon.svg",
	"God of Lightning": "https://res.cloudinary.com/blooket/image/upload/v1591282332/Blooks/lightningWizard.svg",
	"Enchanted Elf": "https://res.cloudinary.com/blooket/image/upload/v1591048522/Blooks/enchantedElf.svg",
	"Master Elf": "https://res.cloudinary.com/blooket/image/upload/v1591048518/Blooks/masterElf.svg",
	"Agent Owl": "https://res.cloudinary.com/blooket/image/upload/v1590862499/Blooks/agentOwl.svg",
	"Hungry Fish": "https://res.cloudinary.com/blooket/image/upload/v1591019780/Blooks/redGoldfish.svg",
	"Party Pig": "https://res.cloudinary.com/blooket/image/upload/v1590862509/Blooks/partyPig.svg",
	"GO NUTS SQUIRREL": "https://res.cloudinary.com/blooket/image/upload/v1591027039/Blooks/nutsSquirrel.svg",
	"Uni-CORN": "https://res.cloudinary.com/blooket/image/upload/v1591365760/Blooks/uni-CORN.svg",
	"Crazy Unicorn": "https://res.cloudinary.com/blooket/image/upload/v1591381159/Blooks/crazyUnicorn.svg",
	"Phantom King": "https://res.cloudinary.com/blooket/image/upload/v1591301898/Blooks/phantomKing.svg",
	
	// Sandwich
	"Sandwich": "https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/sandwich.svg",
	// Colored Blooks
	"Light Blue": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/lightBlueBlook.svg",
	"Black": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/blackBlook.svg",
	"Red": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/redBlook.svg",
	"Purple": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/purpleBlook.svg",
	"Pink": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/pinkBlook.svg",
	"Orange": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/orangeBlook.svg",
	"Lime": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/limeBlook.svg",
	"Green": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/greenBlook.svg",
	"Teal": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/tealBlook.svg",
	"Tan": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/tanBlook.svg",
	"Maroon": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/maroonBlook.svg",
	"Gray": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/grayBlook.svg",
	"Mint": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/mintBlook.svg",
	"Salmon": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/salmonColorBlook.svg",
	"Burgandy": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/burgandyBlook.svg",
	"Baby Blue": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/babyBlueBlook.svg",
	"Dust": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/dustBlook.svg",
	"Brown": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/brownBlook.svg",
	"Dull Blue": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/dullBlueBlook.svg",
	"Yellow": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/yellowBlook.svg",
	"Blue": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/blueBlook.svg",
	// Frogs
	/*
	"Golden Frog": "https://cdn.discordapp.com/attachments/903063371425906708/903777221871824896/golden_frog.png",
	"Blood Frog": "https://cdn.discordapp.com/attachments/903063371425906708/903795590939443250/blood_frog.png",
	"Bog-dwelling Frog": "https://cdn.discordapp.com/attachments/847500838825754649/903799490018955284/bogdweller_frog.png",
	"Foggy Frog": "https://cdn.discordapp.com/attachments/847500838825754649/903799491793125377/foggy_frog.png",
	"Lavender Frog": "https://cdn.discordapp.com/attachments/847500838825754649/903799494599118848/lavender_frog.png",
	"Minty Frog": "https://cdn.discordapp.com/attachments/847500838825754649/903799495085686804/mint_frog.png",
	"Moonlit Frog": "https://cdn.discordapp.com/attachments/847500838825754649/903799496843079690/moonlight_frog.png",
	"Paradise Frog": "https://cdn.discordapp.com/attachments/847500838825754649/903799499221262386/paradise_frog.png",
	"Sunrise Frog": "https://cdn.discordapp.com/attachments/847500838825754649/903799500886380664/Sunrise_Frog.png",
	"Sunset Frog": "https://cdn.discordapp.com/attachments/847500838825754649/903799502920617984/sunset_frog.png",
	"Vibrant Frog": "https://cdn.discordapp.com/attachments/847500838825754649/903799505747591168/vibrant_frog.png",
	// Custom-er Blooks
	"Spooky Haunted Pumpkin":"https://cdn.discordapp.com/emojis/899461479265370122.png?size=512",
	"Record Frog":"https://cdn.discordapp.com/emojis/796917958705545247.png?size=512",
	"Squire":"https://cdn.discordapp.com/emojis/797557375581421579.png?size=512",
	"Princess":"https://cdn.discordapp.com/emojis/797551755020992564.png?size=512",
	"Watermelon":"https://cdn.discordapp.com/emojis/796916057243779082.png?size=512",
	"Cute Ogre":"https://cdn.discordapp.com/emojis/796921352774877224.png?size=512",
	"Dronkey":"https://cdn.discordapp.com/emojis/797551812386488346.png?size=512",
	"Kedamono":"https://media.discordapp.net/attachments/904165427842809906/904168131650539520/no.png",
	// Tower Defense Particle Blooks
	"Egg": "https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/egg.svg",
	"PigBomb": "https://res.cloudinary.com/blooket/image/upload/v1593095358/Media/defense/pigBomb.svg",
	"DiscoBall": "https://res.cloudinary.com/blooket/image/upload/v1593095364/Media/defense/discoBall.svg",
	"Fish": "https://res.cloudinary.com/blooket/image/upload/v1593095356/Media/defense/fish.svg",
	"Nut": "https://res.cloudinary.com/blooket/image/upload/v1593095356/Media/defense/nut.svg",
	"Arrow": "https://res.cloudinary.com/blooket/image/upload/v1593095361/Media/defense/arrow.svg",
	"MasterArrow": "https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/masterArrow.svg",
	"EnchantedArrow": "https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/enchantedArrow.svg",
	"WitchOrb": "https://res.cloudinary.com/blooket/image/upload/v1593095361/Media/defense/witchOrb.svg",
	"Sword": "https://res.cloudinary.com/blooket/image/upload/v1593095361/Media/defense/sword.svg",
	"PhantomSword": "https://res.cloudinary.com/blooket/image/upload/v1593095358/Media/defense/phantomSword.svg",
	"Heart": "https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/heart.svg",
	"Missile": "https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/missile.svg",
	"BigMissile": "https://res.cloudinary.com/blooket/image/upload/v1593095361/Media/defense/bigMissile.svg",
	"Corn": "https://res.cloudinary.com/blooket/image/upload/v1593095363/Media/defense/corn.svg",
	"CornKernel": "https://res.cloudinary.com/blooket/image/upload/v1593095364/Media/defense/cornKernel.svg"
	
};
let rarityColors = {
	"Common": "rgb(255, 255, 255)",
	"Uncommon": "rgb(75, 194, 46)",
	"Rare": "rgb(10, 20, 250)",
	"Epic": "rgb(190, 0, 0)",
	"Legendary": "rgb(255, 145, 15)",
	"Chroma": "rgb(0, 204, 255)",
	"Mystical": "#a335ee"
};

function spoofBlooksFunc() {
	let blookContainer = document.getElementsByClassName("styles__blookArrayContainer___9Ae0L-camelCase")[0];
	blookContainer.innerHTML = "";
	for (let i = 0; i < Object.keys(spoofBlooks).length; i++) {
		let blookUrl = Object.values(spoofBlooks)[i];
		let blookName = Object.keys(spoofBlooks)[i];
		let blook = blookName;
		if (Object.keys(blookInfo.Blooks).includes(blookName)) {
			const rarity = blookInfo.Blooks[blookName].Rarity
			const rarityColor = rarityColors[rarity]
			let sellPrice; 
			if (blookName === "Megalodon") {sellPrice = 250;}
			else if (blookName === "Snowman") {sellPrice = 75;}
			else if (blookName === "Master Elf") {sellPrice = 350;}
			else {sellPrice = blookInfo["Sell Prices"][rarity];};
			let blookHtml = `<button
			role="button" tabindex="0" style="font-size: 0px; outline: none; user-select: none; margin: 5px 1vw; position: relative; border: none; backface-visibility: hidden; background-color: transparent;">
			<div class="styles__blookContainer___GKC0D-camelCase blook"
				data-url='${blookUrl}'
				data-name='${blookName}'
				data-price='${sellPrice}'
				data-rarity='${rarity}'
				data-color='${rarityColor}'
				style="z-index: 1; margin: 0px auto; width: 5vw; height: 5.75vw; cursor: pointer; position: relative; outline: none;">
				<img src="${blookUrl}" alt="${blookName} Blook" draggable="false" class="styles__blook___2Yq1S-camelCase"></div>
			</button>`;
			blookContainer.innerHTML += blookHtml;
		} else if (!(Object.keys(blookInfo.Blooks).includes(blookName))) {
			const sellPrice = "Unsellable"
			const rarity = "Spoofed"
			const rarityColor = "#ed34c5"
			let blookHtml = `<button
			role="button" tabindex="0" style="font-size: 0px; outline: none; user-select: none; margin: 5px 1vw; position: relative; border: none; backface-visibility: hidden; background-color: transparent;">
			<div class="styles__blookContainer___GKC0D-camelCase blook"
				data-url='${blookUrl}'
				data-name='${blookName}'
				data-price='Unknown'
				data-rarity='Unknown'
				data-color='${rarityColor}'
				style="z-index: 1; margin: 0px auto; width: 5vw; height: 5.75vw; cursor: pointer; position: relative; outline: none;">
				<img src="${blookUrl}" alt="${blookName} Blook" draggable="false" class="styles__blook___2Yq1S-camelCase"></div>
			</button>`;
			blookContainer.innerHTML += blookHtml;
		}
	function blookClick(blookUrl, blookName, rarity, rarityColor, sellPrice) {
		//
		
		document.getElementsByClassName('styles__blook___2Yq1S-camelCase')[0].src = `${blookUrl}`;
		document.getElementsByClassName('styles__priceContainer___1pnjg-camelCase')[0].children[0].innerText = `Sell Price: ${sellPrice}`;
		document.getElementsByClassName('styles__quantityText___JDfUO-camelCase')[0].innerText = 'Quantity: 1';
		document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].innerText = rarity;
		document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].style = `color: ${rarityColor};`;
		document.getElementsByClassName('styles__headerTextContainer___xVg-I-camelCase')[0].children[0].innerText = `${blookName}`;
	}
	let htmlBlooks = document.getElementsByClassName("blook");
	for (let blook of htmlBlooks) {
		blook.addEventListener("click", function(){blookClick(
			blook.getAttribute("data-url"),
			blook.getAttribute("data-name"),
			blook.getAttribute("data-rarity"),
			blook.getAttribute("data-color"),
			blook.getAttribute("data-price")
		)});
		}
	};
};*/
/*
function get_random(list) {
	return list[Math.floor((Math.random() * list.length))];
};

function removeAllInstances(arr, item) {
	for (let i = arr.length; i--;) {
	  if (arr[i] === item) arr.splice(i, 1);
	};
};
*/
/*
function spoofMarket() {
	let boxesContainer = document.getElementsByClassName("styles__boxContainer___2d8tl-camelCase")[0];
	let frogs = ["Golden Frog", "Blood Frog", "Bog-dwelling Frog", "Foggy Frog", "Lavender Frog", "Minty Frog", "Moonlit Frog", "Paradise Frog", "Sunrise Frog", "Sunset Frog", "Vibrant Frog"];
	let jungleAnimals = ["Anaconda", "Capuchin", "Cockatoo", "Jaguar", "Macaw", "Orangutan", "Parrot", "Panther", "Tiger", "Toucan"];
	let arr = frogs;
	let blook1 = get_random(arr);
	removeAllInstances(arr, blook1);
	let blook2 = get_random(arr);
	removeAllInstances(arr, blook2);
	let blook3 = get_random(arr);
	removeAllInstances(arr, blook3);
	let blook4 = get_random(arr);
	removeAllInstances(arr, blook4);
	let boxColors = {
		"frogs":{
			"middle":"#35d0e8",
			"shadow":"#ed34c5",
			"background":"#0b83e6;"
		},
		"jungleAnimals":{
			"background":"#1b4d06",
			"middle":"#3b9614",
			"shadow":"#420e01"
		}
	};
	let boxPrice = 50;
	let box = "frogs";
	let boxName = "Frog";
	let boxHtml = `<div class="styles__box___2pZ5d-camelCase" role="button" tabindex="0" style="box-shadow: 0 0 8px 3px ${boxColors[box]["shadow"]}; background-color: ${boxColors[box]["background"]}">
	<div class="styles__boxHeader___UoHkq-camelCase" style="color: #fff;">${boxName} Box</div>
	<div class="styles__middleBoxContainer___e-Gwl-camelCase" style="background-color: ${boxColors[box]["middle"]}">
		<div class="styles__miniBlookContainer___1Y4oH-camelCase">
			<div class="styles__blookContainer___GKC0D-camelCase styles__miniBlook___3eAjl-camelCase"><img
					src="${spoofBlooks[blook1]}" alt="${blook1}"
					draggable="false" class="styles__blook___2Yq1S-camelCase"></div>
			<div class="styles__blookContainer___GKC0D-camelCase styles__miniBlook___3eAjl-camelCase"><img
					src="${spoofBlooks[blook2]}" alt="${blook2}"
					draggable="false" class="styles__blook___2Yq1S-camelCase"></div>
			<div class="styles__blookContainer___GKC0D-camelCase styles__miniBlook___3eAjl-camelCase"><img
					src="${spoofBlooks[blook3]}" alt="${blook3}"
					draggable="false" class="styles__blook___2Yq1S-camelCase"></div>
			<div class="styles__blookContainer___GKC0D-camelCase styles__miniBlook___3eAjl-camelCase"><img
					src="${spoofBlooks[blook4]}"
					alt="${blook4}" draggable="false" class="styles__blook___2Yq1S-camelCase"></div>
		</div>
		<div class="styles__mysteryBoxIcon___18nWF-camelCase" style="background-color: ${boxColors[box]["background"]}; box-shadow: ${boxColors[box]["shadow"]} 0px 0px 8px 3px;">?</div>
	</div>
	<div class="styles__boxTokenContainer___1clGF-camelCase">
		<div class="styles__boxTokenText___NdiWk-camelCase" style="color: #fff;">${boxPrice}</div><img
			src="https://res.cloudinary.com/dkuqmpvbo/raw/upload/v1638837301/token.svg"
			alt="Token" class="styles__boxTokenIcon___1PttE-camelCase" draggable="false">
	</div>
	</div>`;
	let blizzardHtml = `<div class="styles__box___2pZ5d-camelCase styles__merryBox___3bu08-camelCase" role="button" tabindex="0">
	<div class="styles__boxHeader___UoHkq-camelCase">Blizzard Box</div>
	<div class="styles__middleBoxContainer___e-Gwl-camelCase"
		style="background-image: linear-gradient(rgb(49, 170, 224), rgb(187, 221, 255));">
		<div class="styles__miniBlookContainer___1Y4oH-camelCase">
			<div class="styles__blookContainer___GKC0D-camelCase styles__miniBlook___3eAjl-camelCase"><img
					src="https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayWreath.svg"
					alt="Holiday Wreath Blook" draggable="false" class="styles__blook___2Yq1S-camelCase"></div>
			<div class="styles__blookContainer___GKC0D-camelCase styles__miniBlook___3eAjl-camelCase"><img
					src="https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowGlobe.svg"
					alt="Snow Globe Blook" draggable="false" class="styles__blook___2Yq1S-camelCase"></div>
			<div class="styles__blookContainer___GKC0D-camelCase styles__miniBlook___3eAjl-camelCase"><img
					src="https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowman.svg"
					alt="Snowman Blook" draggable="false" class="styles__blook___2Yq1S-camelCase"></div>
			<div class="styles__blookContainer___GKC0D-camelCase styles__miniBlook___3eAjl-camelCase"><img
					src="https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/santaClaus.svg"
					alt="Santa Claus Blook" draggable="false" class="styles__blook___2Yq1S-camelCase"></div>
		</div>
		<div class="styles__mysteryBoxIcon___18nWF-camelCase"
			style="background-color: rgb(100, 190, 232); box-shadow: rgb(255, 255, 255) 0px 0px 8px 3px;">?</div>
	</div>
	<div class="styles__boxTokenContainer___1clGF-camelCase">
		<div class="styles__boxTokenText___NdiWk-camelCase">12/1/21</div>
	</div>
</div>
	`
	boxesContainer.innerHTML = blizzardHtml + boxHtml + boxesContainer.innerHTML;

};
*/
/*
let styles = document.getElementsByTagName("style");
let lastStyle = styles[styles.length - 1];
lastStyle.innerText += `
.spookyghost{animation:spookyghost 4s linear 0s infinite;}
@keyframes spookyghost {
	0%{transform:translateY(0);}
	50%{transform:translateY(-7.5%);}
	100%{transform:translateY(0);}
}`

lastStyle.innerText += `
button:hover {
	cursor:pointer !important;
}
`
spoofBlooksFunc();
*/
/*
let styles = document.getElementsByTagName("style");
let lastStyle = styles[styles.length - 1];
lastStyle.innerText += `
button:hover {
	cursor:pointer !important;
}
`*/

function Hook(objectName, dataLink, thisLink) {
	Object.defineProperty(Object.prototype, objectName, {
		get: function () {
			Reflect.defineProperty(this, objectName, {
				get: function () {
					return data[dataLink];
				},
				set: function (d) {
					data[dataLink] = d;
				},
				enumerable: true
			});
			if (thisLink) {
				data[thisLink] = this;
			};
			return data[dataLink];
		},
		set: function (d) {
			Reflect.defineProperty(this, objectName, {
				get: function () {
					return data[dataLink];
				},
				set: function (d) {
					data[dataLink] = d;
				},
				enumerable: true
			});
			if (thisLink) {
				data[thisLink] = this;
			};
			data[dataLink] = d;
		}
	});
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

let data = {

};

Hook('allBlooks', 'blooks', 'blooksThisKeyword');

await sleep(250);
document.getElementById("app").firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.click();

data.blooksThisKeyword.blooks = data.allBlooks;
