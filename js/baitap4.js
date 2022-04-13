/**
 * khối 1: input
 * + chieuRong
 * + chieuDai
 * 
 * khối 2:
 * + dienTich = chieuRong * chieuDai
 * + chuVi = ( chieuRong + chieuDai) * 2
 * 
 * khối 3:
 * + dienTich
 * + chuVi
 * 
 */

// B1 
var chieuRong = 10;
var chieuDai = 10;
var dienTich = 0;
var chuVi = 0;

// B2 
dienTich = chieuDai * chieuRong;
chuVi = ( chieuDai + chieuRong ) * 2;

// B3
console.log("chiều dài HCN: " + chieuDai);
console.log("Chiều rộng HCN: " + chieuRong);
console.log("Diện tích hình chữ nhật : " + dienTich + " m2");
console.log("Chu vi hình chữ nhật : " + chuVi + " m");