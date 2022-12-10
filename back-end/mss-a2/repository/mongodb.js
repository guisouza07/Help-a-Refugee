import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { DateTime } from 'Luxon'
import { Repository } from './repository.js'
import { HelpOffer } from '../models/help-offer.js.js'
import { Interest } from '../models/interest.js.js'

dotenv.config()

const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_CLUSTER,
    MONGODB_DATABASE
  } = process.env

const HelpOfferModel = mongoose.model('helpoffer', mongoose.Schema({
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

const InterestModel = mongoose.model('interest', mongoose.Schema({
    announcerName: {type: String, required:true},
    announcerSirName: {type: String, required:true},
    announceDate: {type: Date, required:true},
    email: {type: String, required:true},
    idHelpOffer: {type: String, required:true},
    sex: {type: String, required:true},
    announcerBirth: {type: Date, required:true},
}))

export class MongoDB extends Repository{

    constructor() {
        super()
        mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)
    }

    async addHelpOffer(helpOffer){
        const hom = new HelpOfferModel({announcerName: helpOffer.announcerName, announcerSirName: helpOffer.announcerSirName,
            announceDate: helpOffer.announceDate, location: helpOffer.location,
            helpType: helpOffer.helpType, description: helpOffer.description, email: helpOffer.email,
            sex: helpOffer.sex, announcerBirth: helpOffer.announcerBirth})

        hom.save().then(hoInserted => {
            console.log(`Ajuda criada: ${hoInserted._id}`)
            return hoInserted._id
        })
    }

    async addInterest(interest){
        const im = new InterestModel({announcerName: interest.announcerName, announcerSirName: interest.announcerSirName,
            announceDate: interest.announceDate, email: interest.email,
            idHelpOffer: interest.idHelpOffer, sex: interest.sex, announcerBirth: interest.announcerBirth})
        
        im.save().then(imInserted => {
            console.log(`Interesse criado: ${imInserted._id}`)
            return imInserted._id
        })
    }

    async delHelpOffer(helpOffer){
        throw new Error("Método não implementado (delHelpOffer())")
    }

    async delInterest(interest){
        throw new Error("Método não implementado (delInterest())")
    }

    async getHelpOffers(){
        const ret = []
        for await (const doc of HelpOfferModel.find()){
            ret.push({id: doc._id.toString(), announcerName: doc.announcerName, announcerSirName: doc.announcerSirName,
                    announceDate: doc.announceDate, location: doc.location,
                    helpType: doc.helpType, description: doc.description, email: doc.email,
                    sex: doc.sex, announcerBirth: doc.announcerBirth})
        }

        return ret
            
    }

    async getInterests(idHelpOffer){
        const ret = []
        for await (const doc of InterestModel.find({idHelpOffer: idHelpOffer})){
            ret.push({id: doc.id.toString(), announcerName: doc.announcerName, announcerSirName: doc.announcerSirName,
                announceDate: doc.announceDate, email: doc.email,
                idHelpOffer: doc.idHelpOffer, sex: doc.sex, announcerBirth: doc.announcerBirth})
        }

        return ret
    }
}