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

    postHelpOffer(req){
        /*
            Estrutura da request:
            {
                "announcerName" : "XXXXX",
                "location" : "localização",
                "helpType" : "Housing" / "Job" / "Food",
                "description" : "descrição"
            }
        */
        const ho = new HelpOffer(-1, req.announcerName, DateTime.now(), req.location, req.helpType, req.description)

        return this._ucAddHelpOffer.addHelpOffer(ho)
    }
}