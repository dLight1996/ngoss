/*
 * @Author: 史建敏
 * @Date: 2022-04-06 11:30:25
 * @LastEditTime: 2022-04-11 21:04:54
 * @LastEditors: 史建敏
 * @Description:
 * @FilePath: /ngoss/src/app/app.module.ts
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserModule} from "./pages/user/user.module";
import {CoreModule} from "./core/core.module";
import {DashboardModule} from "./pages/dashboard/dashboard.module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    DashboardModule,
    AppRoutingModule
  ],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
