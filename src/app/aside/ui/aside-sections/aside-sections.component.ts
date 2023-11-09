import { CommonModule, AsyncPipe, NgClass } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from '@app/aside/aside.component';
import { FooterComponent } from '@app/footer/footer.component';
import { HeaderComponent } from '@app/header/header.component';
import { MainComponent } from '@app/main/main.component';
import { selectIsCollapdsed } from '@app/shared/hooks/logo.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aside-sections',
  templateUrl: './aside-sections.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, RouterOutlet,AsideComponent,HeaderComponent,FooterComponent,MainComponent,AsyncPipe,NgClass]
})
export class AsideSectionsComponent implements OnInit {

  store = inject(Store);
  isCollapsed$:Observable<boolean> = new Observable();
  constructor() { }

  ngOnInit() {
    this.isCollapsed$ = this.store.select(selectIsCollapdsed);
  }

}
