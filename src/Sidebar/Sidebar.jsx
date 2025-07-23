import './Sidebar.css';
import Category from '../Category/Category';
import Price from '../Price/Price';
import Colors from '../Colors/Color'
import { BsCartCheck } from "react-icons/bs";

const Sidebar = ({handleChange}) => {
  console.log(handleChange);
  
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1><BsCartCheck /></h1>
        </div>

        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>

    </section>
    </>
  )
}

export default Sidebar