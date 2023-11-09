import { Component, OnInit, inject } from '@angular/core';
import { MainAlbumsongcoverComponent } from '../utils/main-albumsongcover/main-albumsongcover.component';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { MainService } from '../../services/main-service.service';

@Component({
  selector: 'app-main-listenagain',
  templateUrl: './main-listenagain.component.html',
  styleUrls: [],
  standalone: true,
  imports: [MainAlbumsongcoverComponent,NgFor,NgIf,AsyncPipe],
  providers:[MainService]
})
export class MainListenagainComponent implements OnInit {
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
