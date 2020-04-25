import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateRecipeComponent } from './pages/create-recipe/create-recipe.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'create-recipe', component: CreateRecipeComponent},
  {path: 'admin-page', component: AdminPageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: ':id', component: RecipeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
