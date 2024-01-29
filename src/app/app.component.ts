import { Component } from '@angular/core';
import { CompaniesService } from './Services/Comapnies.service';
import { TabsService } from './Services/Tabs.service';
import { SelectedTab } from './Models/SelectedTabs.model';
import { NavigationService } from './Services/Navigation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'TestingAngular';

  constructor(
    private tabsService: TabsService,
    private navigationService: NavigationService
  ) { }
  // Tabs = [] as SelectedTab[];

  get Tabs(): SelectedTab[] {
    return this.tabsService.getTabs();
  }

  get Companies() {
    console.log(CompaniesService.Companies)
    return CompaniesService.Companies;
  }

  RemoveTab(companyId: number) {
    console.log('ADNLSADJASDASDASD')
    this.tabsService.removeTab(companyId);
    console.log(this.Tabs, companyId);
  }



  goToPage(page: string): void {
    // TODO ADD fffff overwrite file of main company
    this.navigationService.navigateTo(page);
  }

  // TODO selected tabs logic in HTML
}