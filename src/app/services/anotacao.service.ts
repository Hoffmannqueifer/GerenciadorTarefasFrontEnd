import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Anotacao } from '../models/Anotacao';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoService {

  baseAnotacaoUrl = environment.baseAnotacaoUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  create(anotacao: Anotacao):Observable<Anotacao>{
    return this.http.post<Anotacao>(this.baseAnotacaoUrl, anotacao)
  }

  findById(id: any): Observable<Anotacao>{
    const url = `${this.baseAnotacaoUrl}/${id}`;
    return this.http.get<Anotacao>(url);
  }

  update(anotacao: Anotacao): Observable<Anotacao>{
    const url = `${this.baseAnotacaoUrl}/${anotacao.id}`;
    return this.http.put<Anotacao>(url, anotacao);
  }

  messageAddSucesso(msg?: String): void{
    this.snack.open(`${msg}`, 'X',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000,
      panelClass: 'colorMessageAddSucesso'
    })
  }

  messageError(msg?: String): void{
    this.snack.open(`${msg}`, 'X',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000,
      panelClass: 'colorMessage'
    })
  }
}
