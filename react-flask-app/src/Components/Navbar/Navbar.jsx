import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import {
    CNavbar,
    CContainer, 
    CNavbarBrand,
    CNavbarToggler,
    COffcanvas,
    COffcanvasHeader,
    COffcanvasTitle,
    CCloseButton,
    COffcanvasBody,
    CNavbarNav,
    CNavItem,
    CNavLink,
    CForm,
    CFormInput,
    CButton,
    CNav
} from "@coreui/react";

import {useAuth} from '../../context/AuthContext';

import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Navbar() {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const {logout, user, role} = useAuth();

    const handleSignOut = async () => {
        try{
            await logout();
            setVisible(false);
            navigate("/login");
        }catch(error){
            console.error(error.message)
        }
    }

    return(
        <>
            {
                user && <CNavbar className="navbar__main" color="primary">
                    <CContainer fluid>
                        <CNavbarToggler
                            aria-controls="offcanvasNavbar"
                            aria-label="Togglr navigation"
                            onClick={() => setVisible(!visible)}
                        />

                        <COffcanvas
                            id="offcanvasNavbar"
                            placement="start"
                            portal={false}
                            visible={visible}
                            onHide={() => setVisible(false)}
                            className="navbar__canvas"
                        >
                            <COffcanvasHeader>
                                <COffcanvasTitle>
                                    TBD
                                </COffcanvasTitle>
                                <CCloseButton className="text-reset" onClick={() => setVisible(false)}/> 
                            </COffcanvasHeader>

                            <COffcanvasBody>
                                <COffcanvasTitle>{user ? user.email : "Usuario"}</COffcanvasTitle>
                                {/*Aqui va foto de perfil con etiqueta img*/}

                                <CNavbarNav>
                                    <CNavItem>
                                        <CForm>
                                            <CFormInput type="search" className="me-2" placeholder="search"/>
                                            <CButton type="submit" color="success" variant="outline">
                                                Search
                                            </CButton>
                                        </CForm>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink href="#" onClick={() => navigate("/")}>
                                            Inicio
                                        </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink href="#" onClick={() => navigate("/empleados")}>
                                            Empleados
                                        </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink href="#" onClick={() => navigate("/tickets")}>
                                            Tickets
                                        </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink href="#" onClick={() => navigate("/comentarios")}>
                                            Comentarios
                                        </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink href="#" onClick={handleSignOut}>
                                            Cerrar Sesión
                                        </CNavLink>
                                    </CNavItem>
                                </CNavbarNav>
                            </COffcanvasBody>
                        </COffcanvas>
                        <CNavbarBrand>Centro de servicios</CNavbarBrand>
                    </CContainer>
                </CNavbar>
            }
        </>
    );
};