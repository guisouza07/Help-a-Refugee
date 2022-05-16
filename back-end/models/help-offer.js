import { DateTime } from 'Luxon'
import { HelpTypeEnum } from '../enums/help-type';

export class HelpOffer{
    constructor(announcerName, announceDate, location, helpType, description){
        //Validações de parâmetros
        if (!announceName instanceof String){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro announceName(${typeof(announceName)})`);
        }
        if (!announceDate instanceof DateTime){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro announceName(${typeof(announceName)})`);
        }
        if (!location instanceof String){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro announceName(${typeof(announceName)})`);
        }
        if (!helpType instanceof HelpTypeEnum){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro announceName(${typeof(announceName)})`);
        }
        if (!description instanceof String){
            throw new Error(`Erro construtor HelpOffer. Tipo incorreto para o parâmetro announceName(${typeof(announceName)})`);
        }

        this._announcerName = announcerName
        this._announceDate = announceDate
        this._location = location
        this._helpType = helpType
        this._description = description
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