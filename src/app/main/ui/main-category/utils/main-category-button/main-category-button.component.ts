import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-category-button',
  template: `
    <button type="button" class="bg-white/10 hover:bg-white/20 min-h-[36px] px-3 rounded-lg">
      {{text}}
    </button>
  `,
  styleUrls: [],
  standalone: true,
  imports: []
})
export class MainCategoryButtonComponent implements OnInit {
  @Input() text='';
  constructor() { }

  ngOnInit() {
  }

}
