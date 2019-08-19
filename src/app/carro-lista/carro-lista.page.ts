import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from'@angular/fire/database';
import { Observable } from 'rxjs';
import { Carro } from '../entidade/carro'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-carro-lista',
  templateUrl: './carro-lista.page.html',
  styleUrls: ['./carro-lista.page.scss'],
})
export class CarroListaPage implements OnInit {

  listaCarro: Observable<Carro[]>;

  constructor(private fire: AngularFireDatabase ) {
    this.listaCarro = this.fire.list<Carro>('carro')
    .snapshotChanges().pipe(
      map ( lista => lista.map(linha => ({
        key: linha.payload.key, ... linha.payload.val()
      })))
    )
   }

  ngOnInit() {
  }

}
