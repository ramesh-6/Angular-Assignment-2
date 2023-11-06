import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent {

  @Output() assignisDisplay = new EventEmitter<boolean>;
  @Output() assignlistCount = new EventEmitter<number>;

  newSong:string='';
  songList: string[] = ['song1','song2','song3','Song4'];
  listCount:number = this.songList.length;
  isDisplay:boolean = false;

  ngOnInit(){
    this.assignisDisplay.emit(this.isDisplay);
    this.assignlistCount.emit(this.listCount);
  }

  updateList(){
    this.songList.push(this.newSong);
    this.isDisplay=false;
    this.assignisDisplay.emit(this.isDisplay);
    this.assignlistCount.emit(this.songList.length);
    console.log('Updating new song :', this.newSong);
    console.log('Updating new boolean :', this.isDisplay);
  }

  getcount(){
    this.isDisplay=true;
    this.listCount=this.songList.length;
    this.assignisDisplay.emit(this.isDisplay);    
    this.assignlistCount.emit(this.listCount);
    console.log('listCount is now:', this.listCount);
  }

}
