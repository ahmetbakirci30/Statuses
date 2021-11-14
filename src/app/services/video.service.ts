import { Guid } from 'guid-typescript';
import { ApiUrl } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private httpClient: HttpClient) {}

  get(
    categoryId: Guid = Guid.createEmpty(),
    pageNumber: number = 1,
    pageSize: number = 9
  ) {
    return this.httpClient.get<any[]>(
      `${ApiUrl}videos/search?categoryId=${categoryId}&pageNumber=${pageNumber}&pageSize=${pageSize}&shuffle=true`
    );
  }
}
