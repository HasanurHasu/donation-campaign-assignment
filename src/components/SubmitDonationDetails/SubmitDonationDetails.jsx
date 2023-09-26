
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubmitDonationDetails = ({ donation }) => {
    const { id, picture, title, category, category_bg, card_bg, text_color, price, button_bg } = donation;
    return (
        <div style={{ backgroundColor: card_bg }} className='rounded-md'>
            <div className='flex flex-col lg:flex-row lg:justify-start md:flex-row md:justify-start lg:gap-5'>
                <div>
                    <img src={picture} alt="" className='w-full md:w-60 lg:w-48 h-40 rounded-t-md md:rounded-md lg:rounded-l-md' />
                </div>
                <div>
                    <div className='p-4 lg:p-0 lg:py-4'>
                        <p style={{ backgroundColor: category_bg, color: text_color }} className='py-1 px-[10px] inline rounded'>{category}</p>
                        <p className='pt-2 lg:text-lg font-semibold text-black'>{title}</p>
                        <p style={{ color: text_color, fontWeight: '600' }}>{price}</p>
                        <Link to={`/donate/${id}`}><button style={{ backgroundColor: button_bg }} className="mt-1 py-2 px-4 rounded text-white text-base font-semibold">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

SubmitDonationDetails.propTypes = {
    donation: PropTypes.object
};

export default SubmitDonationDetails;