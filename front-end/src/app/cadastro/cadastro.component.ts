import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  listGenero = ['Masculino', 'Feminino'];
  listTipoAjuda = ['Moradia', 'Comida', 'Emprego']

  //Tipo Usuario
  tipoUsuario: string = 'indefinido';

  //Informacoes Pessois
  nome: String;
  sobrenome: String;
  genero: String;
  idade: Number;
  paisOrigem: String;

  //Situacao
  numeroDependentes: String;
  localizacaoAtual: String;
  comentariosAdicionais: String;

  //FormField
  hide: boolean = true;

  //Calendario
  minDate = new Date(1922, 1, 1);
  maxDate = new Date(2012, 1, 1);

  constructor() {}

  ngOnInit() {
  
  }

}
