import { Component, ViewChild } from '@angular/core';
import { SongListComponent } from './song-list/song-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular-Assignment-2';

  listCount:any;
  isDisplay:any;
  
  assignisDisplay($event:any){
    this.isDisplay=$event;
    console.log('assigning new boolean :', this.isDisplay);
  }

  assignlistCount($event:any){
    this.listCount=$event;
    console.log('assigning new count :', this.listCount);
  }

  @ViewChild(SongListComponent) songListComponent: SongListComponent = new SongListComponent();

  getcount() {                             // Call the child component's getcount method
    this.songListComponent.getcount();
    this.listCount=this.songListComponent.listCount;
    this.isDisplay=this.songListComponent.isDisplay;
  }

  // ngAfterViewInit() {
  //   this.songList = this.child.songList;
  //   this.listCount = this.child.listCount;
  //   this.isDisplay = this.child.isDisplay;
  // }

}
