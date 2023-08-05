const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
router.post("/okok",(req,res)=>{
    const {email} = req.body;

    try{
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
            }
        });

        const mailOptions ={
            from: process.env.EMAIL,
            to: email,
            subject: "Hi ",
            html:'<h1>Test</h1>' 
        }

        transporter.sendMail(mailOptions, (error,info)=>{
            if(error){
                console.log("Error : ", error)
            }else{
                console.log("Email Sent " + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch(error){
        res.status(401).json({status:401,error})

    }
})

module.exports = router