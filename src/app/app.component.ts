import { Component } from '@angular/core';
import { CompaniesService } from './Services/Comapnies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TestingAngular';

  get Companies() {
    console.log(CompaniesService.Companies)
    return CompaniesService.Companies;
  }
}