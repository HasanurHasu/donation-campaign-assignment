
import PropTypes from 'prop-types';

const Search = ({handleSubmit}) => {
    return (
        <div style={{ backgroundImage: 'url("https://i.ibb.co/rfphQRR/COMPRESSED-Master-of-social-work-in-australia.jpg")', backgroundPosition: 'center' }} className='mb-20'>
            <div className="w-full h-60 lg:h-[550px] bg-white opacity-90 flex justify-center items-center flex-col gap-5 lg:gap-8">
                <h1 className="text-xl lg:text-4xl font-bold">I Grow By Helping People In Need</h1>
                <div className="border text-[#0B0B0B66] text-sm rounded-lg  flex">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="text" className="pl-4 py-2 lg:pl-7 lg:py-4 rounded-l-lg lg:w-72" placeholder="Search here...." />
                        <input type="submit" value="Search" className="bg-[#FF444A] cursor-pointer px-3 py-2 lg:px-7 lg:py-4  rounded-r-lg text-white font-semibold" />
                    </form>

                </div>
            </div>
        </div>
    );
};

Search.propTypes = {
    handleSubmit: PropTypes.func
};

export default Search;