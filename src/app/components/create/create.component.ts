import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anotacao } from 'src/app/models/Anotacao';
import { GerenciadorTarefas } from 'src/app/models/GerenciadorTarefas';
import { GerenciadorTarefasService } from 'src/app/services/gerenciador-tarefas.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  anotacao: Anotacao ={
    id: '',
    anotacao: ''
  }

  gerenciadorTarefas: GerenciadorTarefas ={
    titulo: '',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false
  }

  constructor(private router: Router, private service: GerenciadorTarefasService) { }

  ngOnInit(): void {
  }

  createTarefa(){
    this.formataData();
    this.service.create(this.gerenciadorTarefas).subscribe((resposta)=>{
      this.service.messageAddSucesso('Tarefa adicionada com Sucesso!!');
      this.router.navigate(['']);
    }, error =>{
      this.service.messageError('Falha ao adicionar tarefa');
    })
  }

  cancel(){
    this.router.navigate([''])
  }

  formataData():void{
    let data = new Date(this.gerenciadorTarefas.dataParaFinalizar);
    this.gerenciadorTarefas.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

}
