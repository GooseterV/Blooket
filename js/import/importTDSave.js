const iF = document.createElement("iframe");
iF.src = "about:blank";
iF.style = "display:none;"
document.body.appendChild(iF);

async function getSaves() {
	const response = await fetch('https://api.blooket.com/api/defenses/byuser', {
		headers: {
			"referer": "https://www.blooket.com/",
			"content-type": "application/json"
		},
		credentials:"include"
	});
	const data = await response.json();
	return data;
};

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
            }) 
        } catch (err) {
            console.log(err)
            reject(false)
        }
    })
const BLOOKET_BUILD_KEY = (await getBuildConfig()).buildId;
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

async function putSave(saveData) {
	const response = await fetch("https://api.blooket.com/api/defenses/save", {
		headers: {
			"referer": "https://www.blooket.com/",
			"content-type": "text/plain",
			"X-blooket-build":BLOOKET_BUILD_KEY
		},
		body: await encodeValues(saveData, BLOOKET_BUILD_KEY),
		credentials:"include",
		mode: "cors",
		method:"PUT"
	});
};
async function createSave(saveData) {
	const response = await fetch("https://api.blooket.com/api/defenses", {
		headers: {
			"referer": "https://www.blooket.com/",
			"content-type": "text/plain",
			"X-blooket-build":BLOOKET_BUILD_KEY
		},
		body: await encodeValues(saveData, BLOOKET_BUILD_KEY),
		credentials:"include",
		mode: "cors",
		method:"POST"
	});
}
const saves = JSON.parse(atob(iF.contentWindow.prompt("Base64 encoded string of save (copied from exportTDSave.js)")));
const savesArray = saves["savesArray"];

for (let save of savesArray) {
	const yoursaves = await getSaves();
	const indexof = savesArray.indexOf(save);
	if (save !== null && yoursaves.savesArray[indexof] !== null) {
		save.id = yoursaves.savesArray[indexof]._id;
		delete save._id;
		delete save.setId;
		delete save.map;
		delete save.name;
		//save.map = yoursaves.savesArray[indexof].map;
		console.log(save)
		await putSave(save);
	} else if (save === null || yoursaves.savesArray[indexof] !== null ) {
		//
	};
};

