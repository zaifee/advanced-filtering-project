import './Category.css';

const Category = () => {
  return (
   <>
    <div className="sidebar-title">
      <h3>Category</h3>

      <div className='sidebar-items'>
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
      </div>

    </div>
   </>
  )
}

export default Category