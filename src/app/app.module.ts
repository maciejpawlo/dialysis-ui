import { NgModule } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './modules/core/api/api.module';

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
    ApiModule.forRoot({ rootUrl: 'https://localhost:44321' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
