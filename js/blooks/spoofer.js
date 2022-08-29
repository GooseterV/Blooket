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

Hook('blookData', 'blooks', 'blooksThisKeyword');

await sleep(250);
document.getElementById("app").firstElementChild.firstElementChild.lastElementChild.children[1].firstElementChild.firstElementChild.lastElementChild.firstElementChild.click();

//data.blooksThisKeyword.blookData = data.allBlooks;

