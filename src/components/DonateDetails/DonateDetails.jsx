import { useLoaderData, useParams } from "react-router-dom";

const DonateDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseFloat(id);



    const donation = donations.find(donation => donation.id === idInt);
    const { picture, button_bg, title, description, price } = donation;

    return (
        <div className="max-w-6xl m-auto">
            <div className="">
                <div style={{ backgroundImage: `url(${picture})`, backgroundSize: 'cover' }} className="h-[550px] flex items-end rounded-md">
                    <div className="bg-black opacity-80 w-full rounded-b-md"><button style={{ backgroundColor: button_bg }} className="m-7 py-4 px-6 rounded text-white text-lg font-semibold">Donate {price}</button></div>
                </div>
            </div>

            <h1 className="text-[#0B0B0B] text-4xl font-bold my-7">{title}</h1>
            <p className="text-base text-justify">{description}</p>
        </div>
    );
};

export default DonateDetails;