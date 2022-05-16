import { DateTime } from 'Luxon'

export class Interest{
    constructor(announcerName, announceDate, email){
        //Validações de parâmetros
        if (!announceName instanceof String){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro announceName(${typeof(announceName)})`);
        }
        if (!announceDate instanceof DateTime){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro announceName(${typeof(announceName)})`);
        }
        if (!email instanceof String){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro announceName(${typeof(announceName)})`);
        }

        this._announcerName = announcerName
        this._announceDate = announceDate
        this._email = email
    }
}