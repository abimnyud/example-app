// import * as ApiError from '../lib/ApiError.js'

const ApiErrorHandler = (err, req, res, next) => {
    if (err) {
        return res.status(err.status).json(err.message)
    }

    res.status(500).json('Internal Server Error')
}

export default ApiErrorHandler