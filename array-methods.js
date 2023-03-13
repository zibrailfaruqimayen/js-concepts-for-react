const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7200, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "ray  ", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];
const brand = products.map((product) => product.brand);
// console.log(brand);
const price = products.map((product) => product.price);
// console.log(brand);

products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.color));
