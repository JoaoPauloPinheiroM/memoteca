import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

interface UsuarioSessao {
  id?: number;
  nome: string;
  email: string;
}

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  usuario$: Observable<UsuarioSessao | null> = this.authService.usuario$;

  constructor(private authService: AuthService, private router: Router) {}

  sair(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
