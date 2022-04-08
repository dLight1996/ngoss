import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MyInterceptor} from "./http-interceptors";

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptor,
    multi: true
  }
]
