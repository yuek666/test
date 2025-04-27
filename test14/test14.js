const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const $ = require("jquery")(new JSDOM(`<!DOCTYPE html><p>測試內容</p>`).window); // 創建虛擬 DOM
// 
$("p").click(function () {
    //$(this).hide();
    var t1 = $(this).text();
    //console.log(t1);
    alert( t1 );
});

var t = $("p:first").text();
console.log(t);