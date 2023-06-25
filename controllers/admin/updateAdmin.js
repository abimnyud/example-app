import Admin from '../../models/adminModel.js';

const updateAdmin = async (req, res) => {
  try {
    const { id, nama, email, password } = req.body;
    const update = await Admin.update(
      {
        nama: nama,
        email: email,
      },
      {
        where: { id: id },
      }
    );

    const data = await Admin.findOne({
      where: {
        id: id,
      },
    });

    res.json({
      success: true,
      data_perubahan: data,
    });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

export default updateAdmin;
