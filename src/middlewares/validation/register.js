import Joi from "joi";

const schmea = Joi.object( {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
} );

const register = async ( req, res, next ) => {
    try {
        const value = await schmea.validateAsync( req.body );
        console.log( value );
        next();
    } catch ( error ) {
        res.status( 400 ).json( { message: error.details } );
    }
};

export default register;