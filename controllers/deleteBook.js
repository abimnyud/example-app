import Buku from './../models/bukuModel.js';

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCount = await Buku.destroy({
      where: { id: id },
    });

    if (deleteCount === 0) {
      // Jika tidak ada buku yang dihapus (tidak ditemukan), kirim respons 404
      return res.status(404).json({
        success: false,
        message: 'Buku tidak ditemukan',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Buku berhasil dihapus',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default deleteBook;
