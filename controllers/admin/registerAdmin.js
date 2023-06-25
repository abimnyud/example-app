import { registerValidation } from './../validationSchema.js';
import Admin from '../../models/adminModel.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const register = async (req, res) => {
  //validate data
  const error = registerValidation(req.body);
  if (error.error) {
    return res.status(400).json({
      success: false,
      message: error.error.details[0].message,
    });
  }

  const { nama, email, password } = req.body;

  //cek exist data
  const emailIsExist = await Admin.findOne({
    where: {
      email: email,
    },
  });

  if (emailIsExist) {
    return res.status(409).json({
      success: false,
      message: 'email sudah digunakan.',
    });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // membuat user baru
  const admin = await new Admin({
    nama,
    email,
    password: hashedPassword,
  });

  try {
    await admin.save();
    res.json({
      success: true,
      message: 'berhasil membuat akun!',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: error,
    });
  }
};

export default register;
