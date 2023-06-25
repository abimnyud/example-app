import { loginValidation } from './../validationSchema.js';
import Admin from '../../models/adminModel.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const Login = async (req, res) => {
  //VALIDASI DATA
  const error = loginValidation(req.body);
  if (error.error) {
    return res.status(400).json({
      success: false,
      message: error.error.details[0].message,
    });
  }

  const { email, password } = req.body;

  //cek exist data
  const admin = await Admin.findOne({
    where: {
      email: email,
    },
  });

  if (!admin) {
    res.status(404).json({
      message: 'Email anda tidak ditemukan.',
    });
  }

  //cek password comparation
  const match = await bcrypt.compare(password, admin.password);

  if (!match) {
    return res.status(400).json({
      message: 'Password yang anda masukkan salah.',
    });
  }

  //jwt create and sign
  const adminEmail = admin.email;
  const accessToken = jwt.sign({ adminEmail }, process.env.ACCESS_TOKEN_SECRET_ADMIN, {
    expiresIn: '60s',
  });
  const refreshToken = jwt.sign({ adminEmail }, process.env.REFRESH_TOKEN_SECRET_ADMIN, {
    expiresIn: '1d',
  });
  await admin.update(
    { refresh_token: refreshToken },
    {
      where: {
        email: adminEmail,
      },
    }
  );
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    // secure: true,
  });
  res.json({ accessToken: accessToken });
};

export default Login;
