import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config()
app.use(express.json())
app.use((req,res,next)=>{
    let{method}=req
    if(method==="POST"){
        next()
    }
    else if(method==="GET"){
        res.status(400).json({
            msg:"you are not allowed to GET method"
        })
    }

})
let {PORT} = process.env
app.post("/", (req, res) => {
    let{name}=req.body
    
    res.send(`${name} is succesfully added`)
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
