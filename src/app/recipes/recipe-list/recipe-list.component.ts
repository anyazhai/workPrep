import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('test recipe 1', 'test description it is', 'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Images.png'),
    new Recipe('test recipe 2', 'test description it is', 'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Images.png')
  ];

  @Output() recipeClick = new EventEmitter<Recipe>();


  onRecipeClick(recipe:Recipe){
    this.recipeClick.emit(recipe)
  }
}
