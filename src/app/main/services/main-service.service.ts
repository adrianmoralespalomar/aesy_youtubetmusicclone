import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from 'src/models/Album';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { GlobalConstant } from 'src/constants/global-constant';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  //We get the data first and work with it instead of doing request whenever we search something due to url isnt mine so I don't want to get blocked
  private currentAlbums$=new BehaviorSubject<Album []>([]);
  private sizeAlbumArray=6;
  currentPage$=new BehaviorSubject<number>(0);
  //We obtain the json like this:
  /**
   * {
      "albums": [
        {
          "src": "assets/images/albums/itzyAlbum.jpg",
          "alt": "Portada Album del Grupo Kpop Itzy",
          "name": "KILL MY DOUBT",
          "type": "EP • ITZY"
        },
        {...}
      ]
   */
  currentAlbumData$ = this.currentPage$.pipe( // <=== we "pipe" to detect when this.currentPage$ changes, so it dispatchs the switchmap etc
    switchMap((currentPage)=>this.currentAlbums$.asObservable() // <=== we set currentAlbumData$ = this.currentAlbums$.asObservable()
    ),
    map((res:any)=>{return this.GetSubset(res?.albums, this.currentPage$.value)})//<=== It's why we need to res.albums, to access that data from json (we gonna slice to get only 6 elementos from the Array)
  );
  httpClient= inject(HttpClient);
  constructor() { }
  //Get Called by Main-ListenagainComponent on ngOnInit function
  GetAllAlbums(){
    this.httpClient.get<Album[]>(GlobalConstant.UrlAlbums).pipe(map((res: any) => res)).subscribe(result=>{
      this.currentAlbums$.next(result);
      this.currentPage$.next(1);
    });
  }
  GetNextPageAlbums(){
    this.currentPage$.next(this.currentPage$.value+1);
  }
  GetPrevPageAlbums(){
    this.currentPage$.next(this.currentPage$.value-1);
  }
  private GetSubset(albums: Album[], currentPage: number): Album[] {
    const pageSize = this.sizeAlbumArray;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex < 0) {
      return albums?.slice(0, pageSize);
    } else if (endIndex > albums?.length) {
      return albums?.slice(-pageSize);
    } else {
      return albums?.slice(startIndex, endIndex);
    }
  }
}
