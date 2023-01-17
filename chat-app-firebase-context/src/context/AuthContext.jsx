import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

// Create Context
const AuthContext = createContext();

// Initialize useContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // get user data
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false)
            {user !== null && navigate('/chats')}
        })
    }, [user, navigate]);

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}