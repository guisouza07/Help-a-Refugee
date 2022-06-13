/**
 * Abstract Class Repository.
 *
 * @class Repository
 */

export class Repository {

    constructor() {
        if (this.constructor == Repository) {
            throw new Error("Clase abstrata não pode ser instanciada.")
        }
    }

    async addHelpOffer(helpOffer){
        throw new Error("Método não implementado (addHelpOffer())")
    }

    async addInterest(interest){
        throw new Error("Método não implementado (addInterest())")
    }

    async delHelpOffer(helpOffer){
        throw new Error("Método não implementado (delHelpOffer())")
    }

    async delInterest(interest){
        throw new Error("Método não implementado (delInterest())")
    }

    async getHelpOffers(){
        throw new Error("Método não implementado (getHelpOffers())")
    }

    async getInterests(idHelpOffer){
        throw new Error("Método não implementado (getInterests())")
    }
}