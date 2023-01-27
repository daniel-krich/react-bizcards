import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

export default function GuestOnly({ component: Component, fallback = '/' }) {
    const [user] = useContext(UserContext);
    const navigate = useNavigate();

    const isGuest = !user;

    useEffect(() => {

        if(!isGuest) {
            navigate(fallback);
        }

    }, []);

    return (
        isGuest ? <Component /> : null
    );
    
}