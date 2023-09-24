const myStudent = ["Nga", "Hong", "Huong"];
let products = ["product1", "product2", "product3"];
/*
Array: la mang, su dung de liet ke. Cach khai bao : su dung [] 
trong mang cos xep theo index 0,1,2,...*/

let emptyArr = [];
// console.log(typeof emptyArr);
console.log(myStudent.length); //do do dai cua mang
const mixArr = [1,2,4,-1,"dream", null, undefined, {name: "Huong"}]; // cac phan tu trong mang co the khac kieu du lieu
console.log(myStudent[2]); //goi theo index

let productList = ["iphone pro 15", "macbooka air 14"];
let myCart = productList
// myCart.push("airpod pro 3");
console.log(myCart)
console.log(productList) //ca 2 mang deu bi push them gia tri : 2 bien cung tro vao 1 o nho > khi thay doi 1 mang mang kia cung thay doi
// console.log("productsList: ", productList);

let myCart2 = [...productList] // copy mang ma ko bi them ca 2 mang >> tim them cac cach khac
myCart2.push("iwatch 4");
console.log(myCart2);
console.log(productList);

const myInfo = {
    name: "Dream",
    age: 26,
    address: "Hanoi",
};
let info = [myInfo];
// console.log(info.length);// chuyen obj thanh arr de tinh length ?? ket qua chua dung lam check lai


const users = {
    userName: "chuatecuanhungchiecsung",
    password: "thatsuluon",
};

console.log(users.userName);
console.log(users["userName"]); //goi bang 2 cach deu dung

const kusers = [{
    userName: "phuthuyhtml",
    password: "cssnua",
},
{
    userName: "habasongset",
    password: "quanchuabistro",
}]

function sum(a,b) {
    return a+b ;
}
console.log(sum(1,3));

function hello(name){
    console.log("xin chao", name, "chuc ban mot ngay tot lanh");
    return;
}
hello("dream");

const sum2 = (a,b) => a + b ; //arrow function : 1 dong ngan thoi
console.log(sum2(3,4))

//BTVN
function tongSoNguyenTo(a,b){
    // kiem tra bat buoc a,b la so nguyen duong, va a phai nho hon b
    // tinh tong cac so nguyent to trong khoang tu a den b (tinh ca a,b neu a,b la so nguyen to)
}


/*1. cho array 1,2,4,5,6 them so 3 vao sau vi tri so 2
2. cho array 1~8 tim phuong thuc array.find vaf array.filter de tim so 8
3. tao 1 function tinsh tong 3 so voi so thu 3 co the tuy dien hoac khong (dung parameters)
4. in cac so trong array dung vong for, tinh tong cac so do*/

const array1= [1,2,4,5,6]
array1.splice(2,0,3)
console.log(array1)

const array2 = [1,2,3,4,5,6,7,8]
const found = array2.find((value) => value>7);
console.log(found)
const filter = array2.filter((value) => value>7);
console.log(filter)

function tong3So(a,b,c=0){
    return(a+b+c);
}
console.log(tong3So(1,2));
console.log(tong3So(1,2,5));

let total =0;
for (let i=1; i<=10; i++){
    console.log ('print', i);
    total= total+i;
    console.log('tong', total);
}
