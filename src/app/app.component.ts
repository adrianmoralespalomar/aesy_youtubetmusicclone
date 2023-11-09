import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from '@app/aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsCollapdsed } from './shared/hooks/logo.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet,AsideComponent,HeaderComponent,FooterComponent,MainComponent,AsyncPipe,NgClass]
})
export class AppComponent {
  
  store = inject(Store);
  isCollapsed$:Observable<boolean> = new Observable();
  constructor() { }

  ngOnInit() {
    this.isCollapsed$ = this.store.select(selectIsCollapdsed);
  }

}
