import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  listGenero = ['Masculino', 'Feminino'];

  //Dados de Acesso
  email: String;
  senha: String;
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

  constructor() {}

  ngOnInit() {
  
  }

}
