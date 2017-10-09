import { Component, OnInit } from '@angular/core';
import { RecipeService } from "../../common_services/recipe.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipesComponent } from "../recipes.component";
import { ShoppingListComponent } from "../../shopping-list/shopping-list.component";
import { AppComponent } from "../../app.component";


@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {
  recipe: any;
  constructor(private service: RecipeService, private route: Router
    , private app_prent: AppComponent,
    private parent: RecipesComponent) { }

  ngOnInit() {
    this.recipe = this.service.recipe;
  }
  delete() {
    this.parent.delete(this.recipe.id);
    this.route.navigate(['recipes']);
  }
  editItem() {
    this.route.navigate(['recipes/recipeAction'], { queryParams: { id: this.recipe.id } });
  }

  addToSP() {
    for (let i = 0; i < this.recipe.ingredients.length; i++) {
      this.app_prent.ingredients.push(Object.assign({}, this.recipe.ingredients[i]));
    }
  }
}
