
import PropTypes from 'prop-types';

const SubmitDonationDetails = ({ donation }) => {
    const { id, picture, title, category, category_bg, card_bg, text_color, price, button_bg } = donation;
    return (
        <div style={{ backgroundColor: card_bg }} className='rounded-md'>
            <div className='flex justify-start gap-5'>
                <div>
                    <img src={picture} alt="" className='w-48 h-40 rounded-l-md' />
                </div>
                <div>
                    <div className='py-4'>
                        <p style={{ backgroundColor: category_bg, color: text_color }} className='py-1 px-[10px] inline rounded'>{category}</p>
                        <p className='pt-2 text-lg font-semibold text-black'>{title}</p>
                        <p style={{ color: text_color, fontWeight: '600' }}>{price}</p>
                        <button style={{ backgroundColor: button_bg }} className="mt-1 py-2 px-4 rounded text-white text-base font-semibold">View Details</button>
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