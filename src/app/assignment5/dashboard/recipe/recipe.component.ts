import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from 'src/app/models/model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private recipeSvcs: RecipeService,private router:Router,private activeRouter: ActivatedRoute) { }


  Recipes:IRecipe[];
  ngOnInit( ) {
    this.Recipes  = this.recipeSvcs.getRecipes();
  }
  CreateNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.activeRouter})
  }
}
