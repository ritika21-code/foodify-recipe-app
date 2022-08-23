
// import React from 'react'

// function Info() {
  


     
import React from 'react'

function Info({meal}) {
  return (
  
       <div >
    <h2 className='ing'>Ingredients</h2><br />
<h4 >{meal.strIngredient1} : {meal.strMeasure1}</h4>
<h4>{meal.strIngredient2} : {meal.strMeasure2}</h4>
<h4>{meal.strIngredient3} : {meal.strMeasure3}</h4>
<h4>{meal.strIngredient4} : {meal.strMeasure4}</h4>
<h4>{meal.strIngredient5} : {meal.strMeasure5}</h4>
<h4>{meal.strIngredient6} : {meal.strMeasure6}</h4>
<h4>{meal.strIngredient7} : {meal.strMeasure7}</h4>

 </div>                 
        
  )
}

export default Info