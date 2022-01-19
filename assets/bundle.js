async function copyScriptToClipboard(scripturl) {
	const scriptData = await (await fetch(scripturl)).text();
	navigator.clipboard.writeText(scriptData).then(function () {
		alert("Copied script to clipboard.");
	}, function (err) {
		alert('Error copying script.');
	});
};