import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const seed = async () => {
    try {
        await prisma.user.create( {
            data: {
                name: "Admin",
                email: "admin@gmail.com",
                password: await bcrypt.hash( "admin", 10 ),
                role: "admin",
            }
        } );
    }
    catch ( e ) {
        console.log( e );
    }
};

seed()
    .then( async () => {
        await prisma.$disconnect();
    } )
    .catch( async ( e ) => {
        console.log( e );
        await prisma.$disconnect();
    } );