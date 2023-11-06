import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent {

  @Output() displayboolean = new EventEmitter<boolean>;
  @Output() countnumber = new EventEmitter<number>;

  newSong:string='';
  songList: string[] = ['song1','song2','song3','Song4'];
  listCount:number = this.songList.length;
  isDisplay:boolean = false;

  ngOnInit(){
    this.displayboolean.emit(this.isDisplay);
    this.countnumber.emit(this.listCount);
  }

  updateList(){
    this.songList.push(this.newSong);
    this.isDisplay=false;
    this.displayboolean.emit(this.isDisplay);
    this.countnumber.emit(this.songList.length);
    console.log('Updating new song :', this.newSong);
  }

  getcount(){
    this.isDisplay=true;
    this.listCount=this.songList.length;
    this.displayboolean.emit(this.isDisplay);    
    this.countnumber.emit(this.listCount);
    console.log('listCount is now:', this.listCount);
  }

}
