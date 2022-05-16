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
}