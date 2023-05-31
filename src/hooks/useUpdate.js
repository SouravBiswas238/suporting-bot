import { useEffect, useState } from "react";
import axios from "axios";

const useUpdate = (method, url, body) => {
    const [isLoading, setIsLoading] = useState(false);
    const [updatedData, setUpdatedData] = useState([]);
    const [apiError, setApiError] = useState('');
    const saveToken = sessionStorage.getItem("accessToken");


    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: method,
                    url: url,
                    data: body,
                    headers: {
                        'Authorization': 'Token ' + saveToken,
                    }
                });
                const data = await response;

                setUpdatedData(data);
                setIsLoading(false);
            } catch (error) {
                setApiError(error);
                setIsLoading(false);
            }
        };

        if (body !== {}) {
            fetchData();
        }
        fetchData();
    }, [url, method, body]);

    return { isLoading, updatedData, apiError };
};

export default useUpdate;
