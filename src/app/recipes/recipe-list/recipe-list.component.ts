import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'simply a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cold-spiced-chicken-recipe-1557951578.jpg?crop=1xw:1xh;center,top&resize=480:*'),
    new Recipe('Chicken Biryani', 'chicken biryani from Pakistan', 'https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-12-1200x1799.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
