import { Repository } from "../../mss-a1/repository/repository.js";
import { HelpOffer } from "../controllers/models/help-offer.js";

export class UCAddHelpOffer{
    constructor(repository){
        if (!repository instanceof Repository){
            throw new Error(`Erro UCAddHelpOffer. Tipo errado para o parâmetro repository (${typeof(repository)})`)
        }
        this._repository = repository
    }

    async addHelpOffer(helpOffer){
        if (!helpOffer instanceof HelpOffer){
            throw new Error(`Erro método Volatile.addHelpOffer. Tipo de parâmetro errado (${typeof(helpOffer)})`)
        }
        return await this._repository.addHelpOffer(helpOffer)
    }
}