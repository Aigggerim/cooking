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
  public commentList = []
  ngOnInit(): void {
    this.recipeService.getRecipe()
      .subscribe(data => {
        this.recipe = data.find(o => o.id == parseInt(this.id))
        this.ingredientList = this.recipe.ingredients.split(',')
        this.steps = this.recipe.steps.split('.')
      })
    this.recipeService.getCommnets().subscribe(
      commets => {this.commentList = commets}
    )
  }

  public commentData = {
    name: '',
    text: '',
    id: 0
  }

  leave() {
    this.commentData.id = parseInt(this.id)
    this.recipeService.setCommnet(this.commentData).subscribe()
  }

}
