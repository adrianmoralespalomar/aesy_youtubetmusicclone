import { Component, OnInit, inject } from '@angular/core';
import { MainAlbumsongcoverComponent } from '../utils/main-albumsongcover/main-albumsongcover.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MainService } from '@app/main/services/main-service.service';

@Component({
  selector: 'app-main-recommendedalbums',
  templateUrl: './main-recommendedalbums.component.html',
  styleUrls: [],
  standalone: true,
  imports: [MainAlbumsongcoverComponent,NgFor,NgIf,AsyncPipe],
  providers:[MainService]
})
export class MainRecommendedalbumsComponent implements OnInit {

  // albums=[
  //   {
  //     src:'assets/images/albums/itzyAlbum.jpg',
  //     alt:'Portada Album del Grupo Kpop Itzy',
  //     name:'KILL MY DOUBT',
  //     type:'EP • ITZY'
  //   },
  //   {
  //     src:'assets/images/albums/aespaAlbum.jpg',
  //     alt:'Portada Album del Grupo Kpop Aespa',
  //     name:'Girls - The 2nd Mini Album',
  //     type:'Album • aespa'
  //   },
  //   {
  //     src:'assets/images/albums/nmixxAlbum.jpg',
  //     alt:'Portada Album del Grupo Kpop Nmixx',
  //     name:'expérgo',
  //     type:'EP • NMIXX'
  //   },
  //   {
  //     src:'assets/images/albums/iveAlbum.jpg',
  //     alt:'Portada Album del Grupo Kpop IVE',
  //     name:'WAVE',
  //     type:'EP • IVE'
  //   },
  //   {
  //     src:'assets/images/albums/lsfmAlbum.jpg',
  //     alt:'Portada Album del Grupo Kpop Le SSerafim',
  //     name:'UNFORGIVEN',
  //     type:'Album • LE SSERAFIM'
  //   },
  //   {
  //     src:'assets/images/albums/keplerAlbum.jpg',
  //     alt:'Portada Album del Grupo Kpop Kep1er',
  //     name:'<FLY-UP> - Special Edition',
  //     type:'EP • Kep1er'
  //   }
  // ];
  mainservice=inject(MainService);
  currentListenAgainData$=this.mainservice.currentAlbumData$;
  constructor() { }

  ngOnInit() {
    this.mainservice.GetAllAlbums();
  }
  GetNextPageAlbums(){
    this.mainservice.GetNextPageAlbums();
  }
  GetPrevPageAlbums(){
    this.mainservice.GetPrevPageAlbums();
  }

}
