import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Home = () => {
    const donations = useLoaderData()
    return (

        <div className="max-w-6xl m-auto">
            <h1 className="text-center">This is home page {donations.length}</h1>
            <div className="md:grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                {
                    donations.map((donation, idx) => <Card key={idx} donation={donation}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;