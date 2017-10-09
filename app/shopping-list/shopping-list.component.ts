import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private app_parent: AppComponent) { }
  ingredients: Array<any> = [];
  obj: any = { item: '', qty: '' };
  ngOnInit() {
    this.ingredients = this.app_parent.ingredients;
  }
  add() {
    let a = Object.assign({}, this.obj);
    // this.ingredients.push(a);
    this.app_parent.ingredients.push(a);
    this.obj = { item: '', qty: '' };
  }
  delete() {
    // this.ingredients.pop();
    this.app_parent.ingredients.pop();
  }

}
