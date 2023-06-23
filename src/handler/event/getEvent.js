import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getEvent = async ( req, res ) => {
    try {
        const { id } = req.params;
        const event = await prisma.event.findUnique( {
            where: {
                id
            }
        } );
        if ( !event ) {
            throw new Error( "Event not found" );
        }
        res.status( 200 ).json( { data: event } );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};

export default getEvent;