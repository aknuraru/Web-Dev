import { Component,OnInit } from '@angular/core';
import {AlbumService} from '../../services/album.service';
import {Album} from '../../services/album';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-albums',
  imports: [
    RouterLink
  ],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  albums:Album[]=[];
  loading=true;
  constructor(private albumser:AlbumService) { }
  ngOnInit() {
    this.albumser.getAlbums().subscribe(data=>{
      this.loading=false;
      this.albums=data;
    })
  }
  deleteAlbum(id:number){
    this.albumser.deleteAlbum(id).subscribe(()=>{
      this.albums=this.albums.filter(album=>album.id !== id);
    })
  }
}
