var text = "NaN";

function test(){
    text = window.getSelection();
    //lert( text );
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
    if ( k == "a" )  test();
    if ( k == "a" )  changeText();
  }
  