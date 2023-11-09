import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: [],
  standalone: true,
  imports: [NgOptimizedImage]
})
export class HeaderProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
