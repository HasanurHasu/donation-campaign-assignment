
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ donation }) => {
    const { id, picture, title, category, category_bg, card_bg, text_color, } = donation;
    return (
        <Link to={`/donate/${id}`}>
            <div style={{ backgroundColor: card_bg }} className="card card-compact rounded-md cursor-pointer">
                <figure><img src={picture} alt="Shoes" className='w-80 h-40' /></figure>
                <div className='p-4'>
                    <p style={{ backgroundColor: category_bg, color: text_color }} className='py-1 px-[10px] inline rounded'>{category}</p>
                    <p style={{ color: text_color }} className='pt-2 text-lg font-semibold'>{title}</p>
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    donation: PropTypes.object
};

export default Card;