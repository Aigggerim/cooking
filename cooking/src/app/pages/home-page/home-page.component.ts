import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public recipeList = []
  constructor(private recipe: RecipeService) { }

  ngOnInit(): void {
    this.recipe.getRecipe()
      .subscribe(recipe => {
        this.recipeList = recipe
      })
  }

}
