

export class HelpOffer{
    constructor(id, announcerName, announcerSirName, announceDate, location, helpType, description, email, sex, announcerBirth){

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