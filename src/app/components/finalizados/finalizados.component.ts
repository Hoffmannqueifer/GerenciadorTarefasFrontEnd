import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GerenciadorTarefas } from 'src/app/models/GerenciadorTarefas';
import { GerenciadorTarefasService } from 'src/app/services/gerenciador-tarefas.service';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit {

  listFinished: GerenciadorTarefas[] = [];
  constructor(private service: GerenciadorTarefasService, private router :Router) { }
  

  ngOnInit(): void {
    this.findAll(); 
  }

  findAll(){
    this.service.findAll().subscribe((resposta)=>{
      resposta.forEach(gerenciadorTarefas => {
        if(gerenciadorTarefas.finalizado){
          this.listFinished.push(gerenciadorTarefas)
        }
      })
    })
  }

  voltar(){
    this.router.navigate(['']); 
  }

}
