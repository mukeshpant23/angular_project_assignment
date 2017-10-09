import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeAddEditComponent } from './recipes/recipe-add-edit/recipe-add-edit.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeViewComponent } from './recipes/recipe-view/recipe-view.component';
import { RecipeService } from "./common_services/recipe.service";
@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeAddEditComponent,
    RecipeItemComponent,
    RecipeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
