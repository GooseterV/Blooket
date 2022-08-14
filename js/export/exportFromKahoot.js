const kahootID = document.URL.split("details/")[1];
async function getKahootSet(id) {
	const set = await fetch(`https://create.kahoot.it/rest/kahoots/${id}/card/?includeKahoot=true`);
	const data = await set.json();
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

const b64encode = function(str) { 
	return btoa(unescape(encodeURIComponent(str))); 
};
const b64decode = function(str) { 
	return decodeURIComponent(escape(atob(str))); 
};

async function exportKahootSet(id) {
	const set = (await getKahootSet(id));
	navigator.clipboard.writeText(b64encode(JSON.stringify(set))).then(function() {
		alert("Copied set data to clipboard!\n");
	}, function() {
		alert("Something went wrong and the set was not copied, downloading data file instead.")
		downloadURI("data:text/plain;base64,"+b64encode(b64encode(JSON.stringify(set))))
	});
};
exportKahootSet(kahootID);