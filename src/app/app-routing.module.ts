import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path : 'sign-up',
    component : SignUpComponent,
  },
  {
    path : 'user-profile',
    component : UserProfileComponent,
  },
  {
    path : '',
    component : UserProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
