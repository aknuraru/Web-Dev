import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumService} from '../../services/album.service';
import {Photo} from '../../services/photo';

@Component({
  selector: 'app-album-photos',
  imports: [],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos implements OnInit {
  photos: Photo[]=[];
  loading = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe(data => {
      this.photos = data;
      this.loading = false;
    });
  }
  goBack() {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/albums', id]);
  }
}
