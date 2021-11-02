function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var blookInfo = {
    "Blooks": {
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
            "Box": "Space",
            "dropRate": "Unreleased"
        },
        "Brown Astronaut": {
            "Rarity": "Chroma",
            "Box": "Space",
            "dropRate": 0.05
        },
        "Cyan Astronaut": {
            "Rarity": "Chroma",
            "Box": "Space",
            "dropRate": "Awarded"
        },
        "Lime Astronaut": {
            "Rarity": "Chroma",
            "Box": "Space",
            "dropRate": "Awarded"
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
            "Box": "Space",
            "dropRate": "Awarded"
        }
    },
    "Sell Prices": {
        "Uncommon": 5,
        "Rare": 20,
        "Epic": 75,
        "Legendary": 200,
        "Chroma": 300,
        "Mystical": 1000
    }
};


var blookUrls = {
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
    "Haunted Pumpkin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/hauntedPumpkin.svg",
    "Spooky Pumpkin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyPumpkin.svg",
    "Spooky Mummy": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyMummy.svg",
    "Spooky Ghost": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyGhost.svg",
    "Frost Wreath": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/frostWreath.svg",
    "Tropical Globe": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/tropicalGlobe.svg",
    "Tim the Alien": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/timTheAlien.svg",
};
var rarityColors = {
    "Common":"rgb(255, 255, 255)",
    "Uncommon":"rgb(75, 194, 46)",
    "Rare":"rgb(10, 20, 250)",
    "Epic":"rgb(190, 0, 0)",
    "Legendary":"rgb(255, 145, 15)",
    "Chroma":"rgb(0, 204, 255)",
    "Mystical":"#a335ee"
}
var userName = prompt("Who is the user you want to see blooks on?\nMake sure you are on the blooks page (./blooks)")
async function getBlooks(blooketName) {
    const response = await fetch('https://api.blooket.com/api/users/blooks?name=' + blooketName, {
        headers: {
            "referer": "https://www.blooket.com/",
            "content-type": "application/json",
            "authorization": localStorage.token
        }
    });
    const data = await response.json();
    return data
};
async function seeBlooksFunc(user) {
    var userBlooks = await getBlooks(user)
    var blookKeys = Object.keys(userBlooks)
    blookKeys.sort(function(a, b) {
        return Object.keys(blookUrls).indexOf(a) - Object.keys(blookUrls).indexOf(b);
    });
    var blookContainer = document.getElementsByClassName("styles__blookArrayContainer___9Ae0L-camelCase")[0];
    blookContainer.innerHTML = "";
    for (var blookNum in blookKeys) {
        var blook = blookKeys[blookNum];
        var blookUrl = blookUrls[blook];
        var blookName = blook;
        var blookAmount = userBlooks[blook]
        var rarity = blookInfo["Blooks"][blook]["Rarity"]
        var sellPrice = blookInfo["Sell Prices"][rarity]
        var rarityColor = rarityColors[rarity]
        var blookFunction = `() => 
        pass
        document.getElementsByClassName('styles__blook___2Yq1S-camelCase')[0].src = '${blookUrl}';
        document.getElementsByClassName('styles__priceContainer___1pnjg-camelCase')[0].children[0].innerText = 'Sell Price: ${sellPrice}';
        document.getElementsByClassName('styles__quantityText___JDfUO-camelCase')[0].innerText = 'Quantity: ${blookAmount}';
        document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].innerText = '${rarity}';
        document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].style = 'color: ${rarityColor};';
        document.getElementsByClassName('styles__headerTextContainer___xVg-I-camelCase')[0].children[0].innerText = '${blookName}';
    `
        var blookHtml = `<button onclick="${blookFunction}"
    role="button" tabindex="0" style="font-size: 0px; outline: none; user-select: none; margin: 5px 1vw; position: relative; border: none; backface-visibility: hidden; background-color: transparent;">
    <div class="styles__blookContainer___GKC0D-camelCase"
        style="z-index: 1; margin: 0px auto; width: 5vw; height: 5.75vw; cursor: pointer; position: relative; outline: none;">
        <img src="${blookUrl}" alt="${blookName} Blook" draggable="false" class="styles__blook___2Yq1S-camelCase"></div>
    </button>`;
        blookContainer.innerHTML += blookHtml;
    };
};
seeBlooksFunc(userName)