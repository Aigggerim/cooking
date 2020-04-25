import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecipe } from 'src/assets/interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) { }

  private _url: string = "http://localhost:8000/api/recipes/"
  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  getRecipe(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(this._url)
  }
  set(recipe): Observable<IRecipe> {
    return this.http.post<IRecipe>(this._url, recipe, this.httpHeaders)
  }
  getCommnets(): Observable<any> {
    return this.http.get<any>(this._url + 'comment/')
  }
  setCommnet(comment): Observable<any> {
    return this.http.post<any>(this._url + 'comment/', comment, this.httpHeaders)
  }
  delete(id): Observable<any> {
    return this.http.delete<any>(this._url + id + '/')
  }
  update(recipe): Observable<any> {
    return this.http.put<any>(this._url + recipe.id + '/update/', recipe, this.httpHeaders)
  }

}
