import express from 'express'
import { UCAddHelpOffer } from './usecases/add-help-offer.js'
import { UCAddInterest } from './usecases/add-interest.js'
import { UCConsultInterest } from './usecases/consult-interests.js'
import { UCConsultHelpOffer } from './usecases/consult-help-offers.js'
import { VolatileRepo } from './repository/volatile.js'
import { HelpOffer } from './models/help-offer.js'
import { Interest } from './models/interest.js'
import { DateTime } from 'Luxon'
import { HelpTypeEnum } from './enums/help-type.js'
import { CAddHelpOffer } from './controllers/post-help-offer.js'
import { CAddInterest } from './controllers/post-interest.js'
import { CGetInterests } from './controllers/get-interest.js'
import { CGetHelpOffers } from './controllers/get-help-offer.js'


const app = express()
app.use(express.json())


const repo = new VolatileRepo() //Define o tipo de repositório a ser usado

const ucAddInterest = new UCAddInterest(repo)
const cAddInterest = new CAddInterest(ucAddInterest)

const ucConsultInterest = new UCConsultInterest(repo)
const cGetInterests = new CGetInterests(ucConsultInterest)

const ucAddHelpOffer = new UCAddHelpOffer(repo)
const cAddHelpOffer = new CAddHelpOffer(ucAddHelpOffer)

const ucConsultHelpOffers = new UCConsultHelpOffer(repo)
const cGetHelpOffer = new CGetHelpOffers(ucConsultHelpOffers)

