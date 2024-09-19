const jwt = require('jsonwebtoken')

module.exports = (req,res,next)=>{
    const token = (req.headers.authorization || '').replace(/Bearer\s?/i,'')
    if(token){
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.id = decoded.id
            next()
        }catch(error){
            return res.json({
                message: 'Не доступа.'
            })
        }
    }
    else{
        return res.json({
            message: 'Не доступа.'
        })
    }
}
