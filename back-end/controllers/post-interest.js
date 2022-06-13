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

    async postInterest(body){
        /*
            Estrutura do body:
            {
                "announcerName" : "XXXXX",
                "announcerSirName" : "XXXXX",
                "email" : "email@exemplo.com",
                "idHelpOffer" : YY,
                "sex" : "M",
                "announcerBirth" : "2022-05-27T19:53:17.488-03:00"
            }
        */
        const interest = new Interest(-1, body.announcerName, 
                                    body.announcerSirName, DateTime.now(), 
                                    body.email, body.idHelpOffer,
                                    body.sex, body.announcerBirth)
        return await this._ucAddInterest.addInterest(interest)
    }
}