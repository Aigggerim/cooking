import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private auth: AuthService) { }
  
  public login: boolean = true

  NgModel = {
    email: '',
    password: '',
    secondpassword: ''
  }
  
  ngOnInit(): void {
  }

  onClick(): void {
    this.auth.Login(this.NgModel)
  }

  onRegisterClick(): void {
    this.auth.Register(this.NgModel)
  }
}
