import React, { useState } from 'react'
import Navigation from './Navigation/Nav'
import Products from './Products/Product'
import Nav from './Navigation/Nav'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import Card from './components/Card'

//Database
import products from './db/data'



const App = () => {

  const[selectedCategory, setSelectedCategory] = useState(null);

  //---------Input filter -------------
  const[query, setQuery] = useState("");

 const handleInputChange = (event) => {
   setQuery(event.target.value);
 }

 const filteredItems = products.filter((product) => 
   product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
)

// radio filter 
const handleChange = (event) => {
  setSelectedCategory(event.target.value);
}

//button filter 
const handleClick = (event) => {
  setSelectedCategory(event.target.value);
}


function filteredProducts(products, selected, query){
  let filteredProducts = products;

  //filtering the input 
  if(query){
    filteredProducts = filteredItems;
  }

  //selected filter 
  if(selected){
    filteredProducts = filteredProducts.filter(
      ({selectedCategory, color, company, newPrice, title}) => 
        selectedCategory == selected ||
        color == selected ||
        company == selected ||
        newPrice == selected ||
        title == selected
    )
  };

  return filteredProducts.map(
    ({img, title, star, reviews, newPrice, prevPrice}) => (
      <Card 
       key={Math.random()}
       img={img}
       title={title}
       star={star}
       reviews={reviews}
       newPrice={newPrice}
       prevPrice={prevPrice}

      />
    )
  )


}
filteredProducts(products, selectedCategory, query)
  return(
    <div style={{display: "flex"}}>
    <Sidebar handleChange={handleChange}/>
    <div style={{flex: 1}}>
        <Nav />
        <Recommended />
        <Products /> 
    </div>
    
    </div>

  );
  
}

export default App