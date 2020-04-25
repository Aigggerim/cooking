import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngModel = {
    id: 0,
    name: '',
    image: '',
    description: '',
    ingredients: '',
    steps: '',
    author: ''
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.recipeService.set(this.ngModel).subscribe()
  }
}
