import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { UserType } from "../models/UserModel";

export default function BusinessOnly({ component: Component, fallback = '/' }) {
    const [user] = useContext(UserContext);
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