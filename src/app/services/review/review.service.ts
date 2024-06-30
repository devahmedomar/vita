import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IReview } from 'src/app/models/ireview';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiUrl = 'https://api.vitaparapharma.com/api/v1';

  constructor(private http: HttpClient) { }

getAllReviews(productId: number): Observable<IReview[]> {
    const url = `${this.apiUrl}/public/review/product/${productId}`;
    return this.http.get<IReview[]>(url);
}
  
getReview(productId: number, email: string): Observable<IReview | null> {
    const url = `${this.apiUrl}/public/review/product/${productId}`;
    return this.http.get<{ data: { reviews: IReview[] } }>(url).pipe(
      map((response) => {
        const reviews = response.data?.reviews;
        if (Array.isArray(reviews)) {
          return reviews.find(review => review.email === email) || null;
        } else {
          console.error('Unexpected response format:', response);
          return null;
        }
      })
    );
  }
  
  updateReview(reviewId: number, comment: string, rating: number, token: string): Observable<any> {
    const url = `${this.apiUrl}/user/review/update/${reviewId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const body = {
      comment: comment,
      rating: rating.toString()
    };
    return this.http.put<any>(url, body, { headers: headers });
  }

  addReview(productId: number, comment: string, rating: number, token: string): Observable<any> {
    const url = `${this.apiUrl}/user/review/new`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const body = {
      productId: productId.toString(),
      comment: comment,
      rating: rating.toString()
    };
    return this.http.post<any>(url, body, { headers: headers });
  }

  deleteReview(reviewId: number, token: string): Observable<any> {
    const url = `${this.apiUrl}/user/review/delete/${reviewId}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(url, { headers });
  }
}
