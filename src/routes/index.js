import express from 'express';
import routerEvent from './event.js';
import signUp from '../handler/auth/signUp.js';
import signIn from '../handler/auth/signIn.js';
import register from '../middlewares/validation/register.js';
import signOut from '../handler/auth/signOut.js';
import { authentication, authorization } from '../middlewares/index.js';
import login from '../middlewares/validation/login.js';
import routerMark from './markEvent.js';

const router = express.Router();

router.use( '/event', routerEvent );
router.use( '/mark', routerMark );

router.post( '/sign-up', [ authentication, authorization( [ 'guest' ] ), register ], signUp );
router.post( '/sign-in', [ authentication, authorization( [ 'guest' ] ), login ], signIn );
router.get( '/sign-out', signOut );

router.all( '*', ( req, res ) => {
  res.end( '<h1>Not Found. Please refer to our documentation.</h1>' );
} );

export default router;