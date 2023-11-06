import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Sobremi from "./pages/Sobremi";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import './App.css';

function App() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<Inicio />} />
            <Route path="sobremi" element={<Sobremi />} />
            <Route path="proyectos" element={<Proyectos />} />
            <Route path="contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
  </div>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
