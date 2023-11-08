import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-albumsongcover',
  template: `
  <div class="flex-1">
    <img class="rounded" src="{{album.src}}" alt="{{album.alt}}">
    <h2 class="font-bold">{{album.name}}</h2>
    <h2 class="text-white/70">{{album.type}}</h2>
  </div>`,
  styleUrls: [],
  standalone: true,
  imports: []
})
export class MainAlbumsongcoverComponent implements OnInit {
  @Input() album: any;
  constructor() { }

  ngOnInit() {
  }

}
