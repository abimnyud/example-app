import Buku from './../models/bukuModel.js';

const newBook = async (req, res) => {
  try {
    const { judul, penulis, stok, harga } = req.body;
    const update = await Buku.create({
      judul: judul,
      penulis: penulis,
      stok: stok,
      harga: harga,
    });
    res.json({
      success: true,
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export default newBook;
