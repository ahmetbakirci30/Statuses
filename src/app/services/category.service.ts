import { ApiUrl } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  get(pageSize: number = 9) {
    return this.httpClient.get<any[]>(
      `${ApiUrl}categories/search?pageSize=${pageSize}&shuffle=true`
    );
  }
}
