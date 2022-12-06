const iF = document.createElement("iframe");
iF.src = "about:blank";
iF.style = "display:none;"
document.body.appendChild(iF);
const userName = iF.contentWindow.prompt("Who is the user you want to see blooks on?\nMake sure you are on the blooks page (./blooks)");
async function getBlooks(blooketName) {
	const response = await fetch('https://dashboard.blooket.com/api/users?name=' + blooketName, {
		headers: {
			"referer": "https://www.blooket.com/",
			"content-type": "application/json",
			"authorization": localStorage.token
		},
		credentials: "include"
	});
	const data = await response.json();
	return data;
};
const data = {};

function getWebpackCache(id=null) {
	const c = window.webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache;
	return !id?c:c[id];
};

function searchWebpackFunctionCache(query="") {
	return Object.values(getWebpackCache()).filter(
		k=>k.exports?.a
	).filter(
		k=>k.exports.a.toString().includes(query)
	);
};

function getWebpackObjectCache() {
	return Object.values(getWebpackCache()).filter(
		k => !(k.exports instanceof Function) 
			&& k.exports instanceof Object 
			&& !(k.exports?.a instanceof Function)
			&& Object.keys(k.exports).length > 0
	);
};

function searchWebpackObjectCache(key="a", nestedKey=null) {
	return getWebpackObjectCache().filter(
		k => nestedKey ? k.exports?.[key]?.[nestedKey] : k.exports?.[key]
	);
};

function searchWebpackCache(cache, q="") {
	return cache.filter(x=>x.exports.toString().includes(q));
};


function getBlookValue(blook="") {
	return searchWebpackFunctionCache(`return 20;`)[0].exports.a(blook);
};



const sleep = ms => new Promise(r => setTimeout(r, ms));
async function seeBlooksFunc(user) {
	let totalValue = 0;
	const userBlooks = await getBlooks(user);
	const blookKeys = Object.keys(userBlooks["unlocks"]);
	Hook('showFree', 'blooks', 'blooksThisKeyword');
	//console.log(userBlooks)
	blookKeys.sort(function (a, b) {
		let blookUrls = searchWebpackObjectCache("a", "Frog")[0].exports.a;
		return Object.keys(blookUrls).indexOf(a) - Object.keys(blookUrls).indexOf(b);
	});
	await sleep(250);
	Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ blookData: userBlooks.unlocks })
	for (let blook of blookKeys) {
		totalValue += userBlooks["unlocks"][blook] * getBlookValue(blook);
	};
	
	iF.contentWindow.alert(`Total Value of ${userName}'s Blooks: ${totalValue}`);
};
seeBlooksFunc(userName);
