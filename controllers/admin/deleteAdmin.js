import Admin from '../../models/adminModel.js';

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCount = await Admin.destroy({
      where: { id: id },
    });

    if (deleteCount === 0) {
      // Jika tidak ada buku yang dihapus (tidak ditemukan), kirim respons 404
      return res.status(404).json({
        success: false,
        message: 'Admintidak ditemukan',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Admin berhasil dihapus',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default deleteAdmin;
