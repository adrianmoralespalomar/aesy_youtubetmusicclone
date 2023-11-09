import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { selectIsCollapdsed } from '@app/shared/hooks/logo.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aside-playlists',
  templateUrl: './aside-playlists.component.html',
  styleUrls: [],
  standalone: true,
  imports: [AsyncPipe,NgIf]
})
export class AsidePlaylistsComponent implements OnInit {

  store = inject(Store);
  isCollapsed$:Observable<boolean> = new Observable();
  constructor() { }

  ngOnInit() {
    this.isCollapsed$ = this.store.select(selectIsCollapdsed);
  }

}
