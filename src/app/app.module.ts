import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { TimeTaskComponent } from './task/time-task/time-task.component';
//import { PlaceTaskComponent } from './task/place-task/place-task.component';
import { LoginComponent } from './login/login/login.component';
//import { NewUserComponent } from './login/new-user/new-user.component';
import { CategoryComponent } from './calendar/categories/category/category.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';     
import { AppRoutingModule } from './app-routing.module';
import { NewMemberComponent } from './login/new-member/new-member.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewMemberComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
