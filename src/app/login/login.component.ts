import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private service: AuthenticationService) { }

  ngOnInit() {

   this.loginForm = new FormGroup(
      {
        userName: new FormControl('', Validators.required),
        passWord: new FormControl('', Validators.pattern('^[a-zA-Z][0-9]{3}$'))
      }

         );
  }

   submit(){

     const userName = this.loginForm.get('userName').value;
     const passWord = this.loginForm.get('passWord').value;

        this.service.authenticate(userName, passWord);
   }
}
