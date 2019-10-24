import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

    getMatchingCustomers(): Observable<any> {
      return this.http.get('http://localhost:3000/get/matchingCustomers');
    }


}
