function Sidebar({ role }) {
    return (
        <aside className="sidebar">
            <h2>CRM</h2>

            <nav>
                <a href="/">Dashboard</a>
                <a href="/customers">Customers</a>

                {role === 'admin' && (
                    <a href="/settings">Settings</a>
                )}
            </nav>
        </aside>
    );
}

export default Sidebar;
