import express from "express";
import log from './middleware/logging.js'
import user from './routes/user_router.js'
import ApiErrorHandler from "./middleware/ApiErrorHandler.js";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";

const app = express();
dotenv.config()
const port = process.env.PORT || 3000;

// Body Parser
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

// app.use(log)
app.use('/user', user)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Error Handling
app.use(ApiErrorHandler)
app.listen(port, () => console.log(`Example app listening on port ${port}!`));