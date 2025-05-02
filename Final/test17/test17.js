var tv = false;
var t = document.querySelector( "#t1");
t.checked = false;



t.addEventListener( 'click' , (e) =>{
    tv = !tv;
    alert( tv );
}); 