import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeAddEditComponent } from './recipes/recipe-add-edit/recipe-add-edit.component';
import { RecipeViewComponent } from './recipes/recipe-view/recipe-view.component';
const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'shoppingList',
    component: ShoppingListComponent
  },
  {
    path: 'recipes', component: RecipesComponent,
    children: [
      { path: 'recipeDetail', component: RecipeDetailComponent },
      { path: 'recipeAction', component: RecipeAddEditComponent },
      { path: 'recipeView/:id', component: RecipeViewComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
