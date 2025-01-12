## Setup

Install dependencies:

```bash
npm install
npm start
```

## Important Notes
If the list is empty, I generate users. If you want to generate users you can use:

employeeStore.generateNewMockData(); 

this code is bottom line in employee-store.js file.

if you want to stop any generating, you can add comment to 

if (this.employees.length === 0) {
    this._generateMockData();
}

this condition in the same store file.

## Testing

Tests are not working.

