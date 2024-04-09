const db= require("../config/connection")
const {User,Product}=require("../models")
const cleanDB= require("./cleanDB")
const productData=require("./products.json")


db.once('open', async () => {
  await cleanDB('Product', 'plumbingstore');

  await Product.insertMany(productData);

  console.log('Products seeded!');
  process.exit(0);
});




