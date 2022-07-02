const db = require('../../../connection/dbConnect')
// const { RegisterValidation }= require ('./Validation')
const bycrypt = require('bcryptjs');
const Joi = require ('@hapi/joi');

const schema = Joi.object( {
    Email    : Joi.string().min(11).max(30).required(),
    Username : Joi.string().min(6).max(30).required(),
    Password : Joi.string().min(6).max(15).required()
})
const PostTambahUser = async (req,res) => {
    const {error} = schema.validate(req.body);
    if(error)
        return res.status(400).send(error.details[0].message)

    const {Email, Username, Password } = req.body 
    const Check_Record= `SELECT "Email" FROM "User" WHERE "Email" = '${Email}'`
    
    const Check = await db.query(Check_Record);

    if (Check.rows.length != 0)
        return res.status(400).send(`Email : "${Email}"  already exist`);  
    const salt = await bycrypt.genSalt(10)
    const hashedPassword = await bycrypt.hash(Password, salt)
    const query = `INSERT INTO "User" ("Email", "Username", "Password") VALUES ('${Email}','${Username}', '${hashedPassword}');`;

    try {
        await db.query(query);
        res.status(200).send("Data Updated!!");
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }



}

module.exports =  PostTambahUser;