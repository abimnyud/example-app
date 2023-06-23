import Joi from "joi";

const schema = Joi.object( {
    name: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    date: Joi.date().required(),
    time: Joi.date().required(),
    price: Joi.number().required(),
    quota: Joi.number().required(),
} );

const event = async ( req, res, next ) => {
    try {
        const value = await schema.validateAsync( req.body );
        next();
    } catch ( error ) {
        res.status( 400 ).json( { message: error.details } );
    }
};