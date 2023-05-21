import axios from 'axios';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import useDeleteData from '../hooks/useDeleteData';
import useFetch from '../hooks/useFetch';
import { serverLink } from '../utilities/links';

const CompanyStore = createContext();

const CompanyStoreProvider = ({ children }) => {
    //get user data with auth
    const [data, setData] = useState({});
    const [company, setCompany] = useState([]);
    const [deleteId, setDeleteID] = useState(Number);

    const saveToken = sessionStorage.getItem("accessToken");

    const { isLoading, apiData, apiError } = useFetch('POST', `${serverLink}/company/create`, data);

    const { status } = useDeleteData('DELETE', `${serverLink}/company/delete/${deleteId}`).apiData;



    // to get company data data
    useEffect(() => {
        axios.get(`${serverLink}/company/get/owned`, {
            headers: {
                'Authorization': 'Token ' + saveToken,
            }
        }).then(response => {
            // Handle the response data
            setCompany(response.data.results);

        })
            .catch(error => {
                // Handle the error
                console.error(error);
            });
    }, [saveToken, apiData, status])

    // user auth context
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



    //this state stored user data  //==> Don't move this one !
    const companyData = {
        company,
        setData,
        setDeleteID,
        isLoading,
        apiError,
        loginUser,
        setLoginUser,

    };
    //user context provider component //==> Don't move this one !
    return <CompanyStore.Provider value={companyData}>{children}</CompanyStore.Provider>;
};

export { CompanyStore as useCompanyStore, CompanyStoreProvider as CompanyStore };
