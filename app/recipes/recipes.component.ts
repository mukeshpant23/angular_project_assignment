import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RecipeService } from "../common_services/recipe.service";
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: any;
  recipes: Array<any>;
  selectedItem: any;
  constructor(private router: Router, private service: RecipeService) {
    this.recipes = this.service.recipes;
  }

  ngOnInit() {
  }
  addItem() {
    this.router.navigate(['recipes/recipeAction'], { queryParams: { id: '-1' } });
  }
  delete(e) {
    let a = this.recipes.splice(e - 1, 1);
    this.recipes = [...a];
  }
  open(){
    console.log('hello')
  }
}
