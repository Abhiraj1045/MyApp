import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/models/model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {

  recipe :IRecipe= {name:'',incredients:[],chef:''}
  constructor( private recipeSvcs: RecipeService) { }

  ngOnInit() {
  }
  addIncredient(incredient){
    if(this.recipe.incredients.indexOf(incredient)!=-1){
      alert('Incredient already added');
      return;
    }
    alert(incredient)
    this.recipe.incredients.push(incredient)
  }

  addRecipe(newRecipe: {recipeName:string,chefName:string}){
    this.recipe.name =newRecipe.recipeName as string || '';
    this.recipe.chef =newRecipe.chefName;
    const {name,chef,incredients} = this.recipe
    this.recipeSvcs.addRecipe(
      {
        name , chef,  incredients
      }
    )
  }
}
