import {express} from 'express'
import cors from 'cors'
import { UCAddHelpOffer } from './back-end/usecases/add-help-offer.js'
import { UCAddInterest } from './back-end/usecases/add-interest.js'
import { UCConsultInterest } from './back-end/usecases/consult-interests.js'
import { UCConsultHelpOffer } from './back-end/usecases/consult-help-offers.js'
import { VolatileRepo } from './back-end/repository/volatile.js'
import { MongoDB } from './back-end/repository/mongodb.js'
import { HelpOffer } from './back-end/models/help-offer.js'
import { Interest } from './back-end/models/interest.js'
import { DateTime } from 'Luxon'
import { HelpTypeEnum } from './back-end/enums/help-type.js'
import { CPostHelpOffer } from './back-end/controllers/post-help-offer.js'
import { CPostInterest } from './back-end/controllers/post-interest.js'
import { CGetInterests } from './back-end/controllers/get-interest.js'
import { CGetHelpOffers } from './back-end/controllers/get-help-offer.js'


const express = require("express");

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

app.get("/hey-docker", async (req, res) => {
    res.status(200).json({
        mensagem: "Hey, Docker!!",
})
})
app.get('/interests', async (req, res) => {
    res.send(await cGetInterests.getInterest(req.body))
})

app.listen(8080, () => {
    console.log('MSS Porta 8080')
})