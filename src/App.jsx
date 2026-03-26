import { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

function App() {
  const [Employees, setEmployees] = useState([
    {id: 1, name: "Jean", position: "dev", departement: "IT", active: true},
    {id: 2, name: "Marie", position: "RH", departement: "RH", active: false},
  ]);
  const addEmployee = (newEmployee) => {
    setEmployees([...Employees, { ...newEmployee, id: Date.now(), active: true }]);
  };

  return (
    <div>
      <h1>Employees</h1>
      <EmployeeForm onAdd={addEmployee} />
      <EmployeeList employees={Employees} />
    </div>
  )
}

export default App
