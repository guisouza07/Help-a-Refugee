import { UCConsultHelpOffer } from "../usecases/consult-help-offers.js"

export class CGetHelpOffers{
    constructor(ucConsultHelpOffers){
        if (!ucConsultHelpOffers instanceof UCConsultHelpOffer){
            throw new Error(`Erro CGetHelpOffers. Tipo errado para o parâmetro ucConsultHelpOffers (${typeof(ucConsultHelpOffers)})`)
        }
        this._ucConsultHelpOffers = ucConsultHelpOffers
    }

    async getHelpOffers(body){
        /*
            Estrutura do body:
            {
            }
        */
        return await this._ucConsultHelpOffers.consultHelpOffers()
    }
}