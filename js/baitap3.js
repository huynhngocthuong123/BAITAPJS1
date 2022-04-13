/**
 * khối 1: input
 * + USD nhập quy đổi
 * + VND hiện hành
 * 
 * khối 2: 
 * quyDoi = USD*VND
 * 
 * khối 3:
 * + quyDoi
 */


// B1 
var USD = 10;
var VND = 23500;
var quyDoi = 0;

// B2 
quyDoi = USD * VND;

// B3 
console.log("Số USD quy đổi: " + USD + " USD");
console.log("Số tiền quy đổi : " + quyDoi.toLocaleString() + " VND");
