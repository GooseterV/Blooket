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
const iF = document.createElement("iframe");
iF.src = "about:blank";
iF.style = "display:none;"
document.body.appendChild(iF);
const blookName = iF.contentWindow.prompt("What's the name of the blook? (must exist)");
const blookAmount =  iF.contentWindow.prompt("How many do you want?");
Hook('allBlooks', 'blooks', 'blooksThisKeyword');
await sleep(250);
document.getElementById("app").firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.click();
data.blooksThisKeyword.blooks.push(blookName);
data.blooksThisKeyword.blookData[blookName] = parseInt(blookAmount);
iF.contentWindow.alert("Please click on a blook to update the page.");