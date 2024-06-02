import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { CheckemailComponent } from './components/checkemail/checkemail.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ActivateaccountComponent } from './components/activateaccount/activateaccount.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Sign Up' },
  {
    path: 'forget-password',
    component: ForgotpasswordComponent,
    title: 'Forget Password',
  },
  { path: 'check-email', component: CheckemailComponent, title: 'Check Email' },
  {
    path: 'reset-password',
    component: ResetpasswordComponent,
    title: 'Reset Password',
  },
  {
    path: 'activate-account',
    component: ActivateaccountComponent,
    title: 'Account Activation',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
