const addBlook = async () => {

};
const extendBlookInfo = async () => {
	

};
const spoofBlooks = async () => {

};
const blookViewer = async () => {

};
const exportHistories =  async () => {

};
const exportStats = async () => {

};
const exportBlooks = async () => {

};

const extendSettings = async () => {

};
const extendStats = async () => {

};

const f = {
	'blookViewer':{
		'f':blookViewer,
		'e':document.getElementById('viewBlooks')
	},
	'infoExtender':{
		'f':extendBlookInfo,
		'e':document.getElementById('extendInfo')
	},
	'spoofer':{
		'f':spoofBlooks,
		'e':document.getElementById('spoofBlooks')
	},
	'blookAdder':{
		'f':addBlook,
		'e':document.getElementById('addBlook')
	},
	'exportHistories':{
		'f':exportHistories,
		'e':document.getElementById('exportHistories'),
	},
	'exportBlooks':{
		'f':exportBlooks,
		'e':document.getElementById('exportBlooks'),
	},
	'exportStats':{
		'f':exportStats,
		'e':document.getElementById('exportStats'),
	},
	'extendStats':{
		'f':extendStats,
		'e':document.getElementById('extendStats'),
	},
	'extendSettings':{
		'f':extendSettings,
		'e':document.getElementById('extendSettings'),
	},
};

Object.keys(f).forEach( async (b) => {f[b].e.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({
		active: true,
		currentWindow: true
	});

	chrome.scripting.executeScript({
		target: {
			tabId: tab.id
		},
		function: async ()=> {
			await (f[b].f)();
			console.log()
		},
	});
} ); } );

