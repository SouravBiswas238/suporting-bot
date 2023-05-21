import { useEffect, useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [loginUser, setLoginUser] = useState(false)
    const initializeAccessToken = () => {
        const saveToken = sessionStorage.getItem("accessToken");
        if (saveToken) {
            setLoginUser(saveToken);
        }
    }
    useEffect(() => {
        initializeAccessToken()
    }, [])

    const value = { loginUser, setLoginUser };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
export {AuthContext};