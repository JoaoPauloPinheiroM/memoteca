import { Pensamento } from '../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../../pensamento.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''

  }

  constructor(private services: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  excluirPensamento() {
    if (this.pensamento.id) {
      this.services.Excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarpensamento']);
      });
    }

  }

  cancelar() {
    this.router.navigate(['/listarpensamento']);
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.services.BuscarPorId(parseInt(id)).subscribe((pensamento) => {
        this.pensamento = pensamento;
      });
    }
  }

}
