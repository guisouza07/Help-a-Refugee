import { Repository } from "../../mss-a1/repository/repository.js";
import { Interest } from "../controllers/models/interest.js.js";

export class UCAddInterest{
    constructor(repository){
        if (!repository instanceof Repository){
            throw new Error(`Erro UCAddHelpOffer. Tipo errado para o parâmetro repository (${typeof(repository)})`)
        }
        this._repository = repository
    }

    async addInterest(interest){
        if (!interest instanceof Interest){
            throw new Error(`Erro método Volatile.addInterest. Tipo de parâmetro errado (${typeof(interest)})`)
        }
        return await this._repository.addInterest(interest)
    }
}