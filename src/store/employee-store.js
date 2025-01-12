class EmployeeStore {
  static DEPARTMENTS = ['Analytics', 'Tech'];
  static POSITIONS = ['Junior', 'Medior', 'Senior'];

  constructor() {
    this.DEPARTMENTS = ['Analytics', 'Tech'];
    this.POSITIONS = ['Junior', 'Medior', 'Senior'];
    
    this.employees = [];
    this.listeners = new Set();
    this._loadFromLocalStorage();

    if (this.employees.length === 0) {
      this._generateMockData();
    }
  }

  _turkishToEnglish(input) {
    const charMap = {
      'ı': 'i',
      'ğ': 'g',
      'ü': 'u',
      'ş': 's',
      'ö': 'o',
      'ç': 'c',
      'İ': 'i',
      'Ğ': 'g',
      'Ü': 'u',
      'Ş': 's',
      'Ö': 'o',
      'Ç': 'c'
    };

    const convertText = (text) => {
      return text.replace(/[ıİğĞüÜşŞöÖçÇ]/g, letter => charMap[letter] || letter);
    };
    
    if (Array.isArray(input)) {
      return input.map(item => convertText(item));
    }
    
    return convertText(input);
  }

  _generateMockData() {
    this.employees = [];
    
    const firstNames = ['Ali', 'Ayşe', 'Mehmet', 'Fatma', 'Ahmet', 'Zeynep', 'Can', 'Elif', 'Mustafa', 'Esra',
                       'Emre', 'Selin', 'Burak', 'Deniz', 'Cem', 'İrem', 'Onur', 'Gizem', 'Tolga', 'Yasemin'];
    const lastNames = ['Yılmaz', 'Kaya', 'Demir', 'Çelik', 'Şahin', 'Öztürk', 'Aydın', 'Özdemir', 'Arslan', 'Doğan',
                      'Kurt', 'Koç', 'Erdoğan', 'Özer', 'Şen', 'Yıldız', 'Özcan', 'Aktaş', 'Aslan', 'Çetin'];

    const normalizedFirstNames = this._turkishToEnglish(firstNames);
    const normalizedLastNames = this._turkishToEnglish(lastNames);

    const getRandomDate = (start, end) => {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
        .toISOString().split('T')[0];
    };

    const getRandomPhone = () => {
      return `+90 5${Math.floor(Math.random() * 100).toString().padStart(2, '0')} ${Math.floor(Math.random() * 10000000).toString().padStart(7, '0')}`;
    };

    const usedCombinations = new Set();

    for (let i = 1; i <= 60; i++) {
      let firstNameIndex, lastNameIndex, firstName, lastName, combination;
      
      do {
        firstNameIndex = Math.floor(Math.random() * firstNames.length);
        lastNameIndex = Math.floor(Math.random() * lastNames.length);
        
        firstName = firstNames[firstNameIndex];
        lastName = lastNames[lastNameIndex];
        combination = `${firstName}-${lastName}`;
      } while (usedCombinations.has(combination));
      
      usedCombinations.add(combination);
      
      const employee = {
        id: i,
        firstName,
        lastName,
        email: `${normalizedFirstNames[firstNameIndex].toLowerCase()}.${normalizedLastNames[lastNameIndex].toLowerCase()}@company.com`,
        phone: getRandomPhone(),
        position: this.POSITIONS[Math.floor(Math.random() * this.POSITIONS.length)],
        department: this.DEPARTMENTS[Math.floor(Math.random() * this.DEPARTMENTS.length)],
        employmentDate: getRandomDate(new Date(2020, 0, 1), new Date()),
        birthDate: getRandomDate(new Date(1970, 0, 1), new Date(2000, 0, 1))
      };

      this.employees.push(employee);
    }

    this._saveToLocalStorage();
    this._notifyChange();
  }

  clearAllData() {
    this.employees = [];
    this._saveToLocalStorage();
    this._notifyChange();
  }

  generateNewMockData() {
    this._generateMockData();
  }

  addEmployee(employee) {
    const exists = this.employees.some(emp => 
      emp.firstName.toLowerCase() === employee.firstName.toLowerCase() &&
      emp.lastName.toLowerCase() === employee.lastName.toLowerCase()
    );

    if (exists) {
      throw new Error('Employee already exists');
    }

    const newId = Math.max(...this.employees.map(emp => emp.id), 0) + 1;
    const newEmployee = {
      ...employee,
      id: newId
    };

    this.employees.push(newEmployee);
    this._saveToLocalStorage();
    this._notifyChange();
    return newId;
  }

  _loadFromLocalStorage() {
    const storedData = localStorage.getItem('employees');
    if (storedData) {
      try {
        this.employees = JSON.parse(storedData);
      } catch (e) {
        console.error('Error loading data from localStorage:', e);
        this.employees = [];
      }
    }
  }

  _saveToLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  getAllEmployees() {
    return [...this.employees];
  }

  getEmployeeById(id) {
    return this.employees.find(emp => emp.id === id);
  }

  updateEmployee(id, updatedData) {
    this.employees = this.employees.map(emp => 
      emp.id === id ? { ...emp, ...updatedData } : emp
    );
    this._saveToLocalStorage();
    this._notifyChange();
  }

  deleteEmployee(id) {
    this.employees = this.employees.filter(emp => emp.id !== id);
    this._saveToLocalStorage();
    this._notifyChange();
  }

  getFilteredEmployees(searchQuery = '') {
    if (!searchQuery.trim()) return this.employees;
  
    const query = this._turkishToEnglish(searchQuery.toLowerCase().trim());
    
    return this.employees.filter(employee => {
      const normalizedFirstName = this._turkishToEnglish(employee.firstName.toLowerCase());
      const normalizedLastName = this._turkishToEnglish(employee.lastName.toLowerCase());
      const fullName = `${normalizedFirstName} ${normalizedLastName}`;
      const reverseName = `${normalizedLastName} ${normalizedFirstName}`;
      
      return fullName.includes(query) || 
             reverseName.includes(query) ||
             normalizedFirstName.includes(query) ||
             normalizedLastName.includes(query);
    });
  }

  filterByDepartment(department) {
    return this.employees.filter(emp => 
      emp.department.toLowerCase() === department.toLowerCase()
    );
  }

  _notifyChange() {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('employees-changed', {
        detail: { employees: this.employees }
      }));
    }
    
    this.listeners.forEach(listener => {
      try {
        listener(this.employees);
      } catch (error) {
        console.error('Error notifying listener:', error);
      }
    });
  }

  getEmployee(id) {
    return this.employees.find(emp => emp.id === id);
  }

  updateEmployee(id, updatedEmployee) {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index === -1) throw new Error('Employee not found');

    // Aynı isim-soyisim kontrolü (kendisi hariç)
    const isDuplicate = this.employees.some(emp => 
      emp.id !== id && 
      emp.firstName.toLowerCase() === updatedEmployee.firstName.toLowerCase() && 
      emp.lastName.toLowerCase() === updatedEmployee.lastName.toLowerCase()
    );

    if (isDuplicate) {
      throw new Error('An employee with this name already exists');
    }

    this.employees[index] = {
      ...this.employees[index],
      ...updatedEmployee,
      id
    };

    this._saveToLocalStorage();
    this._notifyChange();
  }

  async deleteEmployees(employeeIds) {
    try {
      const storedEmployees = localStorage.getItem('employees');
      if (storedEmployees) {
        let employees = JSON.parse(storedEmployees);
        
        employees = employees.filter(employee => !employeeIds.includes(employee.id));
        
        localStorage.setItem('employees', JSON.stringify(employees));
        
        this.employees = employees;
        
        this.notifyListeners();
      }
      
      return true;
    } catch (error) {
      console.error('Error deleting employees:', error);
      throw error;
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.employees));
  }
}

export const employeeStore = new EmployeeStore();

// Generate mock data if there is no data in localStorage 
// (this is only for the demo, in a real-world app, you would not need this)
// If you want to avoid generating mock data every time you refresh the page,
// you can comment out the following line below.
// employeeStore.generateNewMockData(); 