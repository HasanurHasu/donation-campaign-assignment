
import PropTypes from 'prop-types';

const Card = ({ donation }) => {
    const { picture, title, category, category_bg, card_bg, text_color, } = donation;
    const cardbg = {
        
    }
    console.log(cardbg);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div style={{backgroundColor: card_bg}} className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    donation: PropTypes.object
};

export default Card;