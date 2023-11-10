import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { GlobalConstant } from 'src/constants/global-constant';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent {
  isLogged=false;
  route = inject(Router);
  constructor() { }

  ngOnInit() {
    const logged=localStorage.getItem(GlobalConstant.Cookie_key_logged);
    if(logged && logged!=''){
      //this.route.navigate(['']);
    }
    else this.route.navigate(['login']);
  }

}
