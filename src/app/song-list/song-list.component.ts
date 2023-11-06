import { Component } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent {
  newSong:string='';
  songList: string[] = ['song1','song2','song3','Song4'];
  listCount:number = this.songList.length;
  isDisplay:boolean = false;

  updateList(){
    this.songList.push(this.newSong);
    this.isDisplay=false;
    console.log('Updating new song :', this.newSong);
  }

  getcount(){
    this.isDisplay=true;
    this.listCount=this.songList.length;
    console.log('listCount is now:', this.listCount);
  }
}
