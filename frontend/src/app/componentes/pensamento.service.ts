import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from '../componentes/pensamentos/pensamento';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = `${environment.apiUrl}/pensamentos`;
  constructor(private http: HttpClient) { }

  Listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }

  Criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }
  
  Excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }

  BuscarPorId(id: number): Observable<Pensamento> {
    return this.http.get<Pensamento>(`${this.API}/${id}`);
  }

  Editar(pensamento : Pensamento): Observable<Pensamento> {
    return this.http.put<Pensamento>(`${this.API}/${pensamento.id}`, pensamento);
  }
}
