import axios from "axios";
import { useEffect,useState } from "react";


export default function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            setLoading(true);
            try{
                const res = await axios.get(url);
                setData(res.data);
                setLoading(false);
            }catch(err){
             setError(err.message || "something went wrong")
            } finally{
                setLoading(false)
            }
        }
        if(url) fetchData()
    },[url])

    return{data, loading, error};
}