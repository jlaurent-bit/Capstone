import "./EmployeeCard.css";

function EmployeeCard({ employee }) {
    return (
        <div className="card">
            <div className="info">
                <p><span>Nom:</span> {employee.name}</p>
                <p><span>Position:</span> {employee.position}</p>
                <p><span>Département:</span> {employee.department}</p>
            </div>

            <div className={`status ${employee.active ? "active" : "inactive"}`}>
                {employee.active ? "Active" : "Inactive"}
            </div>
        </div>
    );
}

export default EmployeeCard;