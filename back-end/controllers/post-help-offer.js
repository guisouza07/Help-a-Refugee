import { HelpOffer } from "../models/help-offer.js"
import { UCAddHelpOffer } from "../usecases/add-help-offer.js"
import { DateTime } from 'Luxon'

export class CPostHelpOffer{
    constructor(ucAddHelpOffer){
        if (!ucAddHelpOffer instanceof UCAddHelpOffer){
            throw new Error(`Erro CPostHelpOffer. Tipo errado para o parâmetro ucAddHelpOffer (${typeof(ucAddHelpOffer)})`)
        }
        this._ucAddHelpOffer= ucAddHelpOffer
    }

    postHelpOffer(body){
        /*
            Estrutura do body:
            {
                "announcerName" : "XXXXX",
                "location" : "localização",
                "helpType" : "Housing" / "Job" / "Food",
                "description" : "descrição"
            }
        */
        const ho = new HelpOffer(-1, body.announcerName, DateTime.now(), body.location, body.helpType, body.description)

        return this._ucAddHelpOffer.addHelpOffer(ho)
    }
}