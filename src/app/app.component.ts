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
  
  assignboolean($event:any){
    this.isDisplay=$event;
    console.log('assigning new boolean :', this.isDisplay);
  }

  assignnumber($event:any){
    this.listCount=$event;
    console.log('assigning new count :', this.listCount);
  }

  @ViewChild(SongListComponent) songListComponent: SongListComponent = new SongListComponent();

  getcount() {
    this.songListComponent.getcount(); // Call the child component's getcount method
  }

  // ngAfterViewInit() {
  //   this.songList = this.child.songList;
  //   this.listCount = this.child.listCount;
  //   this.isDisplay = this.child.isDisplay;
  // }
  
}
