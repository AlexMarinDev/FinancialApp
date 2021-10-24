
import './App.css';
import Dashboard from './pages/Dashboard';
import { Router } from '@reach/router'
import NewInvoice from "./pages/NewInvoice";
import Invoices from "./pages/Invoices";

function App() {
  return (
    <div className="App">
      <header>
        <span>Accounting App</span>
      </header>
      <Router>
        <Dashboard path="/" />
        <NewInvoice path="/new" />
        <Invoices path={"/invoices"} />
      </Router>
    </div>
  );
}



export default App;
