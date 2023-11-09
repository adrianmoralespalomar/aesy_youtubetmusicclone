import { Component, OnInit, inject } from '@angular/core';
import { collapseCategoryFromLogo } from '@app/shared/hooks/logo.actions.ts';
import {Store} from '@ngrx/store';
@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: [],
  standalone: true,
  imports: []
})
export class HeaderLogoComponent implements OnInit {
  store= inject(Store);
  isLogoCollapsed=false;
  constructor() { }

  ngOnInit() {}
  CollapseCategoryHook(){
    this.isLogoCollapsed=this.isLogoCollapsed==true?false:true;
    this.store.dispatch(collapseCategoryFromLogo({isCollapdsed:this.isLogoCollapsed}));
  }
}
