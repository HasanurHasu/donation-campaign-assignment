
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, } from 'recharts';
import { getStoredDonations } from '../utility/localStorage';

const Statistics = () => {
  const donations = useLoaderData()
  const [submitDonation, setSubmitDonation] = useState([])

  useEffect(() => {
    const storedDonationId = getStoredDonations()
    if (donations.length > 0) {
      const donationSubmit = donations.filter(donation => storedDonationId.includes(donation.id));
      setSubmitDonation(donationSubmit);
      
    }
  }, [donations])
  const data = [
    { name: 'Your Donation', value: submitDonation.length },
    { name: 'Total Donation', value: donations.length }
  ];

  const COLORS = ['#FF444A', '#00C49F'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className='flex justify-center'>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Statistics;