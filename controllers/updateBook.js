import Buku from './../models/bukuModel.js';

const updateBook = async (req, res) => {
  try {
    const { id, judul, penulis, stok, harga } = req.body;
    const update = await Buku.update(
      {
        judul: judul,
        penulis: penulis,
        stok: stok,
        harga: harga,
      },
      {
        where: { id: id },
      }
    );
    res.json({
      success: true,
      data: req.body,
    });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

export default updateBook;
