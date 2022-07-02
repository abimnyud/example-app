const db = require('../../../connection/dbConnect');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require ('@hapi/joi');

const schema = Joi.object({
    Email    : Joi.string().min(11).max(30).required(),
    Password : Joi.string().min(6).max(30).required()
})

const UserLogin = async (req,res) => {
    const {error} = schema.validate(req.body);
    if(error)
        return res.status(400).send(error.details[0])

    const {Email, Password } = req.body
    const Check_Rows= `SELECT * FROM "User" WHERE "Email" = '${Email}'`
    const Check = await db.query(Check_Rows);

    if (Check.rows.length == 0)
        return res.status(400).send(`Email Doesn't exist`); 

    
    const Validpass = await bycrypt.compare(Password, Check.rows[0].Password )
    if(!Validpass)
        return res.status(400).send(`Invalid Password!`)
    
    try {
        const token = jwt.sign({Password : Check.rows[0].Password}, process.env.TOKEN)
        res.header('auth-token', token).send(`Welcome ${Check.rows[0].Username}! \n\n header: ${token}`);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }



}

module.exports =  UserLogin;