
var dark = false;

btn.addEventListener('click',function(){

    dark = !dark;
    if ( dark )
    {
        document.body.style.backgroundColor = "rgba(0,0,0)";    //背景變黑
        document.body.style.color = "rgba(255,255,255)";        //文字變白
    }
    else
    {
        document.body.style.backgroundColor = "rgba(255,255,255)";    //背景變黑
        document.body.style.color = "rgba(0,0,0)";        //文字變白
    }
    //改變背景色
    test();
    document.querySelector('.color').textContent = "turn";
    //更改文字
});

function test(){
    document.getElementById( "btn" ).style.color = "rgba(255,255,255)";
}



