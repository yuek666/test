async function t1() {
    console.log( "test_run" );
    const response = await fetch('https://hidden-union-334f.yuek.workers.dev/');
    const data = await response.text(); // 解析 JSON
    console.log(data);
}

t1();

//document.getElementById( "btn" ).addEventListener( "click" , t1 );