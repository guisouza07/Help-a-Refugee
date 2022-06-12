import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { DateTime } from 'Luxon'
import { Repository } from './repository.js'
import { HelpOffer } from '../models/help-offer.js'
import { Interest } from '../models/interest.js'

dotenv.config()

const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_CLUSTER,
    MONGODB_DATABASE
  } = process.env

const HelpOfferModel = mongoose.model('HelpOffer', mongoose.Schema({
    announcerName: {type: String, required:true},
    announcerSirName: {type: String, required:true},
    announceDate: {type: Date, required:true},
    location: {type: String, required:true},
    helpType: {type: String, required:true},
    description: {type: String, required:true},
    email: {type: String, required:true},
    sex: {type: String, required:true},
    announcerBirth: {type: Date, required: true}
}))

const InterestModel = mongoose.model('Interest', mongoose.Schema({
    announcerName: {type: String, required:true},
    announcerSirName: {type: String, required:true},
    announceDate: {type: Date, required:true},
    email: {type: String, required:true},
    idHelpOffer: {type: Number, required:true},
    sex: {type: String, required:true},
    announcerBirth: {type: Date, required:true},
}))

export class MongoDB extends Repository{

    constructor() {
        super()
        mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)
    }

    addHelpOffer(helpOffer){
        const hom = new HelpOfferModel({announcerName: helpOffer.announcerName, announcerSirName: helpOffer.announcerSirName,
            announceDate: helpOffer.announceDate, location: helpOffer.location,
            helpType: helpOffer.helpType, description: helpOffer.description, email: helpOffer.email,
            sex: helpOffer.sex, announcerBirth: helpOffer.announcerBirth})

        hom.save().then(hoInserted => {
            console.log(`Ajuda criada ${hoInserted._id}`)
            return hoInserted._id
        })
    }

    addInterest(interest){
        throw new Error("Método não implementado (addInterest())")
    }

    delHelpOffer(helpOffer){
        throw new Error("Método não implementado (delHelpOffer())")
    }

    delInterest(interest){
        throw new Error("Método não implementado (delInterest())")
    }

    getHelpOffers(){
        throw new Error("Método não implementado (getHelpOffers())")
    }

    getInterests(idHelpOffer){
        throw new Error("Método não implementado (getInterests())")
    }
}