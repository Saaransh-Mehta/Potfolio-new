import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { sendMail } from './utils/resendConfig.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post('/api/send',async(req,res)=>{
    try{

        const {fromEmail,name,services,company} = req.body;
        let subject = `New Portfolio Inquiry from ${name}`
        console.log(fromEmail,subject,name,services,company)
        await sendMail(fromEmail,subject,name,services,company)
        res.status(200).json({message:"Email sent successfully"})
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
 
})

app.get('/',(req,res)=>{
    res.send("API is running...")


})

app.listen(5000,
    ()=>{
    console.log("Server is running on port 5000")
})