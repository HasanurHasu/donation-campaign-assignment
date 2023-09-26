import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import Search from "../Search/Search";
import { useEffect, useState } from "react";

const Home = () => {
    const donationsData = useLoaderData()
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        setDonations(donationsData)
    }, [donationsData])



    const handleSubmit = e => {
        e.preventDefault();
        const searchValue = e.target.text.value;
        const searchResult = donationsData.filter(searchResult => searchResult.category === searchValue);
        setDonations(searchResult)
    }
    return (

        <div className="">
            <Search handleSubmit={handleSubmit}></Search>
            <div className="max-w-6xl lg:m-auto flex flex-col mx-8 md:grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                {
                    donations.map((donation, idx) => <Card key={idx} donation={donation}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;