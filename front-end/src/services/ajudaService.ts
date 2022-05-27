import { HttpClient } from "@angular/common/http";
import { Ajuda } from "src/app/models/ajuda";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AjudaService{

    private readonly url = '';

    constructor(private http: HttpClient){}

    get(){
        return this.http.get(this.url)
    }

    create(ajuda: Ajuda){
        return this.http.post(this.url, ajuda)
    }

}