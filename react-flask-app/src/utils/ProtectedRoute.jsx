import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({children}) => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    if (loading) return <h1>Cargando</h1>;
    if (!user) return navigate("/login");

    return <>{children}</>;
}

export default ProtectedRoute;