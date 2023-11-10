import { CommonModule, AsyncPipe, NgClass } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { AsideComponent } from '@app/aside/aside.component';
import { FooterComponent } from '@app/footer/footer.component';
import { HeaderComponent } from '@app/header/header.component';
import { LoginComponent } from '@app/login/login/login.component';
import { MainComponent } from '@app/main/main.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalConstant } from 'src/constants/global-constant';
import { selectIsCollapdsed } from '../hooks/logo.selectors';

@Component({
  selector: 'app-youtubeglobalpage',
  templateUrl: './youtubeglobalpage.component.html',
  styleUrls: ['./youtubeglobalpage.component.css'],
  standalone:true,
  imports: [CommonModule, RouterOutlet,AsideComponent,HeaderComponent,FooterComponent,MainComponent,LoginComponent,AsyncPipe,NgClass]
})
export class YoutubeglobalpageComponent implements OnInit {

  store = inject(Store);
  route = inject(Router);
  isCollapsed$:Observable<boolean> = new Observable();
  constructor() { }

  ngOnInit() {
    const logged=localStorage.getItem(GlobalConstant.Cookie_key_logged);
    if(logged && logged!=''){
      console.log('Logeado!!: ',logged)
      this.isCollapsed$ = this.store.select(selectIsCollapdsed);
    }
    else this.route.navigate(['login']);
  }

}
