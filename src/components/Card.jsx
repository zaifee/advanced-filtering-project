
import { BsFillBagFill } from "react-icons/bs";

const Card = () => {
  return (
    <>
      <section className="card">
        <img  className="card-img" />
        <div className="card-details">
          <h3 className="card-title"></h3>
          <section className="card-reviews">
            
            <span className="total-reviews"></span>
          </section>
          <section className="card-price">
            <div className="price">
              <del></del> 
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
