import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const goto = useNavigate();

    useEffect(() =>
    //setTimeout(() => {
    {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(response => {
                if (!response.ok) {
                    throw Error("AN ERROR OCCURED");
                }
                return response.json()
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
                console.log(data);
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('Fetch Aborted');
                    goto('/NotFound');
                } else {
                    setIsLoading(false);
                    setError(error.message);
                    console.log(error);
                    goto('/NotFound');
                }
            })
        return () => {
            abortCont.abort();

        }
    }
        //  }, 1000)
        , [url])

    return { data, isLoading, error }
}

export default useFetch;