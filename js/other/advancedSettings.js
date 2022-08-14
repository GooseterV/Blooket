const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

async function getSessionDetails() {
	const response = await fetch('https://api.blooket.com/api/users/verify-session', {
		method: "GET",
		headers: {
			"accept": "application/json, text/plain, */*",
			"accept-language": "en-US,en;q=0.9,ru;q=0.8",
		},
		credentials: "include"
	});
	const data = await response.json();

	return data;
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

async function getInfo(blooketName) {
	const response = await fetch('https://api.blooket.com/api/users?name=' + blooketName, {
		headers: {
			"referer": "https://www.blooket.com/",
			"content-type": "application/json"
		},
		credentials:"include"
	});
	const data = await response.json();
	return data;
};
async function formatInfoString(key, value) {
	return `<div class="styles__text___1x37n-camelCase"><b>${key}:</b> ${value}</div>`;
};

async function getCafeSaves() {
	const response = await fetch('https://api.blooket.com/api/cafes/byuser', {
		headers: {
			"referer": "https://www.blooket.com/",
			"content-type": "application/json"
		},
		credentials:"include"
	});
	const data = await response.json();
	return data;
};

async function getTDSaves() {
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

async function getHistories() {
	return (await getInfo()).histories;
};

async function getBlooks() {
	const response = await fetch('https://api.blooket.com/api/users/blooks', {
		headers: {
			"referer": "https://www.blooket.com/",
			"content-type": "application/json"
		},
		credentials:"include"
	});
	const data = await response.json();
	return data;
};


async function getTODSaves() {
	const response = await fetch('https://api.blooket.com/api/towers/byuser', {
		headers: {
			"referer": "https://www.blooket.com/",
			"content-type": "application/json"
		},
		credentials:"include"
	});
	const data = await response.json();
	return data;
};

async function getDashboardInfo() {
	const response = await fetch('https://api.blooket.com/api/users/dashboard', {
		headers: {
			"referer": "https://www.blooket.com/",
			"content-type": "application/json"
		},
		credentials:"include"
	});
	const data = await response.json();
	return data;
};

async function getSets() {
	const response = await fetch('https://api.blooket.com/api/users/allsets', {
		headers: {
			"referer": "https://www.blooket.com/",
			"content-type": "application/json"
		},
		credentials:"include"
	});
	const data = await response.json();
	return data;
};


async function download(filename, text) {
	const element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
};

async function exportData() {
	setTimeout(function() { alert("Gathering account info, please be patient..."); }, 1);
	await sleep(750);
	let toExport = {
		"Info":await getInfo(await getSessionName()),
		"Blooks":await getBlooks(),
		"Histories":await getHistories(),
		"Saves":{
			"Tower of Doom":await getTODSaves(),
			"Tower Defense":await getTDSaves(),
			"Cafe":await getCafeSaves()
		},
		"Session Data":await getSessionDetails(),
		"Dashboard": await getDashboardInfo(),
		"Sets": await getSets()

	};
	setTimeout(function() { alert("Gathered account info, exporting..."); }, 750);
	await sleep(750);
	alert("Downloading account data as JSON...");
	await download("account.json", JSON.stringify(toExport));

};
async function extendSettings() {
	const uInfo = await getInfo(await getSessionName());
	const mainbox = document.getElementsByClassName("styles__mainContainer___4TLvi-camelCase")[0];
	const infobox = document.getElementsByClassName("styles__infoContainer___2uI-S-camelCase")[0];
	const exportBox = document.createElement("div");
	const exportbutton = document.createElement("a");
	const o = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
	infobox.innerHTML += await formatInfoString("Last Token Date", new Date(uInfo.lastTokenDay).toLocaleDateString("en", o));
	infobox.innerHTML += await formatInfoString("Id", uInfo._id);
	exportBox.className = "styles__infoContainer___2uI-S-camelCase";
	exportBox.innerHTML += `
	<div class="styles__headerRow___1tdPa-camelCase">
		<i class="fa fa-file-export styles__headerIcon___1ykdN-camelCase" aria-hidden="true"></i>
		<div class="styles__header___WE435-camelCase">Export</div>
	</div>`
	exportbutton.className = "styles__upgradeButton___3UQMv-camelCase";
	exportbutton.addEventListener("click", exportData);
	exportbutton.style = "background-color:red !important; font-size:15px;";
	exportbutton.innerText = "EXPORT ACCOUNT!";
	exportBox.appendChild(exportbutton);
	mainbox.appendChild(exportBox);
	



};

extendSettings();