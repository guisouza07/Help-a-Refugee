import { Repository } from "../../mss-a1/repository/repository.js"

export class UCConsultInterest{
    constructor(repository){
        if (!repository instanceof Repository){
            throw new Error(`Erro UCConsultInterest. Tipo errado para o parâmetro repository (${typeof(repository)})`)
        }
        this._repository = repository
    }

    async consultInterests(idHelpOffer){
        return  await this._repository.getInterests(idHelpOffer)
    }
}