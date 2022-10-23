const iF = document.createElement("iframe");
iF.src = "about:blank";
iF.style = "display:none;"
document.body.appendChild(iF);

async function getInfo(blooketName) {
	const response = await fetch('https://dashboard.blooket.com/api/users?name=' + blooketName, {
		headers: {
			"referer": "https://www.blooket.com/",
			"content-type": "application/json"
		},
		credentials:"include"
	});
	const data = await response.json();
	return data;
};


async function viewTokens() {
	const name = iF.contentWindow.prompt("Username of player?");
	if (name) {
		iF.contentWindow.alert(`${name} currently has ${(await getInfo(name)).tokens} spendable tokens.`);
	};
};

viewTokens();
