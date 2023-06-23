import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const signUp = async ( req, res ) => {
    try {
        const { name, email, password } = req.body;
        const isAlreadyExist = await prisma.user.findUnique( {
            where: {
                email,
            }
        } );

        if ( isAlreadyExist ) throw new Error( "Email already exist" );

        const hashedPassword = await bcrypt.hash( password, 10 );

        const user = await prisma.user.create( {
            data: {
                name,
                email,
                password: hashedPassword,
            }
        } );
        res.status( 200 ).json( { data: "Success" } );
    } catch ( e ) {
        res.status( 500 ).json( {
            message: e.message
        } );
    }
};

export default signUp;