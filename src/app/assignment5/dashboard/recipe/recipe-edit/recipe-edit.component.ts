import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: { name: string; chef: string; incredients: string[]; };


  constructor(private recipeSvcs:RecipeService,private activeRoute:ActivatedRoute) { }
  ngOnInit( ) {
    this.activeRoute.params.subscribe((param){
      this.recipe = this.recipeSvcs.getRecipeByIndex(param['id'])
    })
  }
}
