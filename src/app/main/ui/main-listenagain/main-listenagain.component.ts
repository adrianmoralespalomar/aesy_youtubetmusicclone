import { Component, OnInit } from '@angular/core';
import { MainAlbumsongcoverComponent } from '../utils/main-albumsongcover/main-albumsongcover.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main-listenagain',
  templateUrl: './main-listenagain.component.html',
  styleUrls: [],
  standalone: true,
  imports: [MainAlbumsongcoverComponent,NgFor]
})
export class MainListenagainComponent implements OnInit {
  songsalbums=[
    {
      src:'assets/images/albums/itzyAlbum.jpg',
      alt:'Portada Album del Grupo Kpop Itzy',
      name:'KILL MY DOUBT',
      type:'EP • ITZY'
    },
    {
      src:'assets/images/albums/aespaAlbum.jpg',
      alt:'Portada Album del Grupo Kpop Aespa',
      name:'Girls - The 2nd Mini Album',
      type:'Album • aespa'
    },
    {
      src:'assets/images/albums/nmixxAlbum.jpg',
      alt:'Portada Album del Grupo Kpop Nmixx',
      name:'expérgo',
      type:'EP • NMIXX'
    },
    {
      src:'assets/images/albums/iveAlbum.jpg',
      alt:'Portada Album del Grupo Kpop IVE',
      name:'WAVE',
      type:'EP • IVE'
    },
    {
      src:'assets/images/albums/lsfmAlbum.jpg',
      alt:'Portada Album del Grupo Kpop Le SSerafim',
      name:'UNFORGIVEN',
      type:'Album • LE SSERAFIM'
    },
    {
      src:'assets/images/albums/keplerAlbum.jpg',
      alt:'Portada Album del Grupo Kpop Kep1er',
      name:'<FLY-UP> - Special Edition',
      type:'EP • Kep1er'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
