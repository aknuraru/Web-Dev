import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AlbumService} from '../../services/album.service';
import {Album} from '../../services/album';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports: [
    FormsModule
  ],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
  standalone:true,
})
export class AlbumDetail implements OnInit {
  album!: Album;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.loading = false;
    });
  }

  save() {
    this.albumService.updateAlbum(this.album).subscribe(() => {
      alert('Album updated!');
    });
  }

  goToPhotos() {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
