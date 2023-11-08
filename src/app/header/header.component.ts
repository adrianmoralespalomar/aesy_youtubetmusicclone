import { Component, OnInit } from '@angular/core';
import { HeaderLogoComponent } from './ui/header-logo/header-logo.component';
import { HeaderSearchComponent } from './ui/header-search/header-search.component';
import { HeaderProfileComponent } from './ui/header-profile/header-profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [HeaderLogoComponent,HeaderSearchComponent,HeaderProfileComponent]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
