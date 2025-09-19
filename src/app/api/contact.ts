import {Request, Response} from 'express';
import nodemailer from "nodemailer";

const handler=async (req:Request,res:Response)=>{
    console.log('req body',req.body);
    res.status(200).json({success:true,message:"Email Sent Successfully"})
}

export default handler;