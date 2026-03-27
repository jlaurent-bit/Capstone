import { useState } from 'react';
import "./EmployeeForm.css";

function EmployeeForm({ onAdd }) {
    const [form, setForm] = useState({
        name: "",
        position: "",
        department: "",
        active: true
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(form);

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit déclenché");
    onAdd(form);
};

        setForm({
            name: "",
            position: "",
            department: "",
            active: true
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            <input name="position" value={form.position} onChange={handleChange} placeholder="Position" required />
            <input name="department" value={form.department} onChange={handleChange} placeholder="Department" required />
            <button type="submit">Add Employee</button>
            <select name="active" value={form.active} onChange={(e) =>
                setForm({ ...form, active: e.target.value === "true" })
            }>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>
        </form>
    );
}

export default EmployeeForm;