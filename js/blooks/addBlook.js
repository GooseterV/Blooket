/* addBlook.js */

const iF = document.createElement("iframe");
iF.src = "about:blank";
iF.style = "display:none;"
document.body.appendChild(iF);
Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState(
  state => (
    {...state, blookData: (
      state.blookData[iF.contentWindow.prompt("What's the name of the blook? (must exist)")] = parseInt(iF.contentWindow.prompt("How many do you want?")), state.blookData
    )}
  )
)
