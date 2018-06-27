import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
  
@Injectable()
export class DashboardService {
 
    constructor(private http: HttpClient) {}
 
    getVideoList() {
        return this.http.get('/assets/data/data.json');
    }
}