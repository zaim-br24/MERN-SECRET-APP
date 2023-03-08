import  StatusCodes  from "http-status-codes"

const errorHandlerMiddleware = (err, req, res, next)=>{
    console.log(err)

    const defaultError = {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'something went wrong!!'
    }

    if(err.name === 'ValidationError'){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        defaultError.msg = Object.values(err.errors).map(item => item.message).join(', ')
    }
    
    if(err.code && err.code === 11000){
        defaultError.msg = `${Object.keys(err.keyValue)} feild has to be unique.`
    }
    // res.status(defaultError.statusCode).json({msg: err})
    res.status(defaultError.statusCode).json({msg: defaultError.msg})
}

export default errorHandlerMiddleware
