export class AjudaResponse{

    constructor(id, date, name, lastName, email, location, helpType, description, sex, birth){
        this.id = id
        this.announceDate = date
        this.announcerName = name
        this.announcerSirName = lastName
        this.email = email
        this.location = location
        this.helpType = helpType
        this.description = description
        this.sex = sex
        this.announcerBirth = birth
    }

    id: number
    announceDate: string
    announcerName: string
    announcerSirName: string
    email: string
    location: string
    helpType: string
    description: string
    sex: string
    announcerBirth: string
    
}