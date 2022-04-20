import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) {
  }

  getBucket() {
    return this.http.get('/oss/buckets')
  }

  getFiles = (bucket: string, prefix?: any) => {
    return this.http.get('/oss/files', {
      params: {
        bucket,
        prefix
      }
    })
  }

}
