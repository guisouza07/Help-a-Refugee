import { Repository } from "./repository.js";
import { HelpOffer } from '../models/help-offer.js'
import { Interest } from '../models/interest.js'

export class VolatileRepo extends Repository{
    constructor(){
        super()
        this._helpOffers = []
        this._helpOffersMaxId = 0
        this._interests = []
        this._interestsMaxId = 0
    }

    addHelpOffer(helpOffer){
        if (!helpOffer instanceof HelpOffer){
            throw new Error(`Erro método Volatile.addHelpOffer. Tipo de parâmetro errado (${typeof(helpOffer)})`)
        }
        if (helpOffer.id <= 0){
            helpOffer.id = this._helpOffersMaxId + 1
            this._helpOffersMaxId += 1
        }
        this._helpOffers.push({id: helpOffer.id, announcerName: helpOffer.announcerName,
                               announceDate: helpOffer.announceDate, location: helpOffer.location,
                               helpType: helpOffer.helpType, description: helpOffer.description})
        return this._helpOffersMaxId
    }

    addInterest(interest){
        if (!interest instanceof Interest){
            throw new Error(`Erro método Volatile.addInterest. Tipo de parâmetro errado (${typeof(interest)})`)
        }

        if (interest.id <= 0){
            interest.id = this._interestMaxId + 1
            this._interestMaxId += 1
        }

        this._interests.push({id: interest.id, announcerName: interest.announcerName,
                              announceDate: interest.announceDate, email: interest.email,
                              idHelpOffer: interest.idHelpOffer})
        return this._interestsMaxId
    }
}