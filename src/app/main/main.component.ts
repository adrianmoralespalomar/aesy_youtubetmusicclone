import { Component, OnInit } from '@angular/core';
import { MainCategoryComponent } from './ui/main-category/main-category.component';
import { MainListenagainComponent } from './ui/main-listenagain/main-listenagain.component';
import { MainRecommendedalbumsComponent } from './ui/main-recommendedalbums/main-recommendedalbums.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [MainCategoryComponent,MainListenagainComponent,MainRecommendedalbumsComponent]
})
export class MainComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

}
