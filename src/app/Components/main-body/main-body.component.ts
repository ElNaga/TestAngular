import { Component } from '@angular/core';
import { CompaniesService } from '../../Services/Comapnies.service';
import { SelectedTab } from '../../Models/SelectedTabs.model';
import { Company } from '../../Models/Company.model';
import { TabsService } from '../../Services/Tabs.service';
import { NavigationService } from '../../Services/Navigation.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent {
  constructor(private tabsService: TabsService) { }

  mainFileCompany: Company = {} as Company;

  // Tabs = [] as SelectedTab[];
  // ngOnInit() {
  //   this.Tabs = this.tabsService.getTabs();
  // }

  get Tabs(): SelectedTab[] {
    return this.tabsService.getTabs();
  }

  get Companies() {
    console.log(CompaniesService.Companies)
    return CompaniesService.Companies;
  }

  SelectCompany(companyId: number) {
    CompaniesService.mainFileCompany = this.Companies.companies.filter((x: Company) => x.id === companyId)[0];
    if (!this.checkIfCompanyAlreadyInTabs(companyId)) {
      this.Tabs.push({
        companyName: CompaniesService.mainFileCompany.companyName,
        companyId: CompaniesService.mainFileCompany.id
      })
    }
  }

  checkIfCompanyAlreadyInTabs(id: number): Boolean {
    console.log(this.Tabs)
    return this.Tabs.some((x: any) => x.companyId === id);
  }
}
