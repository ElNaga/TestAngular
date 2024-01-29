import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyCardComponent } from './Components/company-card/company-card.component';
import { CompanyDataComponent } from './Components/company-data/company-data.component';
import { MainBodyComponent } from './Components/main-body/main-body.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyCardComponent,
    CompanyDataComponent,
    MainBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
