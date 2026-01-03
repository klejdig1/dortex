function CustomerTable({ customers }) {
    return (
        <table className="crm-table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Created</th>
            </tr>
            </thead>

            <tbody>
            {customers.map(c => (
                <tr key={c.id}>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td>{c.phone}</td>
                    <td>{new Date(c.created_at).toLocaleDateString()}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default CustomerTable;
