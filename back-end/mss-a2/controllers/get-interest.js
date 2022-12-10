import { UCConsultInterest } from "../usecases/consult-interests.js"

export class CGetInterests{
    constructor(ucConsultInterests){
        if (!ucConsultInterests instanceof UCConsultInterest){
            throw new Error(`Erro CGetInterests. Tipo errado para o parâmetro ucConsultInterests (${typeof(ucConsultInterests)})`)
        }
        this._ucConsultInterests = ucConsultInterests
    }

    async getInterest(body){
        /*
            Estrutura do body:
            {
                "id" : YY
            }
        */
        return await this._ucConsultInterests.consultInterests(body.id)
    }
}