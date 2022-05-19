import { Repository } from "../repository/repository.js"

export class UCConsultInterest{
    constructor(repository){
        if (!repository instanceof Repository){
            throw new Error(`Erro UCConsultInterest. Tipo errado para o parâmetro repository (${typeof(repository)})`)
        }
        this._repository = repository
    }

    consultInterests(idHelpOffer){
        return this._repository.getInterests(idHelpOffer)
    }
}