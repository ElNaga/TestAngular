import { Injectable, inject } from "@angular/core";
import { SelectedTab } from "../Models/SelectedTabs.model";

@Injectable({ providedIn: 'root' })
export class TabsService {
    private tabs: SelectedTab[] = [];

    constructor() { }

    public addTab(tab: SelectedTab): void {
        this.tabs.push(tab);
    }

    public getTabs(): SelectedTab[] {
        return this.tabs;
    }

    public removeTab(companyId: number): void {
        this.tabs = this.tabs.filter(tab => tab.companyId !== companyId);
    }

}