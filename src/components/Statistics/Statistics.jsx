import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";

const Statistics = () => {
    const donations = useLoaderData();
    console.log(donations);



    const data = [
        {
          "name": "Group A",
          "value": 80
        },
        {
          "name": "Group B",
          "value": 10
        }
      ]
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">This is Statistics page {donations.length}</h1>


            <PieChart width={730} height={250}>
                <Pie data={data} cx="50%" cy="50%" outerRadius={100} label>
                    
                </Pie>
            </PieChart>

        </div>
    );
};

export default Statistics;