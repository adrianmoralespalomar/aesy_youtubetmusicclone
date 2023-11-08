import { Component, OnInit } from '@angular/core';
import { AsideSectionsComponent } from './ui/aside-sections/aside-sections.component';
import { AsidePlaylistsComponent } from './ui/aside-playlists/aside-playlists.component';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  standalone: true,
  imports: [AsideSectionsComponent,AsidePlaylistsComponent]
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
