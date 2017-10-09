import { Component, OnInit } from '@angular/core';
import { RecipesComponent } from '../recipes.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../../common_services/recipe.service';

@Component({
  selector: 'app-recipe-add-edit',
  templateUrl: './recipe-add-edit.component.html',
  styleUrls: ['./recipe-add-edit.component.css']
})
export class RecipeAddEditComponent implements OnInit {
  recipe: any = {
    'id': '',
    'name': '',
    'src': '',
    'desc': '',
    'ingredients': []
  };
  constructor(private parent: RecipesComponent, private route: ActivatedRoute, private router: Router, private service: RecipeService) { }
  add() {
    this.recipe.ingredients.push({ 'item': '', 'qty': '' });
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      let id = params['id'];
      if (id !== '-1') {
        let obj = this.parent.recipes[id - 1];
        this.recipe = obj;
      }
    });
  }
  save() {
    let obj = {
      'id': this.parent.recipes.length + 1,
      'name': this.recipe.name,
      'src': this.recipe.src,
      // tslint:disable-next-line:max-line-length
      'desc': this.recipe.desc,
      'ingredients': this.recipe.ingredients
    };
    this.parent.recipes.push(obj);
  }
  remove(i) {
    this.recipe.ingredients = this.recipe.ingredients.splice(i, 1);
  }
  back() {
    window.history.back();
  }
}
