import { DateTime } from 'Luxon'

export class Interest{
    constructor(id, announcerName, announceDate, email, idHelpOffer){
        //Validações de parâmetros
        if (!id instanceof Number){
            throw new Error(`Erro construtor Interest. Tipo incorreto para o parâmetro id (${typeof(id)})`);
        }
        if (!announcerName instanceof String){
            throw new Error(`Erro construtor Interest. Tipo incorreto para o parâmetro announceName (${typeof(announceName)})`);
        }
        if (!announceDate instanceof DateTime){
            throw new Error(`Erro construtor Interest. Tipo incorreto para o parâmetro announceDate (${typeof(announceDate)})`);
        }
        if (!email instanceof String){
            throw new Error(`Erro construtor Interest. Tipo incorreto para o parâmetro email (${typeof(email)})`);
        }
        if (!idHelpOffer instanceof Number){
            throw new Error(`Erro construtor Interest. Tipo incorreto para o parâmetro idHelpOffer (${typeof(idHelpOffer)})`);
        }

        this._id = id
        this._announcerName = announcerName
        this._announceDate = announceDate
        this._email = email
        this._idHelpOffer = idHelpOffer
    }

    get id(){
        return this._id
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

    get idHelpOffer(){
        return this._idHelpOffer
    }

    set id(id){
        this._id = id
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