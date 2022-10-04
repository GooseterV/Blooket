/* addBlook.js */

const iF = document.createElement("iframe");
iF.src = "about:blank";
iF.style = "display:none;"
document.body.appendChild(iF);
const blookName = iF.contentWindow.prompt("What's the name of the blook? (must exist)");
const blookAmount =  iF.contentWindow.prompt("How many do you want?");
Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.blookData[blookName] = parseInt(blookAmount)
Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.forceUpdate()
