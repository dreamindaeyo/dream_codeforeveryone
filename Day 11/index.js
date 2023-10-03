const product = {
  id: "1",
  name: "san pham A",
  price: 200,
};
localStorage.setItem("product", JSON.stringify(product));
console.log(JSON.parse(localStorage.getItem("product")));