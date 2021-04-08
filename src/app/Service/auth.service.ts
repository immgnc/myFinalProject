import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {

      
      console.log(user)
      
      
    })

    

  }
  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider()
      this.afAuth.signInWithPopup(provider)
        .then(
          response => {
            console.log(response)
            resolve(response)
           
          },
          error => {
            console.log(error)
            reject (error)
          }
      )
    })
  }

  logOut() {
    this.afAuth.signOut().then(() => {
        
      console.log('Log Out')
      
    
      
    })
 
    
  }
}
