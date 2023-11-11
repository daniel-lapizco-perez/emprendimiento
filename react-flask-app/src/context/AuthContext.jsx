import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail
} from "firebase/auth";

import {auth} from "../firebase";

const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if(!context) throw new Error("There's no Auth Provider");
    return context;
}

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        signOut(auth);
    };

    const resetPassword = async (email) => {
        sendPasswordResetEmail(auth, email);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            try{
                setRole(JSON.parse(currentUser.reloadUserInfo.customAttributes).role);
            }catch(error){
                setRole("")
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return(
        <authContext.Provider
            value={{
                signup,
                login,
                user,
                logout,
                loading,
                resetPassword,
                role,
            }}
        >
            {children}
        </authContext.Provider>
    );
}