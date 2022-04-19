const quickzID = document.URL.split("decks/")[1];
async function getQuickzDeck(id) {
	const set = await fetch(`https://quickz.org/api/decks/${quickzID}`);
	const data = await set.json();
	return data;
};

function downloadURI(uri, name) {
	let link = document.createElement("a");

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

async function exportQuickzSet(id) {
	const set = (await getQuickzDeck(id));
	navigator.clipboard.writeText(b64encode(JSON.stringify(set))).then(function() {
		alert("Copied set data to clipboard!\n");
	}, function() {
		alert("Something went wrong and the set was not copied, downloading data file instead.")
		downloadURI("data:text/plain;text,"+b64encode(JSON.stringify(set)))
	});
};
exportQuickzSet(quickzID);