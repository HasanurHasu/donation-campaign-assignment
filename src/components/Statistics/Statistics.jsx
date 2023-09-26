
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, Legend, } from 'recharts';
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
    { name: 'Total Donation', value: donations.length },
    { name: 'Your Donation', value: submitDonation.length }
  ];

  const COLORS = ['#FF444A', '#00C49F'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className='flex justify-center flex-col items-center'>
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
          <Legend verticalAlign="top" height={36} />

          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className='flex gap-14'>
        <div className='flex justify-center items-center gap-3'>
          <h1 className='text-lg text-[#0B0B0B]'>{data[1].name}</h1><p className='bg-[#00C49F] h-3 w-24 rounded-sm'>&apos;</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <h1 className='text-lg text-[#0B0B0B]'>{data[0].name}</h1><p className='bg-[#FF444A] h-3 w-24 rounded-sm'>&apos;</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;