import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.BuscarPorId(parseInt(id)).subscribe((pensamento) => {
        this.pensamento = pensamento;
      });
    }
  }


  editarPensamento() {
    this.service.Editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarpensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarpensamento']);
  }
}
