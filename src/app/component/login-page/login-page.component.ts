import { Component ,ViewChild} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  NgForm,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUserData } from 'src/app/common/interface';
import {getStorage,setStorage} from 'src/app/common/utills'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  userDetails: FormGroup;
  checkError: boolean = false;
  hide: boolean = true;
  @ViewChild('triggerForm', {static: false})
  triggerForm!: NgForm;

  constructor(
    public fb: FormBuilder,
    public route: Router
  ) {
    this.userDetails = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  
  triggerSubmit() {
    if (!this.triggerForm) {
      console.warn('triggerForm not assigned a value');
    } else {
      if (this.triggerForm.valid) {
        this.triggerForm.ngSubmit.emit();
      }
    }
  }
  
  loginFn () {
    const userData:IUserData =  getStorage('userData')
    this.userDetails.markAllAsTouched();
    if (this.userDetails.valid) {
      if (
        this.userDetails.value.userName == userData.userName &&
        this.userDetails.value.password == userData.password
      ) {
       setStorage('isLoggedIn', 'true');
        this.route.navigate(['/userDetails']);
      } else {
        this.checkError = true;
      }
    }
  };
}
