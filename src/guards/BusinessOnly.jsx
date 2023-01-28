import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../context/UserContext";
import { UserType } from "../models/UserModel";

export default function BusinessOnly({ component: Component, fallback = '/' }) {
    const [user] = useUserDetails();
    const navigate = useNavigate();

    const isBusinessAccount = user?.type === UserType.Business;

    useEffect(() => {

        if(!isBusinessAccount) {
            navigate(fallback);
        }

    }, []);

    return (
        isBusinessAccount ? <Component /> : null
    );
    
}