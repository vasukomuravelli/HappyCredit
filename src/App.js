import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/Homepage";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
