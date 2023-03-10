import axios from 'axios';

const userAuth = async(req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    console.log(typeof(token))

    if(!token)
    {
        throw new Error('unauthorized access is restricted');
    }
    const user = await axios({
       url: 'http://localhost:4000/api/validate', method: "POST" ,
       headers: {
            'authorization': `Bearer ${token}`
        }
    })
    console.log(user)
    // if(!user){
    //    throw new Error('unauthorized access is restricted');
    // }
    req.user = user;
    next();
}
module.exports = {userAuth};