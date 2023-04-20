import { useState } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
const UserStore = createContext();

const UserStoreProvider = ({ children }) => {

    //get user data with auth


    const [user, setUser] = useState([]);
    const [allUser, setAllUser] = useState([]);
    const [allAdmin, setAllAdmin] = useState([]);







    //this state stored user data  //==> Don't move this one !
    const userData = {
        user,
        allUser,
        allAdmin,

    };
    //user context provider component //==> Don't move this one !
    return <UserStore.Provider value={userData}>{children}</UserStore.Provider>;
};

export { UserStore, UserStoreProvider };
