import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../utility/localStorage";
import SubmitDonationDetails from "../SubmitDonationDetails/SubmitDonationDetails";

const Donation = () => {
    const donations = useLoaderData();
    const [submitDonation, setSubmitDonation] = useState([])
    const [showAll, setShowAll] = useState([]);
    const [btnShow, setBtnShow] = useState(true);

    const handleSeeAll = () => {
        setSubmitDonation(showAll)
        setBtnShow(false)
    }


    useEffect(() => {
        const storedDonationId = getStoredDonations()
        if (donations.length > 0) {
            const donationSubmit = donations.filter(donation => storedDonationId.includes(donation.id));
            setSubmitDonation(donationSubmit.slice(0, 4))
            setShowAll(donationSubmit)
        }
    }, [donations])



    return (
        <div className="max-w-6xl m-auto">
            <div className="grid grid-cols-2 gap-5">
                {
                    submitDonation.map(donation => <SubmitDonationDetails key={donation.id} donation={donation}></SubmitDonationDetails>)
                }

            </div>
            <div className="flex justify-center mt-10">
                <button
                    onClick={handleSeeAll}
                    className={`text-white font-semibold bg-[#009444] py-2 px-7 rounded-md ${showAll.length <= 4 && 'hidden'} ${btnShow || 'hidden'}`}>See All</button>
            </div>
        </div>
    );
};

export default Donation;