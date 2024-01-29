import { Injectable, inject } from "@angular/core";
import { SelectedTab } from "../Models/SelectedTabs.model";

@Injectable({ providedIn: 'root' })
export class TabsService {
    private tabs: SelectedTab[] = []; // Initialize as an empty array

    constructor() { }

    public addTab(tab: SelectedTab): void {
        // Add a new tab, you might want to include logic to prevent duplicates
        this.tabs.push(tab);
    }

    public getTabs(): SelectedTab[] {
        return this.tabs;
    }

    public removeTab(companyId: number): void {
        this.tabs = this.tabs.filter(tab => tab.companyId !== companyId);
    }

    // You might also want methods to remove or update tabs
}