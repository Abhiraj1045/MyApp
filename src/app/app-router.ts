import {NgModule} from '@angular/core';
import { HomeComponent } from './assignment5/dashboard/home/home.component';
import { UsersListComponent } from './assignment5/dashboard/users/users-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ServerComponent } from './assignment5/dashboard/server/server.component';
import { EditUserComponent } from './assignment5/dashboard/users/edit/user-edit.component';
import { UserDetailsComponent } from './assignment5/dashboard/users/user-details/user-details.component';
import { RecipeComponent } from './assignment5/dashboard/recipe/recipe.component';
import { RecipeDefaultComponent } from './assignment5/dashboard/recipe/recipe-default/recipe-default.component';
import { RecipeEditComponent } from './assignment5/dashboard/recipe/recipe-edit/recipe-edit.component';
import { RecipeNewComponent } from './assignment5/dashboard/recipe/recipe-new/recipe-new.component';


const routePaths :Routes= [
{path:'',component:HomeComponent},
{path:"servers",component:ServerComponent},
{path:"users",component:UsersListComponent,
  children:[
    {path:':id/detail',component:RecipeNewComponent},
    {path:':id/edit',component:RecipeEditComponent}
  ]},
  {path:"recipe",component:RecipeComponent,
  children:[
    {path:'',component:RecipeDefaultComponent},
    {path:':new',component:RecipeNewComponent},
    {path:':id/edit',component:RecipeEditComponent}
  ]}]

@NgModule({
  exports:[RouterModule],
  imports:[RouterModule.forRoot(routePaths)]
})

export class AppRouterModule{

}
