import {useEffect,useState} from "react"
import Header_cp from './components/Header_cp';
import Card_cp from './components/Card_cp';
import './App.css'

// to use url of server......we can also export if we want to use in other component

export const BASE_URL = "http://localhost:9000";

const App = () => {

const [data,setData] = useState(null);
const [loading,setLoading] = useState(false);
const [error,setError] = useState(null);
const [filteredData,setFilteredData] = useState(null)


useEffect(()=>{

  const fetchFoodData = async () =>{
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
  
      setData(json);  
      setFilteredData(json);
      setLoading(false);
      
    } catch (error) {
      setError("Unable to fetch data.....");
    }
  
  
  };
  fetchFoodData();

},[]);


if (error) {
  return <div>{error}</div>;
}
if (loading) {
  return <div>loading...........</div>;
}


console.log(data);
  return <div>
<Header_cp 

setFilteredData = {setFilteredData}
data = {data}

/>
<Card_cp 
// key = {data.name}
data = {filteredData}
/>

  </div>
};

export default App;
