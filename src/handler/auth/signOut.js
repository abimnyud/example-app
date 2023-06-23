const signOut = async ( req, res ) => {
    try {
        res.clearCookie( 'token' );
        res.status( 200 ).json( { message: "Success" } );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};

export default signOut;