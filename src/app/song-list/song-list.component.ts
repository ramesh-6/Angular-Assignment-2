import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MyPlaylistComponent } from '../my-playlist/my-playlist.component';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent {

  @Output() assignisDisplay = new EventEmitter<boolean>;
  @Output() assignlistCount = new EventEmitter<number>;

  newSongName: string = '';
  songList: any[] = [{ id: 1, name: 'song1', isSelected: false }, { id: 2, name: 'song2', isSelected: false }, { id: 3, "name": 'song3', isSelected: false }, { id: 4, name: 'song4', isSelected: false }];
  selectedSongs: any[] = [];
  sample: any[] = [];
  listCount: number = this.songList.length;
  isDisplay: boolean = false;
  playlistValue: boolean = false;

  ngOnInit() {
    this.assignisDisplay.emit(this.isDisplay);
    this.assignlistCount.emit(this.listCount);
  }

  updateList() {
    this.songList.push({ id: this.songList.length + 1, name: this.newSongName, isSelected: false });
    this.isDisplay = false;
    this.assignisDisplay.emit(this.isDisplay);
    this.assignlistCount.emit(this.songList.length);
    console.log('Updating new song :', this.songList);
    console.log('Updating new boolean :', this.isDisplay);
  }

  getcount() {
    this.isDisplay = true;
    this.listCount = this.songList.length;
    this.assignisDisplay.emit(this.isDisplay);
    this.assignlistCount.emit(this.listCount);
    console.log('listCount is now:', this.listCount);
  }

  onChange(song: any) {
    console.log("checkbox onchange worked: ", this.songList);
    // if(song.isSelected==true){
    //   this.selectedSongs.push(song);
    // }
    if (this.selectedSongs.includes(song)) {
      const index = this.selectedSongs.findIndex((item: any) => item.id === song.id);
      console.log("index value: ", index);
      if (index !== -1) {
        console.log("index value inside if: ", index);
        this.selectedSongs.splice(index, 1);
        const newindex = this.selectedSongs.findIndex((item: any) => item.id === song.id);
        console.log("index value inside if: ", newindex);
      }
    }
    else {
      this.selectedSongs.push(song);
    }
    console.log("selected checkbox onchange worked: ", this.selectedSongs);
  }

  @ViewChild(MyPlaylistComponent) MyPlaylistComponent: MyPlaylistComponent = new MyPlaylistComponent();

  addToPlaylist() {
    this.MyPlaylistComponent.addToPlaylist(this.selectedSongs);
  }

}
