import { Interest } from "../models/interest.js"
import { UCAddInterest } from "../usecases/add-interest.js"
import { DateTime } from 'Luxon'

export class CAddInterest{
    constructor(ucAddInterest){
        if (!ucAddInterest instanceof UCAddInterest){
            throw new Error(`Erro CAddInterest. Tipo errado para o parâmetro ucAddInterest (${typeof(ucAddInterest)})`)
        }
        this._ucAddInterest = ucAddInterest
    }

    postInterest(req){
        /*
            Estrutura da request:
            {
                "announcerName" : "XXXXX",
                "email" : "email@exemplo.com",
                "idHelpOffer" : YY
            }
        */
        const interest = new Interest(-1, req.announcerName, DateTime.now(), req.email, req.idHelpOffer)
        return this._ucAddInterest.addInterest(interest)
    }
}