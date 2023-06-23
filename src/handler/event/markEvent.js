import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const markEvent = async ( req, res ) => {
    const { id } = req.params;
    try {
        console.log( id );
        await prisma.markedEvent.create( {
            data: {
                eventId: parseInt( id ), userId: parseInt( req.user.id )
            }
        } );
        // prisma.markedEvent.create( {})
        res.status( 200 ).json( { data: "Success" } );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};

export default markEvent;