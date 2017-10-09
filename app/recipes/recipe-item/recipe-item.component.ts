import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { RecipeService } from "../../common_services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor(private router: Router, private service: RecipeService) { }
  @Input() recip_item: any;
  ngOnInit() {
  }
  openView() {
    this.service.setData(this.recip_item);
    this.router.navigate(['recipes/recipeView', this.recip_item.id ]);
  }
}
