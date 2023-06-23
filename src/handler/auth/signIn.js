import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const signIn = async ( req, res ) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique( {
            where: {
                email,
            },
        } );
        if ( !user ) {
            throw new Error( "Invalid email or password" );
        }
        const isMatch = await bcrypt.compare( password, user.password );
        if ( !isMatch ) {
            res.status( 400 ).json( {
                message: "Invalid email or password",
            } );
        }
        const token = jwt.sign( {
            id: user.id,
            role: user.role,
        }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        } );

        res.cookie( 'token', token, { signed: true } ).status( 200 ).json( { data: "Success" } );

    } catch ( e ) {
        res.status( 500 ).json( {
            message: e.message,
        } );
    }
};

export default signIn;