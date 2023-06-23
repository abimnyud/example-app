import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteMark = async ( req, res ) => {
    try {
        const { id } = req.params;
        const mark = await prisma.markedEvent.findUnique( {
            where: {
                id: parseInt( id )
            }
        } );
        if ( mark.userId !== req.user.id ) throw new Error( 'Unauthorized' );

        await prisma.markedEvent.delete( {
            where: {
                id: parseInt( id )
            }
        } );
        res.status( 200 ).json( { data: 'Mark Deleted' } );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};

export default deleteMark;