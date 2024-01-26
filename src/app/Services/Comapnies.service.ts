import { Injectable } from "@angular/core";
import * as data from './../../mockdata/company1.json';

@Injectable({ providedIn: 'root' })
export class CompaniesService {
    static Companies: any = data;

    public getCompanies(): any[] {
        return CompaniesService.Companies;
    }
}
