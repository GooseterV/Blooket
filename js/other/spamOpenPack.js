const iF = document.createElement("iframe");
iF.src = "about:blank";
iF.style = "display:none;"
document.body.appendChild(iF);

const getBuildConfig = () =>
	new Promise((resolve, reject) => {
		try {
			let buildConfig = window.webpackJsonp
				.map(e => Object.keys(e[1])
					.map(t => e[1][t]))
						.reduce((e, t) => [...e, ...t], [])
							.find(e => /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(e.toString()) && /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(e.toString()))
								.toString();
			resolve({
				buildId: buildConfig.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
				secret: buildConfig.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1]
			});
		} catch (err) {
			console.log(err);
			reject(false);
		};
	});
const BLOOKET_BUILD_KEY = (await getBuildConfig()).buildId;
console.log(BLOOKET_BUILD_KEY);
const box = iF.contentWindow.prompt("Which box do you want to open? e.g: 'Space'.");
const amount = parseInt(iF.contentWindow.prompt("How many boxes do you want to open?"));
console.log(amount)
let results = {};
const encodeValues = async (e) => {
	let h = (await getBuildConfig());
	let d = window.crypto.getRandomValues(new Uint8Array(12));
	return window.btoa(Array.from(d).map(e => String.fromCharCode(e)).join("") + Array.from(new Uint8Array(await window.crypto.subtle.encrypt({
		name: "AES-GCM",
		iv: d
	}, await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", (new TextEncoder).encode(h.secret)), {
		name: "AES-GCM"
	}, !1, ["encrypt"]), (new TextEncoder).encode(JSON.stringify(e) ) ) ) ).map(e => String.fromCharCode(e)).join(""))
};

async function getSessionName() {
	const response = await fetch('https://dashboard.blooket.com/api/users', {
		method: "GET",
		headers: {
			"accept": "application/json, text/plain, */*",
		},
		credentials: "include"
	});
	const data = await response.json();
	return data.name;
};
const name = await getSessionName();
async function openBox(box) {
	const res = await fetch("https://dashboard.blooket.com/api/users/unlockblook", {
		headers: {
			"referer": "https://www.blooket.com/",
			"content-type":"text/plain",
			"x-blooket-build":BLOOKET_BUILD_KEY
		}, 
		body:await encodeValues({
			box:box,
			name:name,
		}),
		method:"PUT",
		credentials:"include"
	});

	return await res.json();
};

async function openBoxes() {
	for (let i = 0; i < amount; i++) {
		const result = (await openBox(box)).unlockedBlook;
		console.log(`Unlocked Blook: ${result}`);
		results[result] = results[result] ? results[result]+1 : 1;
	};
	let blooks = Object.keys(results);
	let amounts = Object.values(results);
	let s = `Results: `;
	for (let blook of blooks) {
		s += `\n x${amounts[blooks.indexOf(blook)]} ${blook}`
	};
	iF.contentWindow.alert(s);

};

(async () => {await openBoxes();})();


