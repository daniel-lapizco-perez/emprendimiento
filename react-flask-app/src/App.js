import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";

import Home from "./Components/Home";
import Empleados from "./Components/Empleados";
import Tickets from "./Components/Tickets";
import Comentarios from "./Components/Comentarios";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return(
      <>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
            <Route path="/empleados" element={<ProtectedRoute><Empleados /></ProtectedRoute>}/>
            <Route path="/tickets" element={<ProtectedRoute><Tickets /></ProtectedRoute>}/>
            <Route path="/comentarios" element={<ProtectedRoute><Comentarios /></ProtectedRoute>}/>
          </Routes>
        </AuthProvider>
      </>
    )
}

export default App;