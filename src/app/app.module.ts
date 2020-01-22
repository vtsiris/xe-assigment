import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BannerSpaceComponent} from './banner-space/banner-space.component';
import {SearchComponent} from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerSpaceComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

