import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IUserData } from 'src/app/common/interface';
import { getStorage, setStorage } from 'src/app/common/utills';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  userData: IUserData = getStorage('userData');

  constructor(public route: Router, public translate: TranslateService) {}
  onLogout() {
    setStorage('isLoggedIn', 'false');
    this.route.navigate(['/login']);
  }
}
