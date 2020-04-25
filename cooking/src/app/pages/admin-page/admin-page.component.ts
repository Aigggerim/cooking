import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  public list = []
  
  updatable: boolean = false
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipe()
      .subscribe(data => {
        this.list = data
      })
  }
  ngModel = {
    id: 0,
    name: '',
    image: '',
    description: '',
    ingredients: '',
    steps: '',
    author: ''
  }
  onDelete(id) {
    this.recipeService.delete(id).subscribe()
  }
  onUpdate() {
    this.recipeService.update(this.ngModel).subscribe()
  }
  onEdit(id) {
    this.updatable = true
    this.recipeService.getRecipe().subscribe(
      data => {
        let recipe = data.find(o => o.id == id)
        this.ngModel.name = recipe.title
        this.ngModel.id = id
        this.ngModel.description = recipe.description
        this.ngModel.image = recipe.mainImage
        this.ngModel.steps = recipe.steps
        this.ngModel.author = recipe.author.name
        this.ngModel.ingredients = recipe.ingredients
      }
    )
  }
}
