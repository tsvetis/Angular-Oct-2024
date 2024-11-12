import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [],
  imports: [UserModule, HeaderModule],
  providers: [],
  // exports: [UserModule],
})
export class OurCommonModule {}
