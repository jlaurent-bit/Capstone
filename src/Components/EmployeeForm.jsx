import { useState } from 'react';

function EmployeeForm({ onAdd }) {
    const [form, setForm] = useState({
        name: "",
        position: "",
        department: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(form);

        setForm({
            name: "",
            position: "",
            department: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            <input name="position" value={form.position} onChange={handleChange} placeholder="Position" required />
            <input name="department" value={form.department} onChange={handleChange} placeholder="Department" required />
            <button type="submit">Add Employee</button>
        </form>
    );
}

export default EmployeeForm;