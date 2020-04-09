import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  public list = []
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipe()
      .subscribe(data => {
        this.list = data
      })
  }

}
