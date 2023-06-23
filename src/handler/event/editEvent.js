import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const editEvent = async ( req, res ) => {
    try {
        const { id } = req.params;
        const { name, description, location, date, time, price, quota } = req.body;
        const event = await prisma.event.update( {
            where: {
                id: parseInt( id )
            },
            data: {
                name, description, location,
                date: new Date( date ),
                time: new Date( parseInt( time ) ),
                price, quota
            }
        } );
        res.status( 200 ).json( { data: event } );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};

export default editEvent;