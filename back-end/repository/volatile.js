import { Repository } from "./repository";
import { HelpOffer } from '../models/help-offer'
import { Interest } from '../models/interest'

export class Volatile extends Repository{
    constructor(){
        this._helpOffers = {}
        this._helpOffersMaxId = 0
        this._interests = {}
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
        this._helpOffers.push(helpOffer)
    }

    addInterest(interest){
        if (!interest instanceof Interest){
            throw new Error(`Erro método Volatile.addInterest. Tipo de parâmetro errado (${typeof(interest)})`)
        }

        if (interest.id <= 0){
            interest.id = this._interestMaxId + 1
            this._interestMaxId += 1
        }

        this._interests.push(interest)
    }
}