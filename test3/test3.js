//var str = "tasd";
var file1 = __dirname + "/test3.txt";
var file2 = "/content.txt"
var type = 'utf-8';
var fs = require('fs');
var str1 = "check scanner input";
var str2 = "check append";

check( file1 );
load( file1 );
save( file1 , str1 );
append( file1 , str2 );

function check( filepath ){
    if (!fs.existsSync(filepath)) {
        console.error("檔案不存在:", filepath);
    }
    else console.log( "exist" );
}

function load( filepath ){
    //讀取
    fs.readFile( filepath , 
        function(err, data){
            //若有錯誤就列印訊息
            if (err) {
                console.error(err);
            } 
            else 
            {
                //將檔案內容輸入
                console.log(data.toString());
            }
        }
    );
}

function save( filepath ,  input ){
    fs.writeFile( filepath , input , function(err){
        if (err) {
            console.error(err)
        }
    });
}

function append( filepath , input ){
    fs.appendFile( filepath , input , function(err){
        if (err) {
            console.error(err)
        }
    });
}


/*
讀取檔案 fs.readFile
寫入檔案 fs.writeFile
附加檔案內容 fs.appendFile
更名檔案 fs.rename
刪除檔案 fs.unlink
*/
