import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import {CoreModule} from "../../core/core.module";
import { ContentComponent } from './content/content.component';
import {DashboardService} from "./dashboard.service";
import { FileComponent } from './file/file.component';


@NgModule({
  declarations: [
    MainComponent,
    ContentComponent,
    FileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule
  ],
  providers:[DashboardService]
})
export class DashboardModule { }
