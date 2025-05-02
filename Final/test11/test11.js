var text = "NaN";

//全域1
function test(){
    text = window.getSelection();
}

//全域2
function test2(){
    text = document.getSelection();
}

//區域1 fail
function test3(){
    alert(text);

    text = window.getElementById("box").getSelection();
}



// === === === === === === === ===

function changeText()
{
    document.getElementById( "result" ).textContent = text;
}


//測試
document.onkeydown = function( e ){
    //window.alert("按下案件");
    const k = e.key;
    //window.alert( k );
    //if ( k == "a" )  test();
    //if ( k == "a" )  test2();
    if ( k == "a" )  test3();
    if ( k == "a" )  changeText();
  }
  