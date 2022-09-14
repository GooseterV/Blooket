(() => {
  function reactHandler() {
    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
  }

  reactHandler().stateNode.setState({ isPro: true });

  const plusboxes = Array.from(document.getElementsByClassName('styles__plusOnly___2z_Jj-camelCase'));

  plusboxes.forEach(plusbox => {
    plusbox.remove();
  });
})();
