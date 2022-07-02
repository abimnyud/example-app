export function notFound(message) {
    return {
        status:404,
        message: message
    }
}

export function ServerError(message){
    return{
        status:500,
        message: message
    }
}


export function costum(code, message){
    return{
        status: code,
        message: message
    }

}