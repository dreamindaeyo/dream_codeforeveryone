// console.log("bai tap ve nha")
/* 1. giai phuong trinh bac 2 voi 3 doi so a,b,c
2. tinh chi so BMI cua nguoi co chieu cao x cm va can nang y kg
3. kiem tra xem 1 so co phai la so le, so chinh phuong, so nguyen to, so hoan hao hay ko? */

console.log("bai tap ve nha, bai 1");
/*
phuong trinh bac 2 voi ba doi so a b c
am^2 + bm + c = 0  */
const a = 2;
const b = 3;
const c = 1;
let m = 0;
m += 1;
console.log(a * m ** 2 + b * m + c);

console.log("bai tap ve nha, bai 2");
/* cong thuc BMI = cân nặng (kg) / chiều cao² (m)
vi du mot nguoi cao x =1.80m nang y =70kg*/
let x = 1.8;
let y = 70;
console.log(y / (x * x));

console.log("bai tap ve nha, bai 3");
/* a) số lẻ thì chia cho 2 có số dư, 
b) số chính phương là bình phương của 1 số tự nhiên, 
c) số nguyên tố chỉ chia hết cho 1 và chính nó,
d) số hoàn hảo là số có tổng ước nguyên dương bằng chính nó  */

console.log("btvn 3a"); // ví dụ lấy số k, kiểm tra số k có phải số lẻ không
let k;
k = 9; // gán giá trị k
j = k % 2; // j là số dư khi lấy k chia cho 2
console.log(j != 0); // so sánh số dư j với 0, kết quả ra 'true' thì k là số chẵn, 'false' thì k là số lẻ

console.log("btvn 3b"); //ví dụ lấy số n, kiểm tra số n có phải số chính phương không
function kiemTraSoTuNhien(n) {
  if (n <= 0) {
    return false;
  }
  if (n % 1 !== 0) {
    return false;
  }
  return true;
}
let n;
n = 64; // gán giá trị n
r = Math.sqrt(n); // r là căn bậc 2 của n, kiểm tra xem r có phải số tự nhiên không
console.log(kiemTraSoTuNhien(r));

console.log("btvn 3c"); //ví dụ lấy số s, kiểm tra số s có phải số nguyên tố không
function kiemTraSoNguyenTo(s) {
  if (s <= 1) {
    return false;
  }
  for (let i = 2; i < s; i++) {
    if (s % i === 0) {
      return false;
    }
  }
  return true;
}
let s;
s = 23; // gán giá trị s
console.log(kiemTraSoNguyenTo(s));

console.log("btvn 3d"); //ví dụ lấy g, kiểm tra g có phải số hoàn hảo hay ko
// function kiemTraSoHoanHao(g){
//     for(t=1; t<=g/2;t++){
//         if(g%t == 0) 
//             sum+=t;
//             if(sum ==g) {return true;}
//     }
//     return false;
// }
// let g;
// g = 28; //  giá trị g
// console.log(kiemTraSoHoanHao(g));