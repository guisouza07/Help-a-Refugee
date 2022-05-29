import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AjudaRequest } from '../models/ajudaRequest';
import { AjudaService } from 'src/services/ajudaService';
import { InteressadoRequest } from '../models/interessadoRequest';
import { InteressadoService } from 'src/services/interessadoService';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  listGenero = ['Masculino', 'Feminino', 'Outro'];
  listTipoAjuda = ['Moradia', 'Comida', 'Emprego', 'Outro']

  //Tipo Usuario
  tipoUsuario: string = 'indefinido';

  //Calendario
  minDate = new Date(1922, 1, 1);
  maxDate = new Date(2012, 1, 1);

  //Forms
  formInformacoesPessoais: FormGroup;
  formAjuda: FormGroup;
  formInteressado: FormGroup;
  cadastroAjudaHabilitado: boolean = false;

  ajuda: AjudaRequest;
  interessado: InteressadoRequest;

  constructor(
    private formBuilder: FormBuilder,
    private ajudaService: AjudaService,
    private interessadoService: InteressadoService) {}

  ngOnInit() {  
    this.ajuda = new AjudaRequest();
    this.interessado = new InteressadoRequest();

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

    this.formInteressado = this.formBuilder.group({
      idAjuda:['', Validators.required]
    })
  }

  onSubmitInformacoesPessoais(){
    if(this.tipoUsuario === 'helpOffer'){
      this.ajuda.announcerName = this.formInformacoesPessoais.value.nome
      this.ajuda.announcerSirName = this.formInformacoesPessoais.value.sobrenome
      this.ajuda.email = this.formInformacoesPessoais.value.email
      this.ajuda.announcerBirth = this.formInformacoesPessoais.value.dataNascimento
      this.ajuda.sex = this.formInformacoesPessoais.value.genero
    }
    else{
      this.interessado.announcerName = this.formInformacoesPessoais.value.nome
      this.interessado.announcerSirName = this.formInformacoesPessoais.value.sobrenome
      this.interessado.email = this.formInformacoesPessoais.value.email
      this.interessado.announcerBirth = this.formInformacoesPessoais.value.dataNascimento
      this.interessado.sex = this.formInformacoesPessoais.value.genero
    }
    
  }

  onSubmitAjuda(){
    this.ajuda.helpType = this.formAjuda.value.tipoAjuda
    this.ajuda.location = this.formAjuda.value.localizacao
    this.ajuda.description = this.formAjuda.value.descricao
    this.ajudaService.create(this.ajuda)
  }

  onSubmitInteressado(){
    this.interessado.idHelpOffer = this.formInteressado.value.idAjuda
    this.interessadoService.create(this.interessado)
  }

}
