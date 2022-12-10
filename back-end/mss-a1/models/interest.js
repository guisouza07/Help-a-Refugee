

export class Interest{
    constructor(id, announcerName, announcerSirName, announceDate, email, idHelpOffer, sex, announcerBirth){

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