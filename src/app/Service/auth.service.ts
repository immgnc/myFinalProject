import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import firebase from 'firebase/app';

 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Output() isAuthUpdate = new EventEmitter();
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      if (!!user) {
        this.isAuth = true;
        this.isAuthUpdate.emit(this.isAuth);
      }
    });
  }

   
 
   
     
    

  isAuth: any = false;
  user: any;

  get getUser() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    return this.user;
  }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.signInWithPopup(provider).then(
        (response: any) => {
          this.saveUser(response.additionalUserInfo.profile);
          resolve(response);
          console.log(this.getUser);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  logOut() {
    this.afAuth.signOut().then(() => {
      this.isAuth = false;
      this.isAuthUpdate.emit(this.isAuth);
    });
  }

  saveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
