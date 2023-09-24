// {
//   let y = 20;
//   {
//     let x = 10;
//     console.log(y)
//     console.log(x)
//   }
//   console.log(y);
// }

// let thoiTiet = "dep"
// let coTien = true
// if(thoiTiet == "dep"){
//     console.log("di luon");
// }
// if(thoiTiet != " dep"){
//     console.log("di xem phim")
// }

// if(thoiTiet == "dep"){
//     console.log("di luon");
// } 
// else{
//     console.log("di bar");
// }

// if(thoiTiet == "dep" && !coTien){
//     console.log("di luon");
// } 
// else if (thoiTiet != "dep" && coTien){
//     console.log("di bar");
// }
// else{
//     console.log("o nha");
// }

if(2){
    console.log(2);
} /*truthy and falsy : trong cau dieu kien ma su dung dang khac boolean thi tu chuyen sang dang boolean theo tung dk
falsy khi: 
1. false
2. 0
3. -0
4. ""
5. null
6. undefine
7. NaN
con lai la truthy
*/

let header = document.getElementById('header')
console.dir(item=header);
header.textContent = "hello"

/* từ 1 đến 10 tìm các số chia hết cho 2
từ 1 đến 100 tìm các số chẵn và số lẻ
nhập vào 1 số kiểm tra xem số đó có phải số chính phương hay không
viết công thức tính giai thừa */


//số chẵn
for(i=1;i<=10;i++){
    if(i%2===0){console.log(i)}
}

//số chẵn, lẻ
for(j=1;j<=100;j++){
    if(j%2===0){console.log(j)}
    else {console.log("số lẻ:",j)}
}

//số chính phương = bình phương số tự nhiên
let m =64; //nhập 1 số bất kỳ, ví dụ 64
p= Math.sqrt(m) // lấy căn >> bài toán thành ktra p có phải số tự nhiên ko?
function soChinhPhuong(p){
    if(p<0) // số tự nhiên 0,1,2...
    {return false}
    if(p%1 !==0) // và chia cho 1 không dư
    {return false}
    else {return true};
}
console.log(soChinhPhuong(p))

//giai thừa
let n =5;
for(k=1;k<=n;k++){
    console.log() 
}

