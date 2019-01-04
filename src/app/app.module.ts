import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PmkjComponent } from './pmkj/pmkj.component';
import { ThmaComponent } from './thma/thma.component';
import { PmkjDetailsComponent } from './pmkj-details/pmkj-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PmkjComponent,
    ThmaComponent,
    PmkjDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
