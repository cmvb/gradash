import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Expose-Headers':'Access-Control-*',
    'Access-Control-Allow-Headers': 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    'Access-Control-Allow-Origin': '*',
    'Allow':'GET, POST, PUT, DELETE, OPTIONS, HEAD'
  })

};

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http : HttpClient) { }

  getREST(url) {
    return this.http.get(url);
  }

  postREST(url, data) {
    return this.http.post(url, data);
  }

  putREST(url, data) {
    return this.http.put(url, data);
  }

  deleteREST(url, id) {
    return this.http.delete(url + id);
  }
}
