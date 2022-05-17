import { UCConsultInterest } from "../usecases/consult-interests.js"

export class CGetInterests{
    constructor(ucConsultInterests){
        if (!ucConsultInterests instanceof UCConsultInterest){
            throw new Error(`Erro CGetInterests. Tipo errado para o parâmetro ucConsultInterests (${typeof(ucConsultInterests)})`)
        }
        this._ucConsultInterests = ucConsultInterests
    }

    getInterest(body){
        /*
            Estrutura do body:
            {
                "id" : YY
            }
        */
        return this._ucConsultInterests.consultInterests(body.id)
    }
}