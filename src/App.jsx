import './App.css'
import Dashboard from "./components/Dashboard.jsx";
import {useAuth} from "./auth/useAuth.js";

function App() {
    const { user, role } = useAuth();

    return(
      <div>
          <h1>Welcome {user.email}</h1>
          <p>Role: {role}</p>
      <Dashboard/>
      </div>
  )

}

export default App
