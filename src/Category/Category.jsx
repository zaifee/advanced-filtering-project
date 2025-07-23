import Input from '../components/Input';
import './Category.css';

const Category = ({handleChange}) => {
  return (
   <>
    <div className="sidebar-title">
      <h3>Category</h3>

      {/* <div className='sidebar-items'>
        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="checkmark"></span> All
        </label>   
        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="checkmark"></span> Sneakers
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="checkmark"></span> Flats
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="checkmark"></span> Sandals
        </label>
      <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="checkmark"></span> Heals
        </label>
      </div> */}
      <div>
       <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test"/>
        <span className="checkmark"></span>All
       </label>
       <Input 
       handleChange={handleChange}
       value="sneakers"
       title="Sneakers"
       name="test"
       
       />

      <Input 
       handleChange={handleChange}
       value="Sandals"
       title="Sandals"
       name="test1"
       
       />

      <Input 
       handleChange={handleChange}
       value="heels"
       title="Heels"
       name="test2"
       
       />
      </div>

    </div>
   </>
  )
}

export default Category