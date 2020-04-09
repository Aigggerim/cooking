import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecipe } from 'src/assets/interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private _url: string = "assets/data/recipe.json"
  constructor(private http: HttpClient) { }

  getRecipe(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(this._url)
  }
}
