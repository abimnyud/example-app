import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllEvent = async ( req, res ) => {
    try {
        const events = await prisma.event.findMany( {} );
        res.status( 200 ).json( { data: events } );
    } catch ( e ) {
        res.status( 500 ).json( {
            message: e.message
        } );
    }
};

export default getAllEvent;