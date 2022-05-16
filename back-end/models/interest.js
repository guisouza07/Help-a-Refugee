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

    get announcerName(){
        return this._announcerName
    }

    get announceDate(){
        return this._announceDate
    }

    get email(){
        return this._email
    }

    set announcerName(name){
        this._announcerName = name
    }

    set announceDate(date){
        this._announceDate = date
    }

    set email(email){
        this._email = email
    }
}