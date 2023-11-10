import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { selectIsCollapdsed } from '@app/shared/hooks/logo.selectors';
import { CookiesService } from '@app/shared/services/cookies.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalConstant } from 'src/constants/global-constant';

@Component({
  selector: 'app-aside-playlists',
  templateUrl: './aside-playlists.component.html',
  styleUrls: [],
  standalone: true,
  imports: [AsyncPipe,NgIf]
})
export class AsidePlaylistsComponent implements OnInit {

  store = inject(Store);
  cookies= inject (CookiesService)
  isCollapsed$:Observable<boolean> = new Observable();
  userName=this.cookies.getCookie(GlobalConstant.Cookie_key_logged) || '';
  constructor() { }

  ngOnInit() {
    this.isCollapsed$ = this.store.select(selectIsCollapdsed);
  }

}
