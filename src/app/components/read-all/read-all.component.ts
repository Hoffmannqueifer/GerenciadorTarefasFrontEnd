import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GerenciadorTarefas } from 'src/app/models/GerenciadorTarefas';
import { GerenciadorTarefasService } from 'src/app/services/gerenciador-tarefas.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  constructor(private service: GerenciadorTarefasService, private router: Router) { }

  closed = 0;

  list: GerenciadorTarefas[]= [];
  listFinished: GerenciadorTarefas[] = [];

  ngOnInit(): void {
    this.findAll(); 
  }

  createTarefa(){
    this.router.navigate(['/createtarefa'])
  }

  createAnotacao(){
    this.router.navigate(['/anotacoes'])
  }

  findAll(){
    this.service.findAll().subscribe((resposta)=>{
      resposta.forEach(gerenciadorTarefas => {
        if(gerenciadorTarefas.finalizado){
          this.listFinished.push(gerenciadorTarefas)
        }else{
          this.list.push(gerenciadorTarefas);
        }
      })
      this.closed = this.listFinished.length;
    })
  }

  delete(id: any): void{
    this.service.delete(id).subscribe((resposta) => {
      if(resposta === null){
        this.service.messageDelete('Tarefa deletada com sucesso!!')
        this.list = this.list.filter(gerenciadorTarefas => gerenciadorTarefas.id !== id)
      }
    })
  }

  finalizados(){
    this.router.navigate(['/finalizados']);
  }

  finalizar(item: GerenciadorTarefas):void{
    item.finalizado = true;
    this.service.update(item).subscribe(()=>{
      this.service.messageFinalizada('Tarefa Finalizada com sucesso!!')
      this.list = this.list.filter(gerenciadorTarefas => gerenciadorTarefas.id !== item.id);
      this.closed++;
    })
  }

  // countCloused(): void{
  //   for(let GerenciadorTarefas of this.list){
  //     if(GerenciadorTarefas.finalizado){
  //       this.closed++;
  //     }
  //   }
  // }

}
