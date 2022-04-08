import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../dashboard.service";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  buckets: any = []
  selectedBucket = ''
  constructor(
    private dashboardService: DashboardService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.getBuckets()
  }

  clickMenu(bucket:string) {
    console.log('%cbucket', 'font-size:15px;background-color: #42b983;color:#fff;', bucket);
  }
  logout() {
    this.authService.logout()
  }
  getBuckets() {
    this.dashboardService.getBucket().subscribe((data: any) => {
      console.log('%cdata1', 'font-size:15px;background-color: #42b983;color:#fff;', data[0].name);
      this.buckets = data
      this.selectedBucket = data[0].name
    })
  }
}
