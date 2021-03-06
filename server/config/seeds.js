require("dotenv").config({ path: __dirname + "/../.env" });
const db = require("./connection");
const { User, Product, Category } = require("../models");

db.collection;

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "advertising" },
    { name: "digital" },
    { name: "packaging" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();
  try {
    const products = await Product.insertMany([
      {
        title: "Magazine Mockup",
        desc: "PSD mockup of magazine layout",
        img: "https://image.freepik.com/free-psd/magazine-mockup_165789-367.jpg",
        category: categories[0]._id,
        color: ["psd", "jpg"],
        price: 25.0,
        quantity: 500,
      },
      {
        title: "Business Card Mockup",
        desc: "PSD mockup of business card",
        img: "https://image.freepik.com/free-psd/clean-minimal-business-card-mockup-texture-with-leaves_481141-66.jpg",
        category: categories[0]._id,
        color: ["psd", "jpg"],
        price: 15.0,
        quantity: 500,
      },
      {
        title: "Box Packaging Mockup",
        desc: "PSD mockup of packaging boxes",
        img: "https://image.freepik.com/free-psd/kraft-box-packaging-mockup-brown-advertisement_53876-98776.jpg",
        category: categories[(0, 2)]._id,
        color: ["psd", "jpg"],
        price: 10.0,
        quantity: 500,
      },
      {
        title: "Sticker Mockup",
        desc: "PSD mockup of packaging boxes",
        img: "https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/614074f508c66870aab92f8d_2500-Sticker%20Pack-p-2000.jpeg",
        category: categories[(0, 2)]._id,
        color: ["psd", "jpg", "svg"],
        price: 10.0,
        quantity: 500,
      },
      {
        title: "Post Packaging Mockup",
        desc: "PSD mockup of packaging post bags",
        img: "https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/61043107a624c2038b6ed72d_Kraft%20Paper%20Postal%20Bag%20%26%20Sticker%20Mockup-2500-2-p-2000.jpeg",
        category: categories[(0, 2)]._id,
        color: ["psd", "jpg"],
        price: 25.0,
        quantity: 500,
      },
      {
        title: "Advertising / Packaging tape Mockup",
        desc: "Mockup of packaging tape",
        img: "https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/6069e8c673e5221445ede9d7_2000.jpg",
        category: categories[(0, 2)]._id,
        color: ["psd", "jpg"],
        price: 1.99,
        quantity: 500,
      },
      {
        title: "Magazine Layout Mockup",
        desc: "Mockup of magazine layout",
        img: "https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/61042a34a8a6eb20172f0854_Open%20Hardcover%20Book%20Mockup-2500-2.jpg",
        category: categories[0]._id,
        color: ["psd", "indd", "svg"],
        price: 20.0,
        quantity: 500,
      },
      {
        title: "Book Mockup",
        desc: "Mockup of hardcover book",
        img: "https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fa11b05044c30437e361f0b_Preview-2500.jpg",
        category: categories[0]._id,
        color: ["psd", "jpg", "indd"],
        price: 40.0,
        quantity: 500,
      },
      {
        title: "Mac Book Mockup",
        desc: "Mockup of Mac Book Screen",
        img: "https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/616eec09644544418e545a3b_002%20-%20Free%20MacBook%20Pro%2016%20Mockup.jpg",
        category: categories[1]._id,
        color: ["psd", "jpg"],
        price: 30.0,
        quantity: 500,
      },
    ]);
  } catch (err) {
    console.log(err);
  }

  console.log("products seeded");

  await User.deleteMany();

  const userData = [
    {
      firstName: "Alexis",
      lastName: "Mastrodomenico",
      email: "mastroalexis@gmail.com",
      password: "fakepassword123",
    },
    {
      firstName: "Naomi",
      lastName: "Tims",
      email: "naomi@fakeemail.com",
      password: "fakepassword123",
    },
    {
      firstName: "Georgia",
      lastName: "Brennan",
      email: "georgia@mockupemail.com",
      password: "fakepassword123",
    },
    {
      firstName: "Reign",
      lastName: "Mastro",
      email: "reign@testmail.com",
      password: "fakepassword12345",
    },
  ];

  for (let index = 0; index < userData.length; index++) {
    const user = userData[index];
    await User.create(user);
  }

  console.log("users seeded");

  process.exit();
});
