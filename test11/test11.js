var text = "";
function getActiveText(e)
{ 

// Sets text MSIE or Netscape active 
// text based on browser, puts text in form
text = ( document.getElementById( "box" ) ) ? document.selection.createRange().text : document.getSelection();
    //document.theform.text.value = text;
    changeText();
    return true;
}

document.onmouseup = getActiveText;
if (!document) document.captureEvents(Event.MOUSEUP);

// === === === === === === === ===

function changeText()
{
    //window.alert( "tt" );
    document.getElementById( "result" ).textContent = text;
}

function showText()
{
    window.alert( text );
}

//測試
document.onkeydown = function( e ){
    //window.alert("按下案件");
    const k = e.key;
    //window.alert( k );
    if ( k == "a" )  changeText();
  }
  