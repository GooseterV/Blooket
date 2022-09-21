const axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.put).exports.a;
axios.get("https://api.blooket.com/api/users/verify-session").then(d=>{
    axios.put("https://api.blooket.com/api/users/add-rewards",{name:d.data.name,addedTokens:500,addedXp:300});
});
