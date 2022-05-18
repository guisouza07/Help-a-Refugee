import { Interest } from "../models/interest.js"
import { UCAddInterest } from "../usecases/add-interest.js"
import { DateTime } from 'Luxon'

export class CPostInterest{
    constructor(ucAddInterest){
        if (!ucAddInterest instanceof UCAddInterest){
            throw new Error(`Erro CPostInterest. Tipo errado para o parâmetro ucAddInterest (${typeof(ucAddInterest)})`)
        }
        this._ucAddInterest = ucAddInterest
    }

    postInterest(body){
        /*
            Estrutura do body:
            {
                "announcerName" : "XXXXX",
                "email" : "email@exemplo.com",
                "idHelpOffer" : YY
            }
        */
        const interest = new Interest(-1, body.announcerName, DateTime.now(), body.email, body.idHelpOffer)
        return this._ucAddInterest.addInterest(interest)
    }
}