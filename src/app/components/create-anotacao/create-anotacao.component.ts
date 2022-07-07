import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anotacao } from 'src/app/models/Anotacao';
import { AnotacaoService } from 'src/app/services/anotacao.service';

@Component({
  selector: 'app-create-anotacao',
  templateUrl: './create-anotacao.component.html',
  styleUrls: ['./create-anotacao.component.css']
})
export class CreateAnotacaoComponent implements OnInit {

  variavelControle: boolean = false;
  anotacao: Anotacao = {
    anotacao: ''
  }
  constructor(private router: Router, private service: AnotacaoService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.anotacao.id = this.activatedRouter.snapshot.paramMap.get("id")!;
    this.findById();
  }

  salvarAnotacao(){
    if(this.variavelControle === false){
      this.service.create(this.anotacao).subscribe((resposta)=>{
        this.service.messageAddSucesso('Anotação salva com Sucesso!!');
        this.router.navigate(['']);
      }, error =>{
        this.service.messageError('Falha ao salvar sua anotação!!');
      })
      this.variavelControle = true;
    }if(this.variavelControle === true){
      this.service.update(this.anotacao).subscribe((resposta)=>{
        this.service.messageAddSucesso('Anotação Atualizada com Sucesso!!');
        this.router.navigate(['']);
      }, error =>{
        this.service.messageError('Falha ao Atualizar sua anotação!!');
      })
    }
  }

  findById(): void{
    this.service.findById(this.anotacao.id).subscribe((resposta)=>{
      this.anotacao = resposta;
    })
  }

  cancel(){
    this.router.navigate(['']);
  }

}
