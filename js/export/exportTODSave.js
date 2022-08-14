const iF = document.createElement("iframe");
iF.src = "about:blank";
iF.style = "display:none;"
document.body.appendChild(iF);
window.alert = iF.contentWindow.alert;
window.prompt = iF.contentWindow.prompt;

async function getSaves() {
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
function downloadURI(uri, name) {
	var link = document.createElement("a");

	link.setAttribute('download', name);
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	link.remove();
}

async function exportSaves() {
	const saves = await getSaves();
	navigator.clipboard.writeText(btoa(JSON.stringify(saves))).then(function() {
		alert("Copied Tower of Doom save data to clipboard!\n");
	}, function() {
		alert("Something went wrong and your data was not copied, downloading save file instead.")
		downloadURI("data:text/plain;base64,"+btoa(btoa(JSON.stringify(saves))))
	});
};
exportSaves();