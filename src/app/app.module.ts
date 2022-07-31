import { forwardRef, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './modules/layout/toolbar/toolbar.component';
import { SidenavComponent } from './modules/layout/sidenav/sidenav.component';
import { AuthLayoutComponent } from './modules/layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './modules/layout/content-layout/content-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiModule } from './modules/core/api/api.module';
import { TokenInterceptor } from './modules/core/interceptors/token.interceptor';
import { CoreModule } from './modules/core/core.module';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => TokenInterceptor),
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    AuthLayoutComponent,
    ContentLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: 'https://localhost:5001' }),
    CoreModule
  ],
  providers: [
    TokenInterceptor,
    API_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
