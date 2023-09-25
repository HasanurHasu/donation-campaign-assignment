import { useLoaderData, useParams } from "react-router-dom";

const DonateDetails = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseFloat(id);

    
    const donation = donations.find(donation => donation.id === idInt);
    
console.log(donation, id);

    return (
        <div>
            <h1>This is  Donation {donation.id}</h1>
            <div>
                <img src={donation.picture} alt="" />
            </div>
        </div>
    );
};

export default DonateDetails;