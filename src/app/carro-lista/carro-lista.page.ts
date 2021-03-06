import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from'@angular/fire/database';
import { Observable } from 'rxjs';
import { Carro } from '../entidade/carro'
import { map } from 'rxjs/operators';
import { CarroPage } from '../carro/carro.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carro-lista',
  templateUrl: './carro-lista.page.html',
  styleUrls: ['./carro-lista.page.scss'],
})
export class CarroListaPage implements OnInit {

  listaCarro: Observable<Carro[]>;


  constructor(private fire: AngularFireDatabase,
  private modal: ModalController) {
    this.listaCarro = this.fire.list<Carro>('carro')
    .snapshotChanges().pipe(
      map ( lista => lista.map(linha => ({
        key: linha.payload.key, ... linha.payload.val()
      })))
    )
   }
   excluir(key){
     this.fire.list('carro').remove(key);
     alert("Excluido com sucesso");
   }

  ngOnInit() {
  }
  async alterar(carro){
  const tela = await this.modal.create({
  component: CarroPage, componentProps : { carro : carro }
  });
  tela.present();
  }
}
