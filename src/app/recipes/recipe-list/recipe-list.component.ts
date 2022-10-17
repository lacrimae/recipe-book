import {Component, OnInit} from '@angular/core';
import {Recipe} from "../model/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe',
      'This is just a test',
      'https://www.allrecipes.com/thmb/Frx1OxNy629I_F66chcNSvmjsCk=/2000x1500/smart/filters:no_upscale()/10813-best-chocolate-chip-cookies-mfs-step-7-148-52cdaefcd6e04707863288ded8451075.jpg'),
    new Recipe('A test Recipe',
      'This is just a test',
      'https://www.allrecipes.com/thmb/Frx1OxNy629I_F66chcNSvmjsCk=/2000x1500/smart/filters:no_upscale()/10813-best-chocolate-chip-cookies-mfs-step-7-148-52cdaefcd6e04707863288ded8451075.jpg'),
    new Recipe('A test Recipe',
      'This is just a test',
      'https://www.allrecipes.com/thmb/Frx1OxNy629I_F66chcNSvmjsCk=/2000x1500/smart/filters:no_upscale()/10813-best-chocolate-chip-cookies-mfs-step-7-148-52cdaefcd6e04707863288ded8451075.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
