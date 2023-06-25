import Buku from './../models/bukuModel.js';

const getAllBooks = async (req, res) => {
  try {
    const books = await Buku.findAll();
    if (!books) {
      return res.status(404).json({
        success: false,
        message: 'data buku tidak ditemukan',
      });
    }

    return res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {}
};

export default getAllBooks;
