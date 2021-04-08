import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit,EventEmitter, Output  } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
 


@Component({
  selector: 'app-authoritation',
  templateUrl: './authoritation.component.html',
  styleUrls: ['./authoritation.component.scss']
})
export class AuthoritationComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {

      
      console.log(user)
      if (user) {
this.open = false;
      }
    })

  }

  ngOnInit(): void {
  }

  provider: any;
  open = true;

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      this.provider = new firebase.auth.FacebookAuthProvider()
      this.afAuth.signInWithPopup(this.provider)
        .then(
          response => {
            console.log(response)
            resolve(response)
            this.open = false
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
      this.open = true;
    
      
    })
 
    
  }

  user = {
    'username': 'immgnc',
    'password': 'qwerty'
  }

  users = {
    'username': '',
    'password': ''
  };
  auth = 'Login'
  x=true

  wel=false;
  change() {
    if (this.auth == 'Login') {
      this.auth = "Registration"
      this.x=!this.x
    }
    else { this.auth ='Login'; this.x=!this.x  }
}

login(form: any) {
  if(this.users.username == this.user.username) {this.wel =true}

  this.valueChange.emit(this.wel)
    console.log(this.users.username);
  console.log(this.users.password);
  console.log (this.wel)
        
      }
}

