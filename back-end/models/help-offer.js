import { DateTime } from 'Luxon'
import { HelpTypeEnum } from '../enums/help-type.js';

export class HelpOffer{
    constructor(id, announcerName, announceDate, location, helpType, description){
        //Validações de parâmetros
        if (!id instanceof Number){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro id (${typeof(id)})`);
        }
        if (!announcerName instanceof String){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro announceName (${typeof(announceName)})`);
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

        this._id = id
        this._announcerName = announcerName
        this._announceDate = announceDate
        this._location = location
        this._helpType = helpType
        this._description = description
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

    get location(){
        return this._location
    }

    get helpType(){
        return this._helpType
    }

    get description(){
        return this._description
    }

    set announcerName(name){
        this._announcerName = name
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
}