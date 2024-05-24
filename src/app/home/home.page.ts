import { Component } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
imagemPrincipal='../../assets/img/mulher1.jpg'

  constructor(public loadingCtrl:LoadingController, public navCtrl:NavController) {}

async aplicarEfeito (id:string) {
  let loading=await this.loadingCtrl.create({
    message:'finalizando alterações',
    duration:1000,
  }) 
  loading.present();
  this.imagemPrincipal='../../assets/img/'+ id +'.jpg'
}

abrirNovaPagina () {
  this.navCtrl.navigateForward('popover')
}

}
