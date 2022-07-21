import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { ListagemFeira } from 'src/app/models/ListagemFeira';
import { ListagemFeiraService } from 'src/app/services/listagem-feira.service';
const ELEMENT_DATA: ListagemFeira[] = [
  {produto: '', quantidade: '', valor: '', subtotal: ''}
];
@Component({
  selector: 'app-listagem-feira',
  templateUrl: './listagem-feira.component.html',
  styleUrls: ['./listagem-feira.component.css']
})
export class ListagemFeiraComponent implements OnInit {

  formulario!:FormGroup;
  listagem!: ListagemFeira[];
  displayedColumns = ['produto', 'quantidade', 'valor', 'acoes'];
  listagemFeira:ListagemFeira = {
    ordenacao: '',
    produto: '',
    quantidade: '',
    valor: '',
    subtotal: ''
  }
  
  
  constructor(private router: Router, private formBuilder: FormBuilder, private service: ListagemFeiraService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      dataParaFinalizar: [],
      produto: ['', [Validators.required, Validators.minLength(2)]],
      quantidade: ['', [Validators.required]],
      valor: [''],
      subtotal: []
    });

    this.buscarLista();
  }

  salvarLista(){
    let calc = parseInt(this.listagemFeira.quantidade) * this.listagemFeira.valor;
    calc += parseFloat(this.listagemFeira.subtotal)? parseFloat(this.listagemFeira.subtotal) : 0 ;
    this.listagemFeira.subtotal = calc;
    this.service.create(this.listagemFeira).subscribe((resposta)=>{
      this.listagem[0] = resposta;
      this.buscarLista();
      this.limpaCampos();
    })
  }
  
  buscarLista(){
    this.service.read().subscribe((resposta) =>{
      this.listagem = resposta;
      this.listagemFeira.subtotal = resposta.reduce((acumulador, valorAual)=>
      acumulador + (valorAual.quantidade * valorAual.valor), 0)
    })
  }

  calcProdutos(){
    const calc = this.listagemFeira.quantidade * this.listagemFeira.valor
    return this.listagemFeira.subtotal = calc.toString();
  }

  
  cancel(){
    this.router.navigate([''])
  }

  limpaCampos(){
    this.listagemFeira.produto = '';
    this.listagemFeira.quantidade = '';
    this.listagemFeira.valor = '';
    return this.listagemFeira.produto, this.listagemFeira.quantidade, this.listagemFeira.valor;
  }

  deleteProduto(id: any): void{
    this.service.delete(id).subscribe((resposta =>{
      this.buscarLista();
    }))
  }

  deleteAll(): void{
    this.service.deleteAll().subscribe((resposta =>{
      this.buscarLista();
      this.listagemFeira.subtotal = '';
    }))
  }

}
