import {Product} from "./class/Product";

const product1 = new Product('Kamuolys', '20eu', '2023' );
console.log(product1.getProductProfile());
product1.addProductInfo(product1.getProductProfile());
