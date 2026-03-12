import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email: string = '';
  senha: string = '';
  erro: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  entrar() {
    this.authService.login(this.email, this.senha).subscribe({
      next: () => this.router.navigate(['/listarpensamento']),
      error: (e) => (this.erro = e.message || 'Falha no login')
    });
  }

}
