import { Injectable } from "@angular/core";
import * as data from './../../mockdata/companies.json';
import { Company } from "../Models/Company.model";

@Injectable({ providedIn: 'root' })
export class CompaniesService {
    static Companies: any = data;
    static mainFileCompany: Company = {} as Company;

    public getCompanies(): any[] {
        return CompaniesService.Companies;
    }
}
