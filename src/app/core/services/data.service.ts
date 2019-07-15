import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/data.model';
import {
  HttpClient
} from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) {}

  findProducts(): Observable<Product> {
    
    return this.httpClient.get('http://localhost:3000/products')
    .pipe(map(res => res['groups']));
  }
}
