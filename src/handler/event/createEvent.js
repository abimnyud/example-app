import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createEvent = async ( req, res ) => {
    try {
        const { name, description, location, date, time, price, quota } = req.body;
        const event = await prisma.event.create( {
            data: {
                name,
                description,
                location,
                date: new Date( date ),
                time: new Date( parseInt( time ) ),
                price,
                quota,
                userId: req.user.id
            }
        } );
        res.status( 200 ).json( { data: "Success" } );
    } catch ( e ) {
        res.status( 500 ).json( {
            message: e.message
        } );
    }
};

export default createEvent;