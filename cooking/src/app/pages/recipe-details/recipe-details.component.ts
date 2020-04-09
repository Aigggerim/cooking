import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }
  public id = this.route.snapshot.paramMap.get('id')
  public recipe
  public ingredientList = []
  public steps = []
  ngOnInit(): void {
    this.recipeService.getRecipe()
      .subscribe(data => {
        this.recipe = data.find(o => o.id == this.id)
        this.ingredientList = this.recipe.ingredients
        this.steps = this.recipe.steps
      })
  }

}
