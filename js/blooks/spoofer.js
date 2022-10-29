/* spoofer.js */
const ALL_BLOOKS = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find(x=>x.exports?.a?.toString().includes('"Rainbow Astronaut":')).exports.a.toString().split('"').filter((x, i) => i % 2 !== 0).filter(x=>!["Common", "Uncommon", "Rare", "Epic", "Legendary", "Chroma", "Mystical"].includes(x));
const allBlooks = ALL_BLOOKS.reduce((a,b)=> (a[b]=1,a),{});
const stateNode = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode

stateNode.setState({ blookData: allBlooks });
