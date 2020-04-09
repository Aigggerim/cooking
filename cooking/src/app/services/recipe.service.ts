import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecipe } from 'src/assets/interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) { }

  private _url: string = "assets/data/recipe.json"
  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  getRecipe(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(this._url)
  }

  set(recipe): Observable<IRecipe> {
    return this.http.post<IRecipe>(this._url, recipe, this.httpHeaders)
  }
}
