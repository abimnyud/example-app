import express from 'express';
import getAllEvent from '../handler/event/getAllEvent.js';
import createEvent from '../handler/event/createEvent.js';
import markEvent from '../handler/event/markEvent.js';
import { authentication, authorization } from '../middlewares/index.js';
import getEvent from '../handler/event/getEvent.js';
import editEvent from '../handler/event/editEvent.js';
import deleteEvent from '../handler/event/deleteEvent.js';

const router = express.Router();

router.get( '/', getAllEvent );
router.post( '/', [ authentication, authorization( [ "admin" ] ) ], createEvent );
router.get( '/:id', getEvent );
router.put( '/:id', editEvent );
router.delete( '/:id', [ authentication, authorization( [ "admin" ] ) ], deleteEvent );

// router.get( '/mark/:id', [ authentication, authorization( [ "admin", "user" ] ) ], markEvent );
// router.get( '/marked', [ authentication, authorization( [ 'admin', 'user' ] ) ], markedEvent );

export default router;