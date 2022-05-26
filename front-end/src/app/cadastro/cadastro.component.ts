import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  formInformacoesPessoais: FormGroup
  formAjuda: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formInformacoesPessoais = this.formBuilder.group({
      nome:[''],
      sobrenome:[''],
      email:[''],
      dataNascimento:[''],
      genero:['']
    });

    this.formAjuda = this.formBuilder.group({
      tipoAjuda:[''],
      localizacao:[''],
      descricao:['']
    });
  }

  onSubmitInformacoesPessoais(){
    console.log(this.formInformacoesPessoais.value)
  }

  onSubmitAjuda(){
    console.log(this.formAjuda.value)
  }

}
