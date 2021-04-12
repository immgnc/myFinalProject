import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-authoritation',
  templateUrl: './authoritation.component.html',
  styleUrls: ['./authoritation.component.scss'],
})
export class AuthoritationComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  constructor(private as: AuthService) {}

   

  ngOnInit(): void {
  

    this.as.isAuthUpdate.subscribe(
      (isAuth) => {
        this.open = !isAuth;
        console.log( isAuth);
          
      }
    );

     

    console.log(this.open)
    console.log(this.as.isAuth)
  }

  
    
  provider: any;
  open: any;

  doFacebookLogin() {
    this.as.doFacebookLogin();
    
  }

  fcLogOut() {
    this.as.logOut();
    
  }

  user = {
    username: 'immgnc',
    password: 'qwerty',
  };

  users = {
    username: '',
    password: '',
  };
  auth = 'Login';
  x = true;

  wel = false;
  change() {
    if (this.auth == 'Login') {
      this.auth = 'Registration';
      this.x = !this.x;
    } else {
      this.auth = 'Login';
      this.x = !this.x;
    }
  }

  login(form: any) {
    if (this.users.username == this.user.username) {
      this.wel = true;
    }

    this.valueChange.emit(this.wel);
    console.log(this.users.username);
    console.log(this.users.password);
    console.log(this.wel);
  }
}
