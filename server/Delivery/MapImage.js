function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createColorList(k) {
    colorlist = [];
    for (var i = 0; i < k; i++) {
        colorlist.push(getRandomColor())
    }
    return colorlist;
}
module.exports = {
    //The function receive all of deliveries and return url of map with their address color according thier cluster for homePage
    DownloadHomePageMap:function (deliveryList, k)
    {
    const colorlist = createColorList(k);
    const key = "s6JPBRnNQ8Gg1sG791Mt775kHAnqARmT";
    let pins = "";

    deliveryList.forEach(function (delivery, i) {
       // pins += delivery + "|marker-" + colorlist[i] + "||";
       pins += delivery[0][1] + "|marker-" + colorlist[delivery[1][0]] + "||";
    });
    const url = "https://www.mapquestapi.com/staticmap/v5/map" +
        "?key=" + key +
        "&locations=" + pins +
        "&size=400,400@2x";
    return url;
},
DownloadMap:function (deliveryList)
{
const colorDone = getRandomColor();
const colorNotDone = getRandomColor();
const key = "s6JPBRnNQ8Gg1sG791Mt775kHAnqARmT";
let pins = "";

deliveryList.forEach(function (delivery, i) {
    if(delivery[1])
        pins += delivery[0] + "|marker-" + colorDone + "||";
    else
        pins += delivery[0] + "|marker-" + colorNotDone + "||";   
});
const url = "https://www.mapquestapi.com/staticmap/v5/map" +
    "?key=" + key +
    "&locations=" + pins +
    "&size=400,400@2x";
return url;

}}
//console.log(DownloadHomePageMap(["דוד אלעזר 36, יבנה", "הלויתן 20, יבנה"], 2));
/*
//https://www.mapquestapi.com/staticmap/v5/map?key=s6JPBRnNQ8Gg1sG791Mt775kHAnqARmT&locations=
דוד אלעזר 36, יבנה|marker-A5D033||הלויתן 20, יבנה|marker-524CA5||&size=400,400@2x*/