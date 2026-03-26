import { usestate } from 'react';

function EmployeeForm({ onAdd }) {
    const [form, setform] = usestate({
        name: "",
        position: "",
        departement: "",
    });
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(form);
        setform({
            name: "",
            position: "",
            departement: "",
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            <input name="position" value={form.position} onChange={handleChange} placeholder="Position" required />
            <input name="departement" value={form.departement} onChange={handleChange} placeholder="Departement" required />
            <button type="submit">Add Employee</button>
        </form>
    );
}

export default EmployeeForm;