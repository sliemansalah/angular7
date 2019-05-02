import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('A test Recipe', 'This is simply a test','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/1/WU1902_Italian-Chicken-Sheet-Pan-Supper_s4x3.jpg.rend.hgtvcom.826.620.suffix/1526332485385.jpeg'),
    new Recipe('Recipe2', 'This test2','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpVH8O-TxKXqUAsRdYje4Rz__pvEB27lDYJbv70b3JUf3-30Si'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
