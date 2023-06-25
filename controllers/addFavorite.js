import favorit from '../models/favorit.js';

const addFavorite = async (req, res) => {
  try {
    const { idBuku, idUser } = req.body;
    const existingFavorite = await favorit.findOne({
      where: {
        idBuku: idBuku,
        idUser: idUser,
      },
    });

    if (existingFavorite) {
      return res.status(409).json({
        success: false,
        message: 'Data favorit sudah ada',
      });
    }
    const addFav = await favorit.create({
      idBuku: idBuku,
      idUser: idUser,
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

export default addFavorite;
