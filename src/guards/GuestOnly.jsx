import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUserDetails } from "../context/UserContext";

export default function GuestOnly({ component: Component, fallback = '/' }) {
    const [user] = useUserDetails();
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