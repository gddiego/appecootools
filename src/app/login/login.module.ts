import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatButtonModule,
    LoginPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      }
    ]),
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule { }
