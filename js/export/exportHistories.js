const iF = document.createElement("iframe");
iF.src = "about:blank";
iF.style = "display:none;"
document.body.appendChild(iF);
window.alert = iF.contentWindow.alert;
window.prompt = iF.contentWindow.prompt;

async function getInfo() {
	const response = await fetch('https://api.blooket.com/api/users', {
		headers: {
			"referer": "https://www.blooket.com/",
			"content-type": "application/json"
		},
		credentials:"include"
	});
	const data = await response.json();
	return data.histories;
};
function downloadURI(uri, name) {
	var link = document.createElement("a");

	link.setAttribute('download', name);
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	link.remove();
}

async function exportInfo() {
	const histories = (await getInfo()).histories;
	navigator.clipboard.writeText(btoa(JSON.stringify(histories))).then(function() {
		alert("Copied your blook data to clipboard!\n");
	}, function() {
		alert("Something went wrong and your data was not copied, downloading data file instead.")
		downloadURI("data:text/plain;base64,"+btoa(btoa(JSON.stringify(histories))))
	});
};
exportInfo();