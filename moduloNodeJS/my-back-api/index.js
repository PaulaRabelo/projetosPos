import express from "express";
import accountsRouter from "./routes/accounts.js"
import {promises as fs} from "fs"

const {readFile, writeFile} = fs;

const app = express();
app.use(express.json())

app.use("/account", accountsRouter)

app.listen(3000, async() =>{
    try{
        await readFile("accounts.json")
        console.log("Api Started!")
    }catch(err){
        const initialJson ={
            nextId: 1,
            accounts:[]
        }
        writeFile("accounts.json", JSON.stringify(initialJson)).then(()=>{
            console.log("Api Started and file created!")
        }).catch(err =>{
            console.log(err)
        })
    }
})