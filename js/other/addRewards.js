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
	const response = await fetch('https://api.blooket.com/api/users/verify-session', {
		method: "GET",
		headers: {
			"accept": "application/json, text/plain, */*",
			"accept-language": "en-US,en;q=0.9,ru;q=0.8",
		},
		credentials: "include"
	});
	const data = await response.json();

	return data.name;
};

async function addTokens() {
	const name = await getSessionName();
	const res = await fetch("https://api.blooket.com/api/users/add-rewards", {
		headers: {
			"referer": "https://www.blooket.com/",
			"content-type": "application/json",
			"x-blooket-build":BLOOKET_BUILD_KEY
		}, 
		body:await encodeValues({
			addedTokens:500,
			addedXp:300,
			name:name
		}),
		method:"PUT",
		credentials:"include"
	});
	return res; 
};

addTokens();
