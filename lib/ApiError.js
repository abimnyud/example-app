export const badRequest = (message) => {
    return {
        status: 400,
        message: message
    }
}

export const notFound = (message) => {
    return {
        status: 404,
        message: message
    }
}

export const serverError = (message) => {

    return {
        status: 500,
        message: message || 'Internal Server Error'
    }
}

export const custom = (code, message) => {
    return {
        status: code,
        message: message
    }
}