import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyDataComponent } from './Components/company-data/company-data.component';
import { MainBodyComponent } from './Components/main-body/main-body.component';

const routes: Routes = [
  { path: '', component: MainBodyComponent },
  { path: 'company-data', component: CompanyDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
