document.onkeydown = function( e ){
  //window.alert("按下案件");
  const k = e.key;
  window.alert( k );
  if ( k == "KeyW" )  window.alert("asd");
}

/*
keydown：按下按键

keyup：释放按键

keypress：摁下摁键，并且产生一个字符时发生

*/