import { Pureish } from './../../../../../node_modules/@babel/types/lib/index-legacy.d';
import { PensamentoService } from './../../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private services: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
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

