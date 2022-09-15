/* Spoofer.js */
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
			}
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
			}
			data[dataLink] = d;
		}
	})
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

let data = {

};
const ALL_BLOOKS = ["Elf", "Witch", "Wizard", "Fairy", "Slime Monster", "Jester", "Dragon", "Unicorn", "Queen", "King", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Gingerbread Man", "Gingerbread House", "Snowman", "Santa Claus", "Frost Wreath", "Tropical Globe", "Two of Spades", "Eat Me", "Drink Me", "Alice", "Queen of Hearts", "Dormouse", "White Rabbit", "Cheshire Cat", "Caterpillar", "Mad Hatter", "King of Hearts", "Toast", "Cereal", "Yogurt", "Breakfast Combo", "Orange Juice", "Milk", "Waffle", "Pancakes", "French Toast", "Pizza", "Sandwich", "Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue", "Pumpkin", "Swamp Monster", "Frankenstein", "Vampire", "Zombie", "Mummy", "Werewolf", "Ghost", "Haunted Pumpkin", "Spooky Pumpkin", "Spooky Mummy", "Spooky Ghost", "Earth", "Meteor", "Stars", "Alien", "Planet", "UFO", "Spaceship", "Astronaut", "Red Astronaut", "Blue Astronaut", "Green Astronaut", "Pink Astronaut", "Orange Astronaut", "Yellow Astronaut", "Black Astronaut", "Purple Astronaut", "Brown Astronaut", "Cyan Astronaut", "Lime Astronaut", "Tim the Alien", "Rainbow Astronaut", "Lil Bot", "Lovely Bot", "Angry Bot", "Happy Bot", "Watson", "Buddy Bot", "Brainy Bot", "Mega Bot", "Old Boot", "Jellyfish", "Clownfish", "Frog", "Crab", "Pufferfish", "Blobfish", "Octopus", "Narwhal", "Baby Shark", "Megalodon", "Rainbow Jellyfish", "Blizzard Clownfish", "Lovely Frog", "Lucky Frog", "Spring Frog", "Poison Dart Frog", "Lemon Crab", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Rainbow Narwhal", "Agent Owl", "Master Elf", "Phantom King", "Panda", "Sloth", "Tenrec", "Flamingo", "Zebra", "Elephant", "Lemur", "Peacock", "Chameleon", "Lion", "Rainbow Panda", "White Peacock", "Tiger Zebra", "Amber", "Dino Egg", "Dino Fossil", "Stegosaurus", "Velociraptor", "Brontosaurus", "Triceratops", "Tyrannosaurus Rex"]
const allBlooks = ALL_BLOOKS.reduce((a,b)=> (a[b]=1,a),{});
Hook('blookData', 'blooks', 'blooksThisKeyword');

await sleep(250);
document.getElementById("app").firstElementChild.firstElementChild.lastElementChild.children[1].firstElementChild.firstElementChild.lastElementChild.firstElementChild.click();

data.blooksThisKeyword.blookData = allBlooks;

