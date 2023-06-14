import { useEffect, useState } from "react";
import axios from "axios";

const useDeleteData = (method, url, body) => {
    const [isDeleteLoading, setIsDeleteLoading] = useState(false);
    const [apiDeleteData, setApiDeleteData] = useState([]);
    const [apiError, setApiError] = useState('');
    const saveToken = sessionStorage.getItem("accessToken");

    const parts = url.split('/');
    const lastNumber = parseInt(parts[parts.length - 1]);




    useEffect(() => {
        setIsDeleteLoading(true);
        const fetchData = async () => {
            try {

                if (!lastNumber) {
                    setIsDeleteLoading(false);
                    return
                }
                const response = await axios({
                    method: method,
                    url: url,
                    data: body,
                    headers: {
                        'Authorization': 'Token ' + saveToken,
                    }
                });
                const data = await response;

                setApiDeleteData(data);
                setIsDeleteLoading(false);
            } catch (error) {
                setApiError(error);
                setIsDeleteLoading(false);
            }
        };

        fetchData();

    }, [url, method, body, saveToken, lastNumber]);

    return { isDeleteLoading, apiDeleteData, apiError };
};

export default useDeleteData;
