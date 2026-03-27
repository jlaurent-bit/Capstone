import EmployeeCard from "./EmployeeCard";
import "./EmployeeList.css";

function EmployeeList({ employees }) {
  return (
    <div className="list">
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
}

export default EmployeeList;