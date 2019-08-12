import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from  '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireDatabaseModule,
AngularFireModule.initializeApp({
  apiKey: "AIzaSyCls3nL-mCjDwdku6Kl-BCPjvEVQlfPImE",
    authDomain: "cu-de-engole-pinto.firebaseapp.com",
    databaseURL: "https://cu-de-engole-pinto.firebaseio.com",
    projectId: "cu-de-engole-pinto",
    storageBucket: "",
    messagingSenderId: "1072536035538",
    appId: "1:1072536035538:web:f93cc1712201536a"

})],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
