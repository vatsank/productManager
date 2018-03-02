import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute, ActivationStart, GuardsCheckStart } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private service: AuthenticationService) { 

  }

  ngOnInit() {

   this.loginForm = new FormGroup(
      {
        userName: new FormControl('', { validators: Validators.required,updateOn: 'blur'}),
        passWord: new FormControl('', {validators: Validators.pattern('^[a-zA-Z][0-9]{3}$'), updateOn: 'blur'})
      } );
  }

   submit(){

     const userName = this.loginForm.get('userName').value;
     const passWord = this.loginForm.get('passWord').value;

        this.service.authenticate(userName, passWord);
   }
}
