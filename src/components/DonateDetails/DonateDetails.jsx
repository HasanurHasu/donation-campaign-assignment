import { useLoaderData, useParams } from "react-router-dom";
import { saveDonations } from "../utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonateDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseFloat(id);
    const handleDonate = () => {
        saveDonations(idInt);
        toast.success('Your Donations Successfully')
    }



    const donation = donations.find(donation => donation.id === idInt);
    const { picture, button_bg, title, description, price } = donation;

    return (
        <div className="max-w-6xl lg:m-auto mx-8 mt-10 lg:mt-10">
            <div className="">
                <div style={{ backgroundImage: `url(${picture})`, backgroundSize: 'cover' }} className="h-56 md:h-[300px] lg:h-[550px] flex items-end rounded-md">
                    <div className="bg-black opacity-80 w-full rounded-b-md"><button onClick={handleDonate} style={{ backgroundColor: button_bg }} className="m-4 lg:m-7 py-2 lg:py-4 px-3 lg:px-6 rounded text-white text-base lg:text-lg font-semibold">Donate {price}</button></div>
                </div>
            </div>

            <h1 className="text-[#0B0B0B] text-xl md:text-3xl lg:text-4xl font-bold my-7">{title}</h1>
            <p className="text-base text-justify">{description}</p>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default DonateDetails;