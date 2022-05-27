import { DateTime } from 'Luxon'
import { HelpTypeEnum } from '../enums/help-type.js';

export class HelpOffer{
    constructor(id, announcerName, announcerSirName, announceDate, location, helpType, description, email, sex, announcerBirth){
        //Validações de parâmetros
        if (!id instanceof Number){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro id (${typeof(id)})`);
        }
        if (!announcerName instanceof String){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro announcerName (${typeof(announcerName)})`);
        }
        if (!announcerSirName instanceof String){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro announcerSirName (${typeof(announcerSirName)})`);
        }
        if (!announceDate instanceof DateTime){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro announceDate (${typeof(announceDate)})`);
        }
        if (!location instanceof String){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro location (${typeof(location)})`);
        }
        if (!helpType instanceof HelpTypeEnum){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro helpType (${typeof(helpType)})`);
        }
        if (!description instanceof String){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro description (${typeof(description)})`);
        }
        if (!email instanceof String){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro email (${typeof(email)})`);
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
        this._location = location
        this._helpType = helpType
        this._description = description
        this._email = email
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

    get location(){
        return this._location
    }

    get helpType(){
        return this._helpType
    }

    get description(){
        return this._description
    }

    get email(){
        return this._email
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

    set location(location){
        this._location = location
    }

    set helpType(helpType){
        this._helpType = helpType
    }

    set description(description){
        this._description = description
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