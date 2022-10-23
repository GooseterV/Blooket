const axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.put).exports.a;
axios.get("https://dashboard.blooket.com/api/users/verify-session").then(d=>{
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    n.remove()
    try {
        axios.put("https://play.blooket.com/api/users/add-rewards",{name:d.data.name,addedTokens:500,addedXp:300});
        alert('Added Rewards!')
    } catch (err) {
        alert('An error occurred!')
        console.log('err ', err)
    }
});
