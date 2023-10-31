import{useState} from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'localhost:8800/api'

const useFetch = (url) =>{
    const [data,setData] = useState([ ]);
    const [loading, setloading] = useState(false);
    const [error,setError] = useState(false);

    useEffect(()=>{
        const fetchData =async () => {
            setloading(true);
            try{
                const res = await axios.get(url);
                setData(res.data);
            }catch(error){
                setError(err);
            }
            setloading(false);
        };
        fetchData();
    },[url]);

    const reFetch =async () => {
        setloading(true);
        try{
            const res = await axios.get(url);
            setData(res.data);
        }catch(error){
            setError(err);
        }
        setloading(false);
    };
    return (data, loading, error, reFetch);
};

export default useFetch;