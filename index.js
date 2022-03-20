import express from "express";
import log from './middleware/logging.js'
import user from './router/user_router.js'
import ApiErrorHandler from "./middleware/ApiErrorHandler.js";

const app = express();
const port = 3000;

// Body Parser
app.use(express.json());

// app.use(log)
app.use('/user', user)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Error Handling
app.use(ApiErrorHandler)
app.listen(port, () => console.log(`Example app listening on port ${port}!`));