import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Ajuda } from "src/app/models/ajuda";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { ConditionalExpr } from "@angular/compiler";

@Injectable({
  providedIn: 'root',
})

export class AjudaService{

    private readonly apiURL = environment.apiURL;
    private readonly routePost = '/help-offer';
    private readonly routeGet = '/help-offers';

    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    });

    private options = { headers: this.headers };

    constructor(private http: HttpClient){
    }

    get(){
        return this.http.get(this.apiURL + this.routeGet)
    }

    create(ajuda: Ajuda){
        console.log(this.options)
        return this.http.post(this.apiURL + this.routePost, ajuda, this.options)
            .subscribe(
                (data) => {

                },
                (error) => {
                    console.log(error);
                }
            )
    }

}