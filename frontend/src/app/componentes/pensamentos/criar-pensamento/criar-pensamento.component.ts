import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  // isso é uma propriedade -> property binding
  pensamento = {
    id: '1',
    conteudo: "Aprendendo angular",
    autoria: "João Paulo",
    modelo: ""
  }

  constructor() { }

  ngOnInit(): void {
  }


  criarPensamento() {
    alert('Pensamento criado com sucesso!')
  }
  cancelarPensamento() {
    alert('Pensamento cancelado!')
  }
}
