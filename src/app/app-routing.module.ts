import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './component/login-page/login-page.component'
import {UserDetailsComponent} from './component/user-details/user-details.component'
import {AuthGuard} from './guard/auth.guard'
import {LoginGuard} from './guard/login.guard'
import {ErrorComponent} from './component/error/error.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path:'login',
    component:LoginPageComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'userDetails',
    component: UserDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
