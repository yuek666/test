
// test1 單一變數 / 函式 匯入
import { test1 } from "./test7_1.js";
import { test2 } from "./test7_1.js";
import { test3 } from "./test7_1.js";
import { test4 } from "./test7_1.js"

test1();
console.log( test2() );
console.log( test3 );
test4();

console.log();

// test2 多模塊載入 
import * as t2 from "./test7_2.js";

t2.test21();
console.log( t2.test22() );
console.log( t2.test23 );
