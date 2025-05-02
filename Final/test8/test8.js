var t = localStorage.getItem('tt');


/*  測試瀏覽器支援與否
if (typeof(Storage) !== "undefined") {
    window.alert("Browser supports Web Storage API");
} else {
    window.alert("Web Storage not supported");
}
*/

show.addEventListener( 'click' , function(){
    window.alert( t );
});

one.addEventListener('click',function(){
    localStorage.setItem('tt', 1 );
    t = 1;
});

two.addEventListener('click',function(){
    localStorage.setItem('tt', 2 );
    t = 2;
});

/*
儲存資料
localStorage.setItem( ID , VAR );

取得資料
localStorage.getItem( ID );

刪除資料
localStorage.removeItem( ID );

清空資料
localStorage.clear();
*/

