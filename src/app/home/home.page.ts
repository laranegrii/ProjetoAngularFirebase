import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produtos: any = []

  pedido = {
    cliente: {
      nome: null,
      endereco: null
    },
    produtos: [
      {},
      {}
    ],
    total: {
      preco: null,
      tipo_de_pagamento: null
    },
  }


  constructor(
    private servico: CrudService
  ){
    this.getProdutos();
    // this.produtos = localStorage.getItem('carrinho');
  //   localStorage.setItem("carrinho", JSON.stringify([
  //     {
  //         "nome": "xbacon ultra blaster master rechado",
  //         "preco": "201",
  //         "foto": null,
  //         "id": "QZwbGTJxeXFUA3f5MJzw"
  //     },
  //     {
  //         "foto": null,
  //         "preco": "200",
  //         "nome": "xbacon especial",
  //         "id": "UdZmY5jPZf3vsQqqIWPi"
  //     },
  //     {
  //         "nome": "xbacon",
  //         "preco": "200",
  //         "foto": null,
  //         "id": "eWmNTq2anZShR7t0Ns7d"
  //     },
  //     {
  //         "preco": "123123",
  //         "nome": "Xeeg",
  //         "foto": null,
  //         "id": "rL50CDdxKX1pFetynurI"
  //     },
  //     {
  //         "foto": null,
  //         "preco": "123",
  //         "nome": "asdfasdfasdf",
  //         "id": "w9cc7SYZG8DGFjCtk2HT"
  //     }
  // ]));
  }

  getProdutos() {
    this.servico.fetchAll('produtos')
    .then(resposta => {
      console.log(resposta);
      this.produtos = resposta;
    })
  }
    
}
