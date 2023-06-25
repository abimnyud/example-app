import favorit from '../models/favorit.js';
import user from '../models/userModel.js';
import book from '../models/bukuModel.js';
const getFavorite = async (req, res) => {
  const { id } = req.params;
  const dataUser = await user.findOne({
    where: {
      id: id,
    },
    attributes: ['nama', 'email'],
  });

  const dataFavorit = await favorit.findAll({
    include: {
      model: book,
      attributes: ['judul', 'penulis', 'stok', 'harga'],
    },

    where: {
      idUser: id,
    },
    attributes: ['id'],
  });

  res.json({
    success: true,
    user: dataUser,
    favorite: dataFavorit,
  });
};

export default getFavorite;
