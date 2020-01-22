import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';
import { NavController, ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController, public toastController: ToastController, public toastController1: ToastController) { }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Verifique suas credenciais.',
      duration: 2000,
      color: 'danger',
      position: 'top',
    });
    toast.present();
  }

  async presentToasts() {
    const toast = await this.toastController1.create({
      message: 'Usuario logando...',
      duration: 2000,
      color: 'success',
      position: 'top',
    });
    toast.present();
  }

  username: string;
  password: string;
  ngOnInit() {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.presentToasts();
      // this.navCtrl.push(HomePage, {}, { animate: true }); //
    } else {
      this.presentToast();
    }
  }
}
