var t = localStorage.getItem('mode_bool');

function change_txt(){
    document.getElementById( 'txt' ).textContent = t;
    //window.alert( "test" );
};

btn.addEventListener( 'click' , () => {
    t = !t;
    localStorage.setItem('mode_bool', t );
    //window.alert( t );
    change_txt();
});

change_txt();