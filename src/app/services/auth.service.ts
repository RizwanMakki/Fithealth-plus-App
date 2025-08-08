import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = getAuth();

  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  login(email:string , password: string){
    return signInWithEmailAndPassword(this.auth , email , password);
  }
}
