export class EmployeeService {
  static async getEmployees() {
    // Simulate API call
    const stored = localStorage.getItem('employees');
    return stored ? JSON.parse(stored) : [];
  }

  static async addEmployee(employee) {
    // Simulate API call
    const employees = await this.getEmployees();
    const newEmployee = {
      ...employee,
      id: Date.now().toString()
    };
    employees.push(newEmployee);
    localStorage.setItem('employees', JSON.stringify(employees));
    return newEmployee;
  }

  static async updateEmployee(id, employee) {
    // Simulate API call
    const employees = await this.getEmployees();
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      employees[index] = { ...employee, id };
      localStorage.setItem('employees', JSON.stringify(employees));
      return employees[index];
    }
    throw new Error('Employee not found');
  }

  static async deleteEmployee(id) {
    // Simulate API call
    const employees = await this.getEmployees();
    const filtered = employees.filter(emp => emp.id !== id);
    localStorage.setItem('employees', JSON.stringify(filtered));
    return true;
  }
} 