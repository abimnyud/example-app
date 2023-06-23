import Joi from "joi";

const schema = Joi.object( {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
} );

const login = async ( req, res, next ) => {
    try {
        const value = await schema.validateAsync( req.body );
        next();
    } catch ( error ) {
        res.status( 400 ).json( { message: error.details } );
    }
};

export default login;