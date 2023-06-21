import { Injectable } from '@angular/core';
import { IRecipe } from 'src/app/models/model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

   recipes = [
    {
      name:"Chole Bhature",
      chef:"Chef Manshi",
      incredients:["maida","refined","salt"]
    },
    {
      name:"Sandwich",
      chef:"Chef Abhishek",
      incredients:["bread","mayonnaise","cucumber"]
    }
  ]
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipeByIndex(index:number){
   return this.recipes.slice()[index]
  }
  addRecipe(recipe:IRecipe){
    this.recipes.push(recipe);
  }
}
