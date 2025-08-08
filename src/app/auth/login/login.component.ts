import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule,RouterLink,FormsModule]
})
export class LoginComponent  {
 email = '';
  password = '';

    constructor(
      private authService: AuthService,
      private toastController: ToastController,
      private router:Router
    ) {}

  async login(){
    try{

      await this.authService.login(this.email, this.password);
      this.showToast('login successful!');
      this.router.navigate(["/home"])
    }catch(error:any){
           this.showToast(error.message || 'login failed');
    }
  }
  
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger',
    });
      await toast.present();
}


}
