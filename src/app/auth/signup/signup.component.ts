import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'; 
import { ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports:[IonicModule,RouterLink,FormsModule]
})
export class SignupComponent   {
 name = '';
  email = '';
  password = '';
  confirmPassword = '';
  agreeTerms = false;

  showConfirmPassword = false;
  showPassword = false;
  constructor(
    private authService: AuthService,
    private toastController: ToastController,
    private router:Router
  ) {}

  async signup() {
    if (this.password !== this.confirmPassword) {
      this.showToast('Passwords do not match');
      return;
    }

    try {
      await this.authService.signup(this.email, this.password);
      this.showToast('Signup successful!');
      this.router.navigate(['/login']);
      // Navigate to login or home
    } catch (error: any) {
      this.showToast(error.message || 'Signup failed');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }
  
}
