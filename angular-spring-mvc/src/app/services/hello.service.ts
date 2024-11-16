import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private apiUrl = '/api/hello';

  constructor(private http: HttpClient) { }

  getMessage(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' }).pipe(
      delay(3000)
    );
  }
}
