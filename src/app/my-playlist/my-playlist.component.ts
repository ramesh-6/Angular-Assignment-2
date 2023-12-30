import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.css']
})
export class MyPlaylistComponent {

  playlist: any[] = [];
  song: any;

  addToPlaylist(playlist: any) {
    this.playlist.splice(0, this.playlist.length);
    console.log('method call', this.playlist);
    for (let i = 0; i < playlist.length; i++) {
      this.song = playlist[i];
      console.log('for loop call', this.song);
      this.playlist.push(this.song);
      console.log("addtoplaylist worked: ", this.playlist, this.playlist.length);
    }
  }
}
