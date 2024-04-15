import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('test recipe 1', 'test description it is', 'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Images.png'),
        new Recipe('test recipe 2', 'test description it is', 'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Images.png')
      ];

    getRecipes(){
        return this.recipes.slice(); //since objects are shared by reference and any change made on the refernce will also reflect on this original object, calling slice on the object returns the new copy of the object
    }
}