import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Home = () => {
    const donations = useLoaderData()
    return (

        <div className="max-w-6xl m-auto">
            <h1 className="text-center">This is home page {donations.length}</h1>
            {
                donations.map((donation, idx) => <Card key={idx} donation={donation}></Card>)
            }
        </div>
    );
};

export default Home;