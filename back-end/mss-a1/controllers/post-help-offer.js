import { HelpOffer } from "./models/help-offer.js"
import { UCAddHelpOffer } from "../usecases/add-help-offer.js"
import { DateTime } from 'Luxon'

export class CPostHelpOffer{
    constructor(ucAddHelpOffer){
        if (!ucAddHelpOffer instanceof UCAddHelpOffer){
            throw new Error(`Erro CPostHelpOffer. Tipo errado para o parâmetro ucAddHelpOffer (${typeof(ucAddHelpOffer)})`)
        }
        this._ucAddHelpOffer= ucAddHelpOffer
    }

    async postHelpOffer(body){
        /*
            Estrutura do body:
            {
                "announcerName" : "XXXXX",
                "announcerSirName" : "XXXXX",
                "location" : "localização",
                "helpType" : "Housing" / "Job" / "Food",
                "description" : "descrição",
                "email" : "email@exemplo.com",
                "sex" : "M",
                "announcerBirth" : "2022-05-27T19:53:17.488-03:00"
            }
        */
        const ho = new HelpOffer(-1, body.announcerName, body.announcerSirName,
            DateTime.now(), body.location, body.helpType, 
            body.description, body.email, body.sex, body.announcerBirth)

        return await this._ucAddHelpOffer.addHelpOffer(ho)
    }
}