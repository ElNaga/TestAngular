export class Employee {
  constructor(
    public employeeId: string,
    public name: string
  ) { }
}

export class Department {
  constructor(
    public departmentName: string,
    public head: string,
    public employees: Employee[]
  ) { }
}

export class Company {
  constructor(
    public id: number,
    public companyName: string,
    public headquarters: string,
    public ceo: string,
    public departments: Department[]
  ) { }
}