import { Component, OnInit } from '@angular/core';
import { Carro } from '../entidade/carro';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage implements OnInit {
  carro: Carro = new Carro();

  constructor(
    private banco: AngularFireDatabase,
    private rota: Router,
    private modalController : ModalController
  ) { }

  ngOnInit() {
  }
  salvar(){
  if(this.carro.key == null){
  this.banco.list('carro').push(this.carro);
  this.carro = new Carro();
  this.rota.navigate(['carro-lista']) ;
  }else{
  this.banco.object('carro/'+this.carro.key).update(this.carro);
  this.modalController.dismiss();
  }
  }
}
