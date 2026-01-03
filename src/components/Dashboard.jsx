import { useEffect, useState } from 'react';
import CustomerTable from './CustomerTable';
import CustomerForm from './CustomerForm';
import { getCustomers } from '/src/api/📁 apiCustomers.js';
import '../styles/crm.css';

function Dashboard() {
    const [customers, setCustomers] = useState([]);

    async function loadCustomers() {
        const data = await getCustomers();
        setCustomers(data);
    }

    useEffect(() => {
        loadCustomers();
    }, []);

    return (
        <div className="dashboard">
            <h1>CRM Dashboard</h1>

            <CustomerForm onSuccess={loadCustomers} />
            <CustomerTable customers={customers} />
        </div>
    );
}

export default Dashboard;
