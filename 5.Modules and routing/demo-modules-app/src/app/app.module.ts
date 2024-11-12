import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HeaderModule } from './header/header.module';
import { OurCommonModule } from './common.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, OurCommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
