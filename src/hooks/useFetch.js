import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (method, url, body) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState([]);
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
                const data = await response?.data;

                setApiData(data);
                setIsLoading(false);
            } catch (error) {
                setApiError(error);
                setIsLoading(false);
            }
        };

        if (body) {
            fetchData();
        }
    }, [url, method, body]);

    return { isLoading, apiData, apiError };
};

export default useFetch;
