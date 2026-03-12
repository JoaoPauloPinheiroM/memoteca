import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome = '';
  email = '';
  senha = '';
  erro = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  cadastrar(): void {
    this.erro = '';
    this.authService
      .cadastrar({ nome: this.nome, email: this.email, senha: this.senha })
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: (e) => (this.erro = e.message || 'Falha no cadastro')
      });
  }
}
