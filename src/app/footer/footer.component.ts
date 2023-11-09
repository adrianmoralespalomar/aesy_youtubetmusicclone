import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SecToMin } from '@app/shared/pipes/sectomin';
import { BehaviorSubject, Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports:[SecToMin,NgClass,AsyncPipe]
})
export class FooterComponent implements OnInit {

  audioSong = new Audio();
  isNaN: Function = Number.isNaN;
  omgomgomg=0;
  isPlaying:boolean | undefined;
  constructor() { }

  ngOnInit() {
  }
  PlaySong(){
    if (this.isPlaying==undefined){
      this.audioSong.src="assets/music/01.mp3";
      this.audioSong.volume=0.2;
      this.audioSong.play();
      this.audioSong.ontimeupdate= (event) => {
        this.omgomgomg=this.audioSong.currentTime;
      };
      this.audioSong.onended= (event) => {
        this.isPlaying=false;
      };
      //currentTime$: Observable<number | null> = new Observable<number | null>() ;
      // this.currentTime$ = interval(1000).pipe( // Actualiza cada segundo
      //   map(() => this.audioSong.currentTime)
      // );
    }
    else if(this.isPlaying==true)this.audioSong.pause();
    else this.audioSong.play();
    this.isPlaying=!this.isPlaying;
  }

}
