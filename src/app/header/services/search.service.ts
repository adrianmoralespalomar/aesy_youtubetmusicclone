import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, filter, map, switchMap } from 'rxjs';
import { GlobalConstant } from 'src/constants/global-constant';
import { Album } from 'src/models/Album';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  //We get the data first and work with it instead of doing request whenever we search something due to url isnt mine so I don't want to get blocked
  searchedAlbums$=new BehaviorSubject<Album [] | null>(null);
  httpClient= inject(HttpClient);
  constructor() { }
  GetAlbums(searchParameter:string){
    if(searchParameter?.length<=0)return;
    this.httpClient.get<Album[]>(GlobalConstant.UrlAlbums)
    .pipe(
        map(
          (res: any) =>  res.albums.filter((album:Album)=>album.name.toLocaleLowerCase().includes(searchParameter.toLocaleLowerCase()) || album.type.toLocaleLowerCase().includes(searchParameter.toLocaleLowerCase()) )
        )
      )
    .subscribe(result=>this.searchedAlbums$.next(result));
  }
}
