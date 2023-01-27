import RoutesConfig from "./Routes";
import { UserContext } from "./context/UserContext";
import { ToastContainer } from 'react-toastify';
import { useState } from "react";
import { getCurrentUserLocalStorage } from './services/authService';

function App() {
    const [user, setUser] = useState(getCurrentUserLocalStorage());

    return (
        <UserContext.Provider value={[user, setUser]}>
            <RoutesConfig />
            <ToastContainer />
        </UserContext.Provider>
    );
}

export default App;