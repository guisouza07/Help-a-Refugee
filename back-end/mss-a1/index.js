import express from 'express'
import cors from 'cors'
import axios from 'axios'
import { UCAddHelpOffer } from '../usecases/add-help-offer.js'
import { UCAddInterest } from '../usecases/add-interest.js'
import { UCConsultInterest } from '../usecases/consult-interests.js'
import { UCConsultHelpOffer } from '../usecases/consult-help-offers.js'
import { MongoDB } from '../../mss-a1/repository/mongodb.js'

import { CPostHelpOffer } from '../controllers/post-help-offer.js'
import { CPostInterest } from '../controllers/post-interest.js'
import { CGetInterests } from '../controllers/get-interest.js'
import { CGetHelpOffers } from '../controllers/get-help-offer.js'




const app = express()
app.use(express.json())
app.use(cors())


const repo = new MongoDB() //Define o tipo de repositório a ser usado

const ucAddInterest = new UCAddInterest(repo)
const cPostInterest = new CPostInterest(ucAddInterest)

const ucConsultInterest = new UCConsultInterest(repo)
const cGetInterests = new CGetInterests(ucConsultInterest)

const ucAddHelpOffer = new UCAddHelpOffer(repo)
const cPostHelpOffer = new CPostHelpOffer(ucAddHelpOffer)

const ucConsultHelpOffers = new UCConsultHelpOffer(repo)
const cGetHelpOffer = new CGetHelpOffers(ucConsultHelpOffers)

app.post('/help-offer', async (req, res) => {
    res.sendStatus(201).send(await cPostHelpOffer.postHelpOffer(req.body))
})

app.post('/interest', async (req, res) => {
    res.sendStatus(201).send(await cPostInterest.postInterest(req.body))
})



app.listen(8082, () => {
    console.log("Porta 8082")
})