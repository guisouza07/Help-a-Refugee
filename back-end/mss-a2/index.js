import express from 'express'
import cors from 'cors'
import axios from 'axios'
import { UCAddHelpOffer } from '../usecases/add-help-offer.js'
import { UCAddInterest } from '../usecases/add-interest.js'
import { UCConsultInterest } from '../usecases/consult-interests.js'
import { UCConsultHelpOffer } from '../usecases/consult-help-offers.js'
import { VolatileRepo } from '../../mss-a1/repository/volatile.js'
import { MongoDB } from '../../mss-a1/repository/mongodb.js'
import { HelpOffer } from '../controllers/models/help-offer.js'
import { Interest } from '../controllers/models/interest.js'
import { DateTime } from 'Luxon'
import { HelpTypeEnum } from '../enums/help-type.js'
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



app.get("/hey-docker", async (req, res) => {
    res.status(200).json({
        mensagem: "Hey, Docker!!",
})
})
app.get('/interests', async (req, res) => {
    res.send(await cGetInterests.getInterest(req.body))
})

app.listen(8081, () => {
    console.log("Porta 8081")
})