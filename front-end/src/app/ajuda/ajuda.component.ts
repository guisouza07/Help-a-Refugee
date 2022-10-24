import { Component, OnInit } from '@angular/core';
import { AjudaService } from 'src/services/ajudaService';
import { AjudaResponse } from '../models/ajudaResponse';


@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css']
})
export class AjudaComponent implements OnInit {

  ajudas: AjudaResponse[];

  constructor(private ajudaService: AjudaService) { }

  ngOnInit() {
    this.ajudaService.get().subscribe(
      (data) => {
        let results = data as Array<any>
          this.ajudas = results.map(
            (ajuda) => {
              return new AjudaResponse(
                  ajuda.id, 
                  ajuda.date, 
                  ajuda.name, 
                  ajuda.lastName, 
                  ajuda.email, 
                  ajuda.location, 
                  ajuda.helpType, 
                  ajuda.description, 
                  ajuda.sex,
                  ajuda.birth 
                  )})
      }
    )
  }
}
