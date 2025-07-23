import './Color.css';

const Color = () => {
  return (
    <div className='ml'>
       <h2 className='sidebar-title color-title'>Price</h2>
    
    <label className="sidebar-label-container">
      <input type="radio" name="test2" />
        <span className="checkmark"></span> All
    </label>

    <label className="sidebar-label-container">
      <input type="radio" name="test2" />
        <span className="checkmark"></span> Black
    </label>

    <label className="sidebar-label-container">
      <input type="radio" name="test2" />
        <span className="checkmark"></span> White
    </label>

    <label className="sidebar-label-container">
      <input type="radio" name="test2" />
        <span className="checkmark"></span> Green
    </label>

    <label className="sidebar-label-container">
      <input type="radio" name="test2" />
        <span className="checkmark"></span> Orange
    </label>

    </div>
  )
}

export default Color