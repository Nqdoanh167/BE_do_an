/** @format */

const mongoose = require('mongoose');
async function connect() {
   try {
      await mongoose.connect('mongodb://localhost:27017/do_an');
      console.log('connect mongo db done!');
   } catch (e) {
      console.log(e.message);
   }
}
module.exports = {
   connect,
};
