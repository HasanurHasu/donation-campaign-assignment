import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../utility/localStorage";
import SubmitDonationDetails from "../SubmitDonationDetails/SubmitDonationDetails";

const Donation = () => {
    const donations = useLoaderData();
    const [submitDonation, setSubmitDonation] = useState([])

    useEffect(() => {
        const storedDonationId = getStoredDonations()
        if (donations.length > 0) {
            const donationSubmit = donations.filter(donation => storedDonationId.includes(donation.id));
            setSubmitDonation(donationSubmit)
        }
    }, [donations])



    return (
        <div className="max-w-6xl m-auto grid grid-cols-2 gap-5">
            {
                submitDonation.map(donation => <SubmitDonationDetails key={donation.id} donation={donation}></SubmitDonationDetails>)
            }
        </div>
    );
};

export default Donation;