import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  recipe: any;
  recipes: Array<any> = [
    {
      'id': 1,
      'name': 'Naan',
      'src': 'http://media.gettyimages.com/photos/naan-bread-picture-id157683299?s=612x612',
      // tslint:disable-next-line:max-line-length
      'desc': 'Naan is a leavened, oven-baked flatbread found in the cuisines of Central Asia and South Asia.This distinguishes it from roti, which is usually cooked on a flat or slightly concave iron griddle called a tava. Modern recipes sometimes',
      'ingredients': [
        { 'item': 'Floor', 'qty': 2 },
        { 'item': 'butter', 'qty': 3 }
      ]
    },
    {
      'id': 2,
      'name': 'Chicken Butter Massala',
      'src': 'http://www.ndtv.com/cooks/images/chicken.butter.masala%20%281%29.jpg',
      // tslint:disable-next-line:max-line-length
      'desc': 'How to Make Chicken Butter Masala. Fry till chicken changes colour to golden brown. Add butter to chicken in the pan and then add blended tomatoes. Add red chilli powder, turmeric powder, curry powder, salt and stir lightly till oil separates.',
      'ingredients': [
        { 'item': 'Chicken', 'qty': 2 },
        { 'item': 'Chilli', 'qty': 3 },
        { 'item': 'butter', 'qty': 1 }
      ]
    }
  ];
  constructor() { }
  setData(t) {
    this.recipe = t;
  }
  getData() {
    return this.recipe;
  }
  delete(e){
    this.recipes = this.recipes.splice(e,1);
  }
}
