import express from "express";
import { promises as fs } from "fs"

const { readFile, writeFile } = fs
const router = express.Router()

router.post("/", async (req, res) => {

    try {
        let account = req.body

        // pode usar assim ou para simplificar
        /*const data = await readFile("accounts.json")
        const json = JSON.parse(data)*/

        const data = JSON.parse(await readFile("accounts.json"))
        account = {id: data.nextId++, ...account}

        // account.id = data.nextId
        // data.nextId++

        data.accounts.push(account)
        // json.stringify está convertendo em string
        await writeFile("accounts.json", JSON.stringify(data, null, 2))
        // devolve o id para o usuário
        res.send(account)

    } catch (err) {
        res.status(400).send({ error: err.message })
    }
})

export default router