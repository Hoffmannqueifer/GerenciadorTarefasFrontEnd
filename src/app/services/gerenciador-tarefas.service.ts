import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GerenciadorTarefas } from '../models/GerenciadorTarefas';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTarefasService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  create(gerenciadorTarefas: GerenciadorTarefas):Observable<GerenciadorTarefas>{
    return this.http.post<GerenciadorTarefas>(this.baseUrl, gerenciadorTarefas)
  }

  findAll(): Observable<GerenciadorTarefas[]>{
    return this.http.get<GerenciadorTarefas[]>(`${this.baseUrl}/list`);
  }

  findById(id: any): Observable<GerenciadorTarefas>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<GerenciadorTarefas>(url);
  }

  update(gerenciadorTarefas: GerenciadorTarefas): Observable<GerenciadorTarefas>{
    const url = `${this.baseUrl}/${gerenciadorTarefas.id}`;
    return this.http.put<GerenciadorTarefas>(url, gerenciadorTarefas);
  }

  delete(id:any): Observable<void>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
  messageDelete(msg?: String): void{
    this.snack.open(`${msg}`, 'X',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000,
      panelClass: 'colorMessage'
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
  messageAddSucesso(msg?: String): void{
    this.snack.open(`${msg}`, 'X',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000,
      panelClass: 'colorMessageAddSucesso'
    })
  }
  messageupdateSucesso(msg?: String): void{
    this.snack.open(`${msg}`, 'X',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000,
      panelClass: 'colorMessageUpadateSucesso'
    })
  }
  messageFinalizada(msg?: String): void{
    this.snack.open(`${msg}`, 'X',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000,
      panelClass: 'colorMessageFinalizada'
    })
  }
}
