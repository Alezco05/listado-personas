import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { RouterLink, Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private router: Router) {}
  token: string;
  login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then(token => {
            console.log(token);
            this.token = token;
            this.router.navigate(["/"]);
          });
      })
      .catch(e => console.log(e));
 
  }
  getIdToken(){
    return this.token;
  }
  isAutenticado(){
    return this.token != null;
  }
  logout(){
    firebase.auth().signOut().then(()=>{
      this.token = null;
      this.router.navigate(["/login"]);
    })
    .catch(e => console.log(e)); ;
  }
}
