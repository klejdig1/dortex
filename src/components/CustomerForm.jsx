import { useState } from 'react';
import { createCustomer } from '/src/api/📁 apiCustomers.js';

function CustomerForm({ onSuccess }) {
    const [form, setForm] = useState({
        name: 'klejdi',
        email: 'klejdi@gmail.com',
        phone: '3242343242'
    });

    async function handleSubmit(e) {
        e.preventDefault();
        await createCustomer(form);
        setForm({ name: '', email: '', phone: '' });
        onSuccess();
    }

    return (
        <form className="crm-form" onSubmit={handleSubmit}>
            <input
                placeholder="Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
            />

            <input
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
            />

            <input
                placeholder="Phone"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
            />

            <button>Add Customer</button>
        </form>
    );
}

export default CustomerForm;
