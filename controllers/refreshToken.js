import User from './../models/userModel.js';
import Admin from './../models/adminModel.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const refreshTokenUser = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(403);
    const user = await User.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!user[0]) return res.sendStatus(403); //forbidden status
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(403);
      const userId = user.id;
      const userName = user.nama;
      const userEmail = user.email;
      const accessToken = jwt.sign({ userId, userName, userEmail }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '20s',
      });
      res.json({ accessToken });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const refreshTokenAdmin = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(403);
    const admin = await Admin.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!admin) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_ADMIN, (err, decoded) => {
      if (err) return res.sendStatus(403);
      const userId = admin.id;
      const userName = admin.nama;
      const userEmail = admin.email;
      const accessToken = jwt.sign({ userId, userName, userEmail }, process.env.ACCESS_TOKEN_SECRET_ADMIN, {
        expiresIn: '20s',
      });
      res.json({ accessToken });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
