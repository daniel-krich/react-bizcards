import { createContext, useContext, useState } from "react";
import { getCurrentUserLocalStorage } from "../services/authService";

const UserContext = createContext(null);

export function useUserDetails() {
    const user = useContext(UserContext);
    return user;
}

export function UserContextProvider({ children }) {
    const userState = useState(getCurrentUserLocalStorage());
    return (
        <UserContext.Provider value={userState}>
            {children}
        </UserContext.Provider>
    );
}