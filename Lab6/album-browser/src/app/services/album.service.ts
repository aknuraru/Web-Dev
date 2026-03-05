import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album} from './album';
import {Photo} from './photo';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private BASE_URL="https://jsonplaceholder.typicode.com";
  constructor(private http: HttpClient) {}
  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(`${this.BASE_URL}/albums`);
  }
  getAlbum(id:number):Observable<Album>{
    return this.http.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }
  getAlbumPhotos(id:number):Observable<Photo[]>{
    return this.http.get<Photo[]>(`${this.BASE_URL}/albums/${id}`);
  }
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }
  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/albums/${id}`);
  }

}

