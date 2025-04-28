/* Written by Amit Agarwal */
/* web: ctrlq.org          */

/*  google translate url
    var url_organal = "https://translate.google.com.tw/?hl=zh-TW&sl=ja&tl=zh-TW&op=translate";
    var url_test = "https://translate.google.com.tw/?hl=zh-TW&sl=ja&tl=zh-TW&text=%E3%82%8F%E3%81%9F%E3%81%97&op=translate";
    var url_test2 = "https://translate.google.com.tw/?hl=zh-TW&sl=zh-TW&tl=en&text=你好世界&op=translate"
*/
var url1 = "https://mazii.net/zh-TW/search/word/jatw/流石";



var file = __dirname + "/test12.html";
getApi( url1 );


async function getApi( url ){
    var a = await fetch( url );
    var b = await a.text();
    //save( file , b );    
    getVal( b );
}

var fs = require('fs');
function save( filepath ,  input ){
    fs.writeFile( filepath , input , function(err){
        if (err) {
            console.error(err)
        }
    });
}

async function getVal( promise ) {    
    var txt = await promise;
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const $ = require("jquery")(new JSDOM(txt).window); // 創建虛擬 DOM
    
    var t = $("title:first").text();
    console.log(t);
}









/*
<span class="ryNqvb" 
    jsname="W297wb" 
        jsaction="click:PDNqTc,GFf3ac,qlVvte;contextmenu:Nqw7Te,QP7LD; mouseout:Nqw7Te; mouseover:PDNqTc,c2aHje"
            >棉布</span>
*/