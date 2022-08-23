import React from 'react'
import Info from './Info';

function Recipecard({ data }) {
   

    return (
        (!data) ? <h1 className='found'>Not Found...
            Please search for something else.
             
        </h1> : data.map((meal) => (
            <div className='meal' key={meal.idMeal}><div className=''>
                <img src={meal.strMealThumb} alt="#" />
                <h4 className='title' >{meal.strMeal}</h4>
                <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Video Tutorial
                </a></div>
                <div className=' ingridents'>
                    {<Info meal={meal}  />}
                </div>
               </div>
        ))
    )
}

export default Recipecard