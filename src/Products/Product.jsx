import './Product.css';
import { FaStar } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

const Product = () => {
  return (
    <>
     <section className="card-container">
        <section className="card">
            <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoes" />
            <div className="card-details">
                <div className="card-title"><h3>Shoe</h3></div>
                 <section className='card-reviews'>
                    <FaStar className='rating-start'/> <FaStar className='rating-start'/> <FaStar className='rating-start' /> <FaStar className='rating-start'/>
                    <span className='total-reviews'>4</span>

                 </section>

                 <section className="card-price">
                    <div className="price">
                        <del>$200</del> 300
                    </div>

                    <div className="bag">
                        <IoBag className='bag-icon'/>
                    </div>
                 </section>
            </div>
        </section>

         <section className="card">
            <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoes" />
            <div className="card-details">
                <div className="card-title"><h3>Shoe</h3></div>
                 <section className='card-reviews'>
                    <FaStar className='rating-start'/> <FaStar className='rating-start'/> <FaStar className='rating-start' /> <FaStar className='rating-start'/>
                    <span className='total-reviews'>4</span>

                 </section>

                 <section className="card-price">
                    <div className="price">
                        <del>$200</del> 300
                    </div>

                    <div className="bag">
                        <IoBag className='bag-icon'/>
                    </div>
                 </section>
            </div>
        </section>

         <section className="card">
            <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoes" />
            <div className="card-details">
                <div className="card-title"><h3>Shoe</h3></div>
                 <section className='card-reviews'>
                    <FaStar className='rating-start'/> <FaStar className='rating-start'/> <FaStar className='rating-start' /> <FaStar className='rating-start'/>
                    <span className='total-reviews'>4</span>

                 </section>

                 <section className="card-price">
                    <div className="price">
                        <del>$200</del> 300
                    </div>

                    <div className="bag">
                        <IoBag className='bag-icon'/>
                    </div>
                 </section>
            </div>
        </section>

         <section className="card">
            <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoes" />
            <div className="card-details">
                <div className="card-title"><h3>Shoe</h3></div>
                 <section className='card-reviews'>
                    <FaStar className='rating-start'/> <FaStar className='rating-start'/> <FaStar className='rating-start' /> <FaStar className='rating-start'/>
                    <span className='total-reviews'>4</span>

                 </section>

                 <section className="card-price">
                    <div className="price">
                        <del>$200</del> 300
                    </div>

                    <div className="bag">
                        <IoBag className='bag-icon'/>
                    </div>
                 </section>
            </div>
        </section>
        
         <section className="card">
            <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoes" />
            <div className="card-details">
                <div className="card-title"><h3>Shoe</h3></div>
                 <section className='card-reviews'>
                    <FaStar className='rating-start'/> <FaStar className='rating-start'/> <FaStar className='rating-start' /> <FaStar className='rating-start'/>
                    <span className='total-reviews'>4</span>

                 </section>

                 <section className="card-price">
                    <div className="price">
                        <del>$200</del> 300
                    </div>

                    <div className="bag">
                        <IoBag className='bag-icon'/>
                    </div>
                 </section>
            </div>
        </section>
         
     </section>
    </>
  )
}

export default Product