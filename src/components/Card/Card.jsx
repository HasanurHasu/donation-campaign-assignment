
import PropTypes from 'prop-types';

const Card = ({ donation }) => {
    const { picture, title, category, category_bg, card_bg, text_color, } = donation;
    return (
        <div style={{ backgroundColor: card_bg }} className="card card-compact rounded-md cursor-pointer">
            <figure><img src={picture} alt="Shoes" className='w-72 h-40' /></figure>
            <div className='p-4'>
                <p style={{ backgroundColor: category_bg, color: text_color }} className='py-1 px-[10px] inline rounded'>{category}</p>
                <p style={{color: text_color }} className='pt-2 text-lg font-semibold'>{title}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    donation: PropTypes.object
};

export default Card;