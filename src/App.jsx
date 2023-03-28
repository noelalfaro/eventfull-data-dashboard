import { useState, useEffect } from 'react'
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import './App.css'
import DataList from './Components/DataList';
import NavBar from './Components/NavBar';


function App() {
  const [list, setList] = useState(null)


  useEffect(() => {
    const fetchSeatGeekData = async () => {
      const response = await fetch(
        // how do we call an API using fetch? 
        "https://api.seatgeek.com/2/events?per_page=25&client_id="
        + API_KEY
      );
      const json = await response.json();
      setList(json)
    };

    fetchSeatGeekData().catch(console.error);
  }, []);

  // console.log('list: ', list)
  return (
    <div className='whole-page'>
      <NavBar></NavBar>
      <DataList list={list}></DataList>
    </div>
  )
}

export default App
