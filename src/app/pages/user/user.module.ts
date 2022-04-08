import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {LoginComponent} from "./login/login.component";
import {CoreModule} from "../../core/core.module";
import {UserService} from "./user.service";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    UserRoutingModule
  ],
  providers: [UserService]
})

export class UserModule {
}
