import { AsyncPipe, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '@app/header/services/search.service';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: [],
  standalone: true,
  imports: [NgFor,NgIf,NgClass,AsyncPipe,ReactiveFormsModule,JsonPipe],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeaderSearchComponent implements OnInit {
  searchService= inject(SearchService);
  currentSearchValue=new FormControl();
  isClicked:boolean=false;
  constructor() { }

  SetColorInput(){

  }
  ngOnInit() {
    document.body.addEventListener('click', () => {
      this.onBodyClick();
    });
    this.currentSearchValue.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((val)=>{this.searchService.GetAlbums(val)});
  }
  ngOnDestroy() {
    document.body.removeEventListener('click', () => {
      this.onBodyClick();
    });
  }
  onInputClick() {
    this.isClicked = true;
  }
  onBodyClick() {
    if (this.isClicked) this.isClicked = false;
  }
}