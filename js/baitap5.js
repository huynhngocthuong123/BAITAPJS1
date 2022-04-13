/**
 * khối 1: input
 * + num1 (có 2 chữ số)
 * 
 * khối 2
 * + soHangChuc = math.floor(num1 / 10)
 * + soHangDonVi = num1 % 10
 * 
 * + tong = soHangChuc + soHangDonVi
 * khối 3:
 * + tong
 * 
 */

// B1 
var num1 = 67;
var soHangChuc = 0;
var soHangDonVi = 0;
var tong = 0;

// B2 
soHangChuc = Math.floor( num1 / 10);
soHangDonVi = num1 % 10

tong = soHangChuc + soHangDonVi

// B3 
console.log("Số nhập: " + num1)
console.log("Tổng là: " + tong)

