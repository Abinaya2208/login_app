import { Component } from '@angular/core';
import { hasStorage, setStorage } from './common/utills';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userLoginData = {
    userName: 'abinaya',
    password: 'Test@123',
    age: 23,
    gender: 'Female',
  }
  constructor() {}
  ngOnInit() {
    if (!hasStorage('isLoggedIn')) {
      setStorage('isLoggedIn', 'false');
    }

    if (!hasStorage('seletedLanguage')) {
      setStorage('seletedLanguage', 'en');
    }
    setStorage('userData', this.userLoginData);
  }
}
