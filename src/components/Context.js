import React,{createContext} from "react";
import axios from "axios";
export const mycontext=createContext();

function Appcontext({children}) {
    const [meals,setmeals]=React.useState([]);
    const [categories,setcategories]=React.useState([]);
    const [recinfo,setrecinfo]=React.useState([]);

const fetchinfo=React.useCallback((select)=>{
  axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${select}`)
  .then(res=>{console.log(res.data.meals);
    setrecinfo(res.data.meals)})

},[]);    

const fetchmeals=React.useCallback((searcht)=>{
   axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searcht}`)
.then(res=>{console.log(res.data.meals);
setmeals(res.data.meals)});
},[])

const fetchcategories=React.useCallback(
  () => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php
    `)
    .then((res)=>{
      console.log(res.data.categories);
    setcategories(res.data.categories);
  });
  },[]);


  return (
    <mycontext.Provider value={{fetchmeals,meals,fetchcategories,categories,fetchinfo,recinfo}}>{children}</mycontext.Provider>
  )
}

export default Appcontext