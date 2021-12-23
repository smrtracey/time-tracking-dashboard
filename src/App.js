import {useState,useEffect} from 'react'


import Profile from './components/Profile/Profile'
import GridItem from './components/GridItem/GridItem'

function App() {

  const[selectedTime,setSelectedTime] = useState('weekly')
  const[data, setData]= useState([])

  const changeTime = (choice) =>{
    setSelectedTime(choice)
  }

  const fetchData = async()=>{
    const res = await fetch('./data.json')
    const tempData = await res.json()
    setData(tempData)
  }

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <>
    <div className = 'mainGrid'>

      <Profile selectedTime = {selectedTime} changeTime = {changeTime}/>
      
      {
        data.map((activity) =>{
          return(
            <>

              <GridItem activity = {activity} selectedTime = {selectedTime}/>
            </>
          )
        })
      }
    </div>
    </>  
  );
}

export default App;
