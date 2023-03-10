import Users from "../Models/User.js"
import StatusCodes from 'http-status-codes'
import BadRequistError from "../Errors/bad-requist.js";

const register =  async (req, res, next)=>{
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        throw new BadRequistError("Please provide all values.")
    }
    const createdUser = await Users.create(req.body);
    res.status(StatusCodes.OK).json(createdUser);
}


const login = (req, res)=>{
    res.send('login page ')
}



export {
    register,
    login
}