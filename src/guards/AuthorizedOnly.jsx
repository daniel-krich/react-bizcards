import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

export default function AuthorizedOnly({ component: Component, fallback = '/' }) {

    const navigate = useNavigate();

    const isAuthenticated = useSelector((state) => state.auth.user !== null);

    const [show, setShow] = useState(false);

    useEffect(() => {

        if(!isAuthenticated) {
            navigate(fallback);
        }
        else {
            setShow(true);
        }

    }, []);

    return (
        show ? <Component /> : null
    );
    
}