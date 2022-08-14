const quizID= document.URL.split("/")[5];

async function getQuizizzSet(id) {
	const set = await fetch(`https://quizizz.com/_api/main/quiz/${quizID}`);
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

async function exportQuizizzSet(id) {
	const set = (await getQuizizzSet(id));
	navigator.clipboard.writeText(b64encode(JSON.stringify(set))).then(function() {
		alert("Copied set data to clipboard!\n");
	}, function() {
		alert("Something went wrong and the quiz was not copied, downloading data file instead.")
		downloadURI("data:text/plain;base64,"+b64encode(b64encode(JSON.stringify(set))))
	});
};
exportQuizizzSet(quizID);