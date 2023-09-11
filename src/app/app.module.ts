import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FollowUsInstagramComponent } from './components/follow-us-instagram/follow-us-instagram.component';
import { SingleInstaFeedsComponent } from './components/single-insta-feeds/single-insta-feeds.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowUsInstagramComponent,
    SingleInstaFeedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
