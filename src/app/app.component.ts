import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  constructor(private loginService: LoginService){}
    ngOnInit(): void {

      const firebaseConfig = {
        apiKey: "AIzaSyAj9EtU4YoHsR_wUnB0OOMvXqh_NMW-zLw",
        authDomain: "listado-personas-1c7a1.firebaseapp.com"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
    isAutenticado(){
     return this.loginService.isAutenticado();
    }
    logOut(){
      this.loginService.logout();
    }
}
