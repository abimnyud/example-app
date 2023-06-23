import jwt from "jsonwebtoken";

export const authorization = ( roles ) => {
    return ( req, res, next ) => {
        try {
            if ( roles.includes( req.user.role ) ) {
                next();
            } else {
                res.status( 403 ).json( {
                    message: "Unauthorized"
                } );
            }
        } catch ( error ) {

        }
    };
};

export const authentication = ( req, res, next ) => {
    try {
        const token = req.signedCookies[ 'token' ];
        if ( token == undefined ) {
            req.user = { role: "guest" };
        }
        else {
            const signature = jwt.verify( token, process.env.JWT_SECRET );
            req.user = signature;
        }
        next();
    } catch ( error ) {
        res.status( 403 ).json( {
            message: "Unauthorized"
        } );
    }
};