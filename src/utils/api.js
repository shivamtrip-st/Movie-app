import axios from "axios"

const BASE_URL ="https://api.themoviedb.org/3";
  
const headers ='Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2M5ZGYzMjEzNWFiNWY3MGQyMWE4MGNiMmFlNTk1NSIsInN1YiI6IjY0ODA0ZTM3OTkyNTljMDExYzNlM2QyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-rBo7wZIV5_P9cgxonh4EPOMcAY5p73EECL4fZbtBJY'
  
export const fetchDataFromApi =async(url,params)=>{
    try{
        const {data}=await axios.get(BASE_URL+url,
            {
headers,params,
            }
        );
        return data;
    }
    catch (err){
        console.log(err);
        return err;

    }
}