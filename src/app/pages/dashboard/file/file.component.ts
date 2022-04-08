import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent  {
  @Input() currentFile: any = {
    fileName: '',
    type: 'img',
    url: ""
  }
  @Input() visible = false
  @Output() emitVisible = new EventEmitter()
  constructor() {
  }




  handleCancel() {
    this.visible = false
    this.emitVisible.emit(false)
  }
}
