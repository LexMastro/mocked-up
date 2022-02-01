const CryptoJS = require("crypto-js");

const hashed = CryptoJS.AES.encrypt("fakepassword123", "Alexis123").toString();

console.log(hashed);
