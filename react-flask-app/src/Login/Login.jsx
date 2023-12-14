import React, {useState} from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {login, resetPassword} = useAuth();

    const onLogin = async (e) => {
        e.preventDefault();

        try{
            await login(email, password);
            navigate("/");
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <>
            <div className="login__container_main">
                <div className="login__container_content">
                    <img className="login__logo" src="{logo}" alt="Organizaci[on"/>
                    <h1>Nombre de la empresa</h1>

                    <form className="login__form">
                        <TextField 
                            id="outlined-basic" 
                            label="Correo" 
                            variant="outlined"
                            onChange={(e)=>setEmail(e.target.value)}
                        />

                        <TextField  
                            id="outlined-basic"
                            label="Contraseña"
                            variant="outlined"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className="login__link">Recuperar contraseña</p>
                        <Button variant="outlined" onClick={onLogin}>Ingresar</Button>
                    </form>
                </div>
            </div>
        </>
    );
}