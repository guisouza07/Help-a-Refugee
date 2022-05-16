import { Repository } from "./repository";
import { HelpOffer } from '../models/help-offer'
import { Interest } from '../models/interest'

export class Volatile extends Repository{
    constructor(){
        this._helpOffers = {}
        this._interests = {}
    }

    addHelpOffer(helpOffer){
        if (!helpOffer instanceof HelpOffer){
            throw new Error(`Erro método Volatile.addHelpOffer. Tipo de parâmetro errado (${typeof(helpOffer)})`)
        }
        this._helpOffers.push(helpOffer)
    }

    addInterest(interest){
        if (!interest instanceof Interest){
            throw new Error(`Erro método Volatile.addInterest. Tipo de parâmetro errado (${typeof(interest)})`)
        }
        this._interests.push(interest)
    }
}