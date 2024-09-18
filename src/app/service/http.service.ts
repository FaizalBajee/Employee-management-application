import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl: string = environment.BaseUrl;
  private accessToken: string|null = null;

  constructor(private httpClient: HttpClient) {
    this.accessToken = "";
  }

  post<TResponse = any>(endpoint: string, data: any): Observable<TResponse>
  {
    return this.httpClient.post<TResponse>(`${this.apiUrl}/${endpoint}`, data, {
      headers: {
        Authentication: `Bearer ${this.accessToken}`
      }
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401) {
            // Make API Call to refresh the current Access Token using the Refresh Token
            
            // Set the received Access Token
            
            return this.httpClient.post<TResponse>(`${this.apiUrl}/${endpoint}`, data, {
              headers: {
                Authentication: `Bearer ${this.accessToken}`
              }
            });
          }
          else {
            return throwError(() => error);
          }
        })
      );
  }

}
