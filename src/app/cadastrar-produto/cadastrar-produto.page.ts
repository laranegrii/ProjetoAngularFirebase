import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.page.html',
  styleUrls: ['./cadastrar-produto.page.scss'],
})
export class CadastrarProdutoPage implements OnInit {

  produto = {
    nome: null,
    preco: null,
    foto: null
  }

  constructor(
    private servico: CrudService
  ) { }

  ngOnInit() {
  }


  salvar() {
    this.servico.insert(this.produto, 'produtos');
  }




}
