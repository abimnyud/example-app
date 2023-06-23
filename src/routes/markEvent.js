import express from "express";
import { authorization, authentication } from "../middlewares/index.js";
import markEvent from "../handler/event/markEvent.js";
import markedEvent from "../handler/event/markedEvent.js";
import deleteMark from "../handler/event/deleteMark.js";

const router = express.Router();

router.get( '/:id', [ authentication, authorization( [ "admin", "user" ] ) ], markEvent );
router.get( '/', [ authentication, authorization( [ 'admin', 'user' ] ) ], markedEvent );
router.delete( '/:id', [ authentication, authorization( [ 'admin', 'user' ] ) ], deleteMark );

export default router;