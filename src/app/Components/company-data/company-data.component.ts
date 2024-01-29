import { Component } from '@angular/core';
import { CompaniesService } from '../../Services/Comapnies.service';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrl: './company-data.component.css'
})
export class CompanyDataComponent {
  company = CompaniesService.mainFileCompany;

}
