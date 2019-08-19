import { Component, OnInit } from '@angular/core';
import { Carro } from '../entidade/carro';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage implements OnInit {
  carro: Carro = new Carro();

  constructor(
    private banco: AngularFireDatabase,
    private rota: Router
  ) { }

  ngOnInit() {
  }
salvar(){
  this.banco.list('carro').push(this.carro);
  this.carro = new Carro();
  this.rota.navigate(['carro-lista']);
}
}
