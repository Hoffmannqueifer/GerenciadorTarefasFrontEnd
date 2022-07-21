import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListagemFeira } from '../models/ListagemFeira';

@Injectable({
  providedIn: 'root'
})
export class ListagemFeiraService {

  baseUrl = environment.baseListagemFeiraUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  create(listagemFeira: ListagemFeira):Observable<ListagemFeira>{
    return this.http.post<ListagemFeira>(this.baseUrl, listagemFeira).pipe(map(obj=> obj))
  }

  read(): Observable<ListagemFeira[]>{
    return this.http.get<ListagemFeira[]>(this.baseUrl).pipe(
      map(obj=>obj)
    )
  }

  delete(id:any): Observable<void>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  deleteAll(): Observable<ListagemFeira[]>{
    const url = `${this.baseUrl}`;
    return this.http.delete<ListagemFeira[]>(url);
  }
}
