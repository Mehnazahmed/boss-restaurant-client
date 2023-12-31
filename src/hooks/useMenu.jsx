import { useQuery } from "@tanstack/react-query";

const useMenu =()=>{
    
    // const [menu,setMenu]=useState([]);
    // const [loading,setLoading]=useState(true);
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/menu');
            return res.json();
        }
    })
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
            
    //         setMenu(data)
    //         setLoading(false)
    //     })
    // },[])
    return [menu, loading, refetch]
}
export default useMenu;