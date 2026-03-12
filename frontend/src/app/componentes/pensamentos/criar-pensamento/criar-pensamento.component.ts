import { Pureish } from './../../../../../node_modules/@babel/types/lib/index-legacy.d';
import { AuthService } from "../../auth/auth.service";
import { UsuarioSessao } from "../../auth/auth.service";
import { PensamentoService } from '../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  // isso é uma propriedade -> property binding
  
  pensamento = {
    conteudo: "",
    autoria: "",
    modelo: "modelo1"
  }
  usuario$: Observable<UsuarioSessao | null> = this.authService.usuario$;

  constructor(
    private services: PensamentoService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if(!this.pensamento.autoria){
      this.usuario$.subscribe(usuario => {
        if (usuario) {
          this.pensamento.autoria = usuario.nome;
        }
      });
    }
  }


  criarPensamento() {
    this.services.Criar(this.pensamento).subscribe(() => {
      alert('Pensamento criado com sucesso!');
      this.router.navigate(['/listarpensamento']);
    });
  }
  cancelarPensamento() {
    this.router.navigate(['/listarpensamento']);
  }
}

