//Bai 1
let inputDiemVatLy;
let inputDiemHoaHoc;
let inputDiemSinhHoc;
inputDiemVatLy=prompt("Enter Physics grade: ");
inputDiemHoaHoc=prompt("Enter Chemistry grade: ");
inputDiemSinhHoc=prompt("Enter Biology grade: ");
let diemVatLy=parseInt(inputDiemVatLy);
let diemHoaHoc=parseInt(inputDiemHoaHoc);
let diemSinhHoc=parseInt(inputDiemSinhHoc);
let total=(diemHoaHoc+diemSinhHoc+diemVatLy);
document.write("Total="+total);
let medium=total/3;
document.write("Medium="+medium);
//Bai 2
let inputDoC;
inputDoC=prompt("Enter Celsius:");
let doC=parseInt(inputDoC);
let doF=(doC/5)*9+32;
document.write("Fahrenheit="+doF);
//Bai 3
let inputradius;
inputradius=prompt("Enter radius: ");
let radius=parseInt(inputradius);
let acreage=(3.14*radius*radius);
document.write("Acreage="+acreage);
//Bai 4
let diameter=2*radius;
let perimeter=(3.14*diameter);
document.write("Perimeter="+perimeter);

