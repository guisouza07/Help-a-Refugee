import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ajuda } from '../models/ajuda';
import { AjudaService } from 'src/services/ajudaService';

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

  //Calendario
  minDate = new Date(1922, 1, 1);
  maxDate = new Date(2012, 1, 1);

  //Forms
  formInformacoesPessoais: FormGroup;
  formAjuda: FormGroup;
  cadastroAjudaHabilitado: boolean = false;

  ajuda: Ajuda;

  constructor(
    private formBuilder: FormBuilder,
    private ajudaService: AjudaService) {}

  ngOnInit() {  
    this.ajuda = new Ajuda();

    this.formInformacoesPessoais = this.formBuilder.group({
      nome:['', Validators.required],
      sobrenome:['', Validators.required],
      email:['', [Validators.required, Validators.email]],  
      dataNascimento:['', Validators.required],
      genero:['', Validators.required]
    });

    this.formAjuda = this.formBuilder.group({
      tipoAjuda:['', Validators.required],
      localizacao:['', Validators.required],
      descricao:['', Validators.required]
    });
  }

  onSubmitInformacoesPessoais(){
    this.ajuda.nome = this.formInformacoesPessoais.value.nome
    this.ajuda.email = this.formInformacoesPessoais.value.email
  }

  onSubmitAjuda(){
    this.ajuda.tipoAjuda = this.formAjuda.value.tipoAjuda
    this.ajuda.localizacao = this.formAjuda.value.localizacao
    this.ajuda.descricao = this.formAjuda.value.descricao
    this.ajudaService.create(this.ajuda)
  }

}
