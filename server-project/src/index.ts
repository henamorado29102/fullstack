import express, {Request, Response} from "express";
import mongoose from 'mongoose';
import * as dotenv from 'dotenv' 

dotenv.config()



console.log(process.env.MONGO_URL)

import Deck from "../models/Deck";

const PORT = 5000;
const app = express()

app.use(express.json())

app.post('/deck', async (req: Request, res: Response) =>{
    console.log(req.body)
    const newDeck = new Deck({
        title: req.body.title
    }) 
    const cretedDeck = await newDeck.save();
    res.json(cretedDeck);
}) 

mongoose.connect(
    process.env.MONGO_URL!
).then(()=>{
    console.log(`Listen ${PORT}`)
    app.listen(PORT)
})


    