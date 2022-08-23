import React from 'react'
import { mycontext } from '../components/Context'

function Categories() {
  const { fetchcategories,categories } = React.useContext(mycontext);
  React.useEffect(() => {
    fetchcategories();
  }, [fetchcategories])
  return (
     <div className="categories">
      {categories.map((category) => (
        <div key={category.idCategory}>
          <img src={category.strCategoryThumb} alt="#" />
          <h4>{category.strCategory}</h4>
        </div>
      ))}
    </div>
  );
}

export default Categories;