import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoDownloaderService {

constructor(
  private http: HttpClient
) { }

getVdo(link: any){
const params = new HttpParams().set('link', link)
  return this.http.get('http://localhost:8888', {params});
}
}
