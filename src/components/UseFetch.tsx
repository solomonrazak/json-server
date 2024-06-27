import {useState, useEffect} from 'react';

interface useFetchResults {
    data: any | null;
    isLoading: boolean;
    error: any | null;
}

const UseFetch = (url: string): useFetchResults => {

    const [data, setData] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<any | null>(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw new Error('Error fetching data')
                }
                return res.json();
            })
            .then ((data) => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error)
            })
        }, 1000)
    }, [url])
 


    return {data, isLoading, error}
}

export default UseFetch;