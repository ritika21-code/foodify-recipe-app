import React from 'react'
import Recipecard from '../components/Recipecard';
import Categories from '../components/Categories';
import { mycontext } from '../components/Context';
import Info from '../components/Info';
function Recipe() {
  const [searcht, setsearcht] = React.useState("");
  
  const [show, setshow] = React.useState(false);
  const { fetchmeals, meals } = React.useContext(mycontext)
  const fetchmealhandler = React.useCallback(() => {
    fetchmeals(searcht);
    setshow(true);
  }, [searcht, fetchmeals])
  return (
   
    <div className='home '>
     
      <div className='searchbox'>
        <input type="text" placeholder='Type a meal name' value={searcht} onChange={(e) => setsearcht(e.target.value)} ></input>
        <button className='btn' onClick={fetchmealhandler}>Search</button>
      </div> 
      <div className='recipe-grid '>
        {show ? <Recipecard data={meals} /> : <Categories />
        }

      </div>
    </div>
  )
}

export default Recipe