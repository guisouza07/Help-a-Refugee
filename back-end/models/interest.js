import { DateTime } from 'Luxon'

export class Interest{
    constructor(id, announcerName, announcerSirName, announceDate, email, idHelpOffer, sex, announcerBirth){
        //Validações de parâmetros
        if (!id instanceof Number){
            throw new Error(`Erro construtor Interest. Tipo incorreto para o parâmetro id (${typeof(id)})`);
        }
        if (!announcerName instanceof String){
            throw new Error(`Erro construtor Interest. Tipo incorreto para o parâmetro announceName (${typeof(announceName)})`);
        }
        if (!announcerSirName instanceof String){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro announcerSirName (${typeof(announcerSirName)})`);
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
        if (!sex instanceof String){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro sexo (${typeof(sex)})`);
        }
        if (!announcerBirth instanceof DateTime){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro announcerBirth (${typeof(announcerBirth)})`);
        }

        this._id = id
        this._announcerName = announcerName
        this._announcerSirName = announcerSirName
        this._announceDate = announceDate
        this._email = email
        this._idHelpOffer = idHelpOffer
        this._sex = sex
        this._announcerBirth = announcerBirth
    }

    get id(){
        return this._id
    }

    get announcerName(){
        return this._announcerName
    }

    get announcerSirName(){
        return this._announcerSirName
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

    get sex(){
        return this._sex
    }

    get announcerBirth(){
        return this._announcerBirth
    }

    set id(id){
        this._id = id
    }

    set announcerName(name){
        this._announcerName = name
    }

    set announcerSirName(name){
        this._announcerSirName = name
    }

    set announceDate(date){
        this._announceDate = date
    }

    set email(email){
        this._email = email
    }

    set sex(sex){
        this._sex = sex
    }

    set announcerBirth(date){
        this._announcerBirth = date
    }
}