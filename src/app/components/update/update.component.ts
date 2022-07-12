import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NG_VALIDATORS } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GerenciadorTarefas } from 'src/app/models/GerenciadorTarefas';
import { GerenciadorTarefasService } from 'src/app/services/gerenciador-tarefas.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  form = new FormGroup({
    dataParaFinalizar: new FormControl('')
  })
  gerenciadorTarefas: GerenciadorTarefas ={
    titulo: '',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false
  }

  constructor(private router: Router, private service: GerenciadorTarefasService, private activatedRouter: ActivatedRoute, private dateAdapter: DateAdapter<any>) { }

  ngOnInit(): void {
    this.gerenciadorTarefas.id = this.activatedRouter.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void{
    this.dateAdapter.setLocale('pt-br');
    this.formataData();
    this.service.findById(this.gerenciadorTarefas.id).subscribe((resposta)=>{
      this.gerenciadorTarefas = resposta;
    })
  }

  update():void{
    this.service.update(this.gerenciadorTarefas).subscribe((resposta) =>{
      this.service.messageupdateSucesso('Tarefa atualizada com Sucesso!!');
      this.router.navigate(['']);
    }, error =>{
      this.service.messageError('Error ao atualizar sua tarefa!!');
      this.router.navigate(['']);
    })
  }

  cancel(){
    this.router.navigate([''])
  }

  formataData():void{
    let data = new Date(this.gerenciadorTarefas.dataParaFinalizar);
    this.gerenciadorTarefas.dataParaFinalizar = data;
  }

}
