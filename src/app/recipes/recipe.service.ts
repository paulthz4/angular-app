import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe} from "./recipe.model";

@Injectable()
export class RecipeService{
  // recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'yummy german food.', 
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cold-spiced-chicken-recipe-1557951578.jpg?crop=1xw:1xh;center,top&resize=480:*',
    [
      new Ingredient('meat', 1),
      new Ingredient('french Fries', 20)
    ]),
    new Recipe('Chicken Biryani', 'chicken biryani from Pakistan.', 'https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-12-1200x1799.jpg',
    [
      new Ingredient('Chicken', 2),
      new Ingredient('Rice', 3),
      new Ingredient('Cream', 2),
      new Ingredient('Yogurt', 2),
    ])
  ];
  
  constructor(private slService: ShoppingListService){}
  
  
  
  getRecipes(){
    return this.recipes.slice();
  }
  
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
  
  getRecipe(index: number){
    return this.recipes[index];
  }
}