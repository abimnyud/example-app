import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const markedEvent = async ( req, res ) => {
    try {
        const events = await prisma.markedEvent.findMany( {
            where: {
                userId: parseInt( req.user.id )
            },
            select: {
                event: true
            }
        } );
        res.status( 200 ).json( { data: events } );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};

export default markedEvent;