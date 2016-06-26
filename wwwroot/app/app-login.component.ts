 

import { Component, OnInit } from '@angular/core'
import { FacebookConnect } from './services/facebook-connect'
 
@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'app-login.component.html'
})
export class AppLoginComponent implements OnInit {
  // constructor
  constructor(private facebookConnect: FacebookConnect) { }

  // initialize 
  ngOnInit() { 
    // check facebook connecting status
    this.facebookConnect.initSDK(() => {
      this.facebookConnect.getLoginStatus(this.loggedIn.bind(this))
    })
  }

  // login status change
  loggedIn(accessToken: String) {
    console.log(accessToken)
  }

  onLoginClicked() {
    this.facebookConnect.login(this.loggedIn.bind(this))
  }

}