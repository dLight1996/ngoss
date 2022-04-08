//@ts-nocheck
import {Component, Input, OnInit} from '@angular/core';

import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {
  @Input() bucket = ''
  dirList: any = []
  fileList: any = []
  currentFile = {}
  visible = false
  pageSize = 10
  data = []

  constructor(
    private dashboardService: DashboardService
  ) {

  }

  getFiles = (prefix='') => {
    console.log(1, this.bucket)
    return this.dashboardService.getFiles(this.bucket, prefix).subscribe((data: any) => {
      console.log('%cdata', 'font-size:15px;background-color: #42b983;color:#fff;', data);
      this.dirList = data.dirs
      this.fileList = data.files
      this.data = [...data.dirs, ...data.files]
    })
  }
  ngOnChanges(e) {
    if (e.bucket.previousValue !==e.bucket.currentValue && this.bucket) {
      this.getFiles()
    }
  }

  closeVisible(value) {
    this.visible = value
  }

  clickDir(prefix) {
    this.getFiles(prefix)
  }

  clickFile(name: string, url: string) {
    console.log('%cname', 'font-size:15px;background-color: #42b983;color:#fff;', name, name.indexOf('mp4'));
    let type
    if (~name.indexOf('png') || ~name.indexOf('jpg') || ~name.indexOf('jpeg')) {
      type = 'img'
    } else if (~name.indexOf('mp4')) {
      type = 'video'
    }else if (/\/$/.test(name)) {
      const str = name.substr(0, name.length -1)
      const prevDir = str.substr(0, str.lastIndexOf('/') + 1)
      this.getFiles(prevDir)
      return
    }
    this.currentFile = {
      fileName: name,
      type,
      url
    }
    this.visible = true
  }
}
