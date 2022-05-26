import { Component, OnInit } from '@angular/core';
import { AjudaService } from 'src/services/ajudaService';
import { Ajuda } from '../models/ajuda';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css']
})
export class AjudaComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}
