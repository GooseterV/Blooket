(() => {
	function reactHandler() {
		return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
	};
	reactHandler().stateNode.setState({ creatingFolder: true });
})();
