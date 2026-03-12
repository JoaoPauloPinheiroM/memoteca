import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, Observable, switchMap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Usuario } from "./usuario";


export type UsuarioSessao = Omit<Usuario, 'senha'>;

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly API = `${environment.apiUrl}/usuarios`;
    private readonly STORAGE_KEY = 'usuarioLogado';
    private usuarioSubject = new BehaviorSubject<UsuarioSessao | null>(null);
    usuario$ = this.usuarioSubject.asObservable();

    constructor(private http: HttpClient) {
        this.carregarUsuarioSessao();
    }

    cadastrar(usuario: Usuario): Observable<Usuario> {
        return this.http.get<Usuario[]>(`${this.API}?email=${encodeURIComponent(usuario.email)}`).pipe(
            switchMap(usuarios => {
                if (usuarios.length > 0) {
                    return throwError(() => new Error('Email já cadastrado'));
                }
                return this.http.post<Usuario>(this.API, usuario);
            })
        );
    }

    login(email: string, senha: string): Observable<UsuarioSessao> {
        return this.http
        .get<Usuario[]>(`${this.API}?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`)
        .pipe(
            map(usuarios => {
                if (usuarios.length === 0) {
                    throw new Error('Email ou senha inválidos');
                }
                const { id, nome, email } = usuarios[0];
                const usuarioSessao: UsuarioSessao = {
                    id,
                    nome,
                    email
                };
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(usuarioSessao));
                this.usuarioSubject.next(usuarioSessao);
                return usuarioSessao;
            })
        );
    }

    logout(): void {
        localStorage.removeItem(this.STORAGE_KEY);
        this.usuarioSubject.next(null);
    }

    usuarioLogado(): UsuarioSessao | null {
        return this.usuarioSubject.value;
    }

    estaAutenticado(): boolean {
        return !!this.usuarioSubject.value;
    }

    private carregarUsuarioSessao(): void {
        const raw = localStorage.getItem(this.STORAGE_KEY);
        if(!raw) {
            return;
        }
        try{
            const usuario = JSON.parse(raw) as UsuarioSessao;
            this.usuarioSubject.next(usuario);
        }catch{
            localStorage.removeItem(this.STORAGE_KEY);
            this.usuarioSubject.next(null);
        }
    }
}