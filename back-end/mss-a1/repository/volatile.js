import { Repository } from "./repository.js";
import { HelpOffer } from '../controllers/models/help-offer.js'
import { Interest } from '../controllers/models/interest.js'

export class VolatileRepo extends Repository{
    constructor(){
        super()
        this._helpOffers = []
        this._helpOffersMaxId = 0
        this._interests = []
        this._interestsMaxId = 0
    }

    async addHelpOffer(helpOffer){
        if (!helpOffer instanceof HelpOffer){
            throw new Error(`Erro método Volatile.addHelpOffer. Tipo de parâmetro errado (${typeof(helpOffer)})`)
        }
        if (helpOffer.id <= 0){
            helpOffer.id = this._helpOffersMaxId + 1
            this._helpOffersMaxId += 1
        }
        this._helpOffers.push({id: helpOffer.id, announcerName: helpOffer.announcerName, announcerSirName: helpOffer.announcerSirName,
                               announceDate: helpOffer.announceDate, location: helpOffer.location,
                               helpType: helpOffer.helpType, description: helpOffer.description, email: helpOffer.email,
                               sex: helpOffer.sex, announcerBirth: helpOffer.announcerBirth})
        return this._helpOffersMaxId
    }

    async addInterest(interest){
        if (!interest instanceof Interest){
            throw new Error(`Erro método Volatile.addInterest. Tipo de parâmetro errado (${typeof(interest)})`)
        }

        if (interest.id <= 0){
            interest.id = this._interestsMaxId + 1
            this._interestsMaxId += 1
        }

        this._interests.push({id: interest.id, announcerName: interest.announcerName, announcerSirName: interest.announcerSirName,
                              announceDate: interest.announceDate, email: interest.email,
                              idHelpOffer: interest.idHelpOffer, sex: interest.sex, announcerBirth: interest.announcerBirth})
        return this._interestsMaxId
    }

    async getHelpOffers(){
        return this._helpOffers
    }

    async getInterests(idHelpOffer){
        return this._interests.filter((value) => {return value.idHelpOffer === idHelpOffer})
    }
}