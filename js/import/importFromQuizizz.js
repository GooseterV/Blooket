const iF = document.createElement("iframe");
iF.src = "about:blank";
iF.style = "display:none;"
document.body.appendChild(iF);

const b64encode = function(str) { 
	return btoa(unescape(encodeURIComponent(str))); 
};
const b64decode = function(str) { 
	return decodeURIComponent(escape(atob(str))); 
};

const setData = JSON.parse(b64decode(iF.contentWindow.prompt("What is your quizizz quiz data? (Exported from exportFromQuizizz.js)"))).data.quiz;

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

localStorage.washere = (await getSessionName());

const createSet = async function(uploadPayload){
	return await (await fetch("https://api.blooket.com/api/games", {
		"headers": {
			"referer": "https://www.blooket.com/",
			"content-type": "application/json",
			"x-blooket-build":BLOOKET_BUILD_KEY
		},
		credentials:"include",
		method: "POST",
		body: await encodeValues(uploadPayload, BLOOKET_BUILD_KEY)
	})).json();
};

async function addQuestionToSet(questionData) {
	const res = await fetch("https://api.blooket.com/api/games/addquestion", {
		"headers": {
			"referer": "https://www.blooket.com/",
			"content-type": "application/json",
			"x-blooket-build":BLOOKET_BUILD_KEY
		},
		method: "PUT",
		credentials:"include",
		body:await encodeValues(questionData, BLOOKET_BUILD_KEY)
	});
	return (await res.json());
};

async function importFromQuizizz(setData) {
	const blooketSetPayload = {
		"title":setData.info.name,
		"author":localStorage.washere,
		"desc":`${setData.info.name} exported from quizizz.`,
		"coverImage":{
			"url":setData.info.image
		},
		"private":false
	};
	const newSet = await createSet(blooketSetPayload);
	const quizQuestions = setData.info.questions;
	for (let question of quizQuestions) {
		const answers = [].concat(...question.structure.options).map(({text})=>text);
		const correctAnswers = [].concat([].concat(...question.structure.options).filter(choice => question.structure.options.indexOf(choice) == question.structure.answer)).map(({text})=>text);
		console.log(correctAnswers)
		const questionPayload = {
			"gameId": newSet._id,
			"question": question.structure.query.text,
			"correctAnswers": correctAnswers,
			"answers": answers,
			"timeLimit": question.time/1000,
			"random": true,
			"image": {
				"url": question.structure.query.media.concat([{type:"image",url:""}])[0].url
			}
		};
		g = await addQuestionToSet(questionPayload);
		console.log(g)
	};
};

importFromQuizizz(setData);