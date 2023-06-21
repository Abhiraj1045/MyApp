import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { CounterComponent } from './assignment4/counter/counter.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { HeadersComponent } from './assignment5/headers/headers.component';
import { HomeComponent } from './assignment5/dashboard/home/home.component';
import { ServerdetailsComponent } from './assignment5/dashboard/server/serverdetails/serverdetails.component';
import { UsersListComponent } from './assignment5/dashboard/users/users-list.component';
import { AppRouterModule } from './app-router';
import { ServerComponent } from './assignment5/dashboard/server/server.component';
import { EditUserComponent } from './assignment5/dashboard/users/edit/user-edit.component';
import { UserDetailsComponent } from './assignment5/dashboard/users/user-details/user-details.component';
import { RecipeComponent } from './assignment5/dashboard/recipe/recipe.component';
import { RecipeDefaultComponent } from './assignment5/dashboard/recipe/recipe-default/recipe-default.component';
import { RecipeEditComponent } from './assignment5/dashboard/recipe/recipe-edit/recipe-edit.component';
import {  RecipeNewComponent } from './assignment5/dashboard/recipe/recipe-new/recipe-new.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ServerComponent,
    Assignment4Component,
    GameControlComponent,
    CounterComponent,
    Assignment5Component,
    HeadersComponent,
    HomeComponent,
    ServerdetailsComponent,
    UsersListComponent,
    EditUserComponent,
    UserDetailsComponent,
    RecipeComponent,
    RecipeDefaultComponent,
    RecipeEditComponent,
    RecipeNewComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
