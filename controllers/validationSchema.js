import Joi from 'joi';

export const registerValidation = (data) => {
  //cek schema register
  const schema = Joi.object({
    nama: Joi.string()
      .pattern(/^[a-zA-Z ]*$/)
      .min(5)
      .required()
      .messages({
        'string.pattern.base': `"nama" must be alphabetical`,
      }),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  //return validasi
  return schema.validate(data);
};

export const loginValidation = (data) => {
  //cek schema register
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  //return validasi
  return schema.validate(data);
};
