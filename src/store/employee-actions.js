import { EmployeeService } from '../services/employee-service';
import { setLoading, showToast, setError } from './app-slice';
import { addEmployee, updateEmployee, deleteEmployee, setEmployees } from './employee-slice';

export const fetchEmployees = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const employees = await EmployeeService.getEmployees();
    dispatch(setEmployees(employees));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(showToast({
      message: 'Failed to fetch employees',
      type: 'error'
    }));
    dispatch(setLoading(false));
  }
};

export const createEmployee = (employee) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const newEmployee = await EmployeeService.addEmployee(employee);
    dispatch(addEmployee(newEmployee));
    dispatch(showToast({
      message: 'Employee added successfully',
      type: 'success'
    }));
    dispatch(setLoading(false));
    return true;
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(showToast({
      message: 'Failed to add employee',
      type: 'error'
    }));
    dispatch(setLoading(false));
    return false;
  }
};

export const updateEmployeeData = (id, employee) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const updatedEmployee = await EmployeeService.updateEmployee(id, employee);
    dispatch(updateEmployee(updatedEmployee));
    dispatch(showToast({
      message: 'Employee updated successfully',
      type: 'success'
    }));
    dispatch(setLoading(false));
    return true;
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(showToast({
      message: 'Failed to update employee',
      type: 'error'
    }));
    dispatch(setLoading(false));
    return false;
  }
};

export const removeEmployee = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await EmployeeService.deleteEmployee(id);
    dispatch(deleteEmployee(id));
    dispatch(showToast({
      message: 'Employee deleted successfully',
      type: 'success'
    }));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(showToast({
      message: 'Failed to delete employee',
      type: 'error'
    }));
    dispatch(setLoading(false));
  }
}; 