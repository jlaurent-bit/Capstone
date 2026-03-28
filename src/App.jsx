import { useState } from "react";
import EmployeeList from "./Components/EmployeeList";
import EmployeeForm from "./Components/EmployeeForm";

function App() {

  const [employees, setEmployees] = useState([]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
  };

  return (
    <div className="container">
      <h1>Nos employés</h1>
      <EmployeeForm onAdd={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;