
const notFoundMiddleware = (req , res)=>{
    res.status(404).send("page you're looking for doesn't exist")
}

export default notFoundMiddleware