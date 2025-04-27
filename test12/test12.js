/* Written by Amit Agarwal */
/* web: ctrlq.org          */

var url_organal = "https://translate.google.com.tw/?hl=zh-TW&sl=ja&tl=zh-TW&op=translate";
var url_test = "https://translate.google.com.tw/?hl=zh-TW&sl=ja&tl=zh-TW&text=%E3%82%8F%E3%81%9F%E3%81%97&op=translate";
var url_test = "https://tw.linovelib.com/novel/4480.html";


async function getApi( url ){
    var a = await fetch( url );
    var b = await a.text();
    //console.log( b );
    return b;
}

async function con(url) {
    var t = await getApi( url );
    console.log( t );
}



import * as deepl from 'deepl-node';

const authKey = "f63c02c5-f056-..."; // Replace with your key
const translator = new deepl.Translator(authKey);

(async () => {
    const result = await translator.translateText('Hello, world!', null, 'fr');
    console.log(result.text); // Bonjour, le monde !
})();