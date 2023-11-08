import { Component, OnInit } from '@angular/core';
import { MainCategoryButtonComponent } from './utils/main-category-button/main-category-button.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: [],
  standalone: true,
  imports: [MainCategoryButtonComponent,NgFor]
})
export class MainCategoryComponent implements OnInit {

  texts=['Energize','Feel Good','Relax'];
  constructor() { }

  ngOnInit() {

  }

}
