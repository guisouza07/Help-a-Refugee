import express from 'express'
import cors from 'cors'

import { UCAddHelpOffer } from './usecases/add-help-offer.js'
import { UCAddInterest } from './usecases/add-interest.js'

import { MongoDB } from './repository/mongodb.js'

import { CPostHelpOffer } from './controllers/post-help-offer.js'
import { CPostInterest } from './controllers/post-interest.js'



const app = express()
app.use(express.json())
app.use(cors())


const repo = new MongoDB() 

const ucAddInterest = new UCAddInterest(repo)
const cPostInterest = new CPostInterest(ucAddInterest)


const ucAddHelpOffer = new UCAddHelpOffer(repo)
const cPostHelpOffer = new CPostHelpOffer(ucAddHelpOffer)



app.post('/help-offer', async (req, res) => {
    res.sendStatus(201).send(await cPostHelpOffer.postHelpOffer(req.body).catch((err) => {
        console.log('Erro ao fazer POST na rota http://localhost:8082/help-offer: ' + err)
        return {"message": "Erro ao fazer POST na rota http://localhost:8082/help-offer: " + err.stack} //Retorna um JSON com a mensagem de erro

    }))
})

app.post('/interest', async (req, res) => {
    res.sendStatus(201).send(await cPostInterest.postInterest(req.body))
})



app.listen(8082, () => {
    console.log("Porta 8082")
})