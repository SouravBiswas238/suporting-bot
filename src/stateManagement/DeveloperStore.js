import { useEffect, useState } from 'react';

const DeveloperStore = () => {

    //developer info storage 
    const [devLoading, setDevLoading] = useState(true)
    const [devError, setDevError] = useState({})
    const [devData, setDevData] = useState([]);


    // Get developer information form developer api
    useEffect(() => {
        fetch("https://safe-oasis-01130.herokuapp.com/user/developer/", {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(req => req.json())
            .then(data => setDevData(data))
            .catch(err => setDevError(err))
        setDevLoading(false)
    }, [devError])

    return { developer: [devData, devError, devLoading] }
};

export default DeveloperStore;