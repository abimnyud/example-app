import Buku from './../models/bukuModel.js';

const getBookByPenulis = async (req, res) => {
  try {
    const { penulis } = req.body;
    const books = await Buku.findAll({
      where: {
        penulis: penulis,
      },
    });

    if (books.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'data buku tidak ditemukan',
      });
    }

    return res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server',
    });
  }
};

export default getBookByPenulis;
