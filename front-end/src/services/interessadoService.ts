import { HttpClient, HttpHeaders } from "@angular/common/http";
import { InteressadoRequest} from "src/app/models/interessadoRequest";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})

export class InteressadoService{

    private readonly apiURL = environment.apiURL;
    private readonly routePost = '/interest';
    private readonly routeGet = '/interests';

    private header = {
        'Content-Type': 'application/json'
    };
      
    private options = {                                                                                                                                                                                 
        headers: new HttpHeaders(this.header), 
    };
      
    constructor(private http: HttpClient){
    }

    create(interessado: InteressadoRequest){
        return this.http.post(this.apiURL + this.routePost, interessado, this.options)
            .subscribe(
                (data) => {
                    console.log(data)
                },
                (error) => {
                    console.log(error)
                }
            )
    }
}