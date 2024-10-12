import { useEffect, useState, useCallback } from "react";

async function sendHttpRequest(url, confing) {
    const response = await fetch(url, confing);

    const resData = await response.json();

    if(!response.ok) {
        throw new Error(
            resData.message || 'Something went wrong, failed to send request'
        );
    }

    return resData;
}

export default function useHttp(url, confing, initialData) {
    const [data, setData] = useState( initialData);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState();

    function clearData() {
        setData(initialData);
    }

    const sendRequest = useCallback(async function sendRequest(data) {
        setLoading(true);
        try {
            const resData = await sendHttpRequest(url,{ ...confing, body: data});
            setData(resData);   
        } catch (error){
            setError(error.message || 'Something went wrong!');
        }

        setLoading(false)
    }, [url, confing]);

    useEffect(() =>  {
        if (confing && (confing.method === 'GET' || !confing.method || !confing)){
            sendRequest();
        }
    }, [sendRequest, confing]);

    return {
        data,
        isLoading,
        error,
        sendRequest,
        clearData,
        
    }
}