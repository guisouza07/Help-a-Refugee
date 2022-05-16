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

    addHelpOffer(helpOffer){
        throw new Error("Método não implementado (addHelpOffer())")
    }

    addInterest(interest){
        throw new Error("Método não implementado (addInterest())")
    }

    delHelpOffer(helpOffer){
        throw new Error("Método não implementado (delHelpOffer())")
    }

    delInterest(interest){
        throw new Error("Método não implementado (delInterest())")
    }
}