function getApi( url )
{
    fetch(url)
    .then((response) => {
        //console.log(response); 
        consolePromise( response.text() );        
        var t = response;
        return t;
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    });
};

function consolePromise( prompise )
{
    prompise.then( (txt) => {
        //console.log();
        console.log( txt );
    });
}



var url = "https://tw.linovelib.com/novel/4480.html";
getApi(url);

//console.log( getApi(url) );

export function apiget( url  ){
    return getApi( url );
}



//test2

async function getApi2( url ){
    var a = await fetch( url );
    var b = await a.text();
    //console.log( b );
    return b;
}

