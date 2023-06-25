import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import db from './connection/configDB.js';
// import user from './models/userModel.js';
// import admin from './models/adminModel.js';
// import book from './models/bukuModel.js';
// import favorit from './models/favorit.js';
dotenv.config();
const app = express();

// body-parser
app.use(cookieParser());
app.use(express.json());

//auth routes
import auth from './src/routes/auth.js';
app.use('/auth', auth);
//user route
import userRoute from './src/routes/user.js';
app.use('/user', userRoute);
// admin routes
import adminRoute from './src/routes/admin.js';
app.use('/admin', adminRoute);

//connect to db
const PORT = 3000 || process.env.PORT;
try {
  await db.authenticate();
  console.log('Database connected....');

  /*
   *migrate manual tabel pada models
   */

  // await user.sync();
  // await admin.sync();
  // await book.sync();
  // await favorit.sync();
} catch (error) {
  console.log(error);
}

//listen port
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
