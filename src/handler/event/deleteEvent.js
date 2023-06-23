import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteEvent = async ( req, res ) => {
    try {
        const { id } = req.params;
        const event = await prisma.event.findUnique( {
            where: {
                id: parseInt( id )
            }
        } );
        // console.log( req.user.id );
        // console.log( event );
        if ( event.userId !== req.user.id ) throw new Error( 'Unauthorized' );
        await prisma.event.delete( {
            where: {
                id: parseInt( id )
            }
        } );
        res.status( 200 ).json( { data: 'Event Deleted' } );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};

export default deleteEvent;