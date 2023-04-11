import React from 'react';
import {
    Area,
    AreaChart,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

  const data = [
    {
      name: "Assignment-1",
      mark: 57
    },
    {
      name: "Assignment-2",
      mark: 60
    },
    {
      name: "Assignment-3",
      mark: 59
    },
    {
      name: "Assignment-4",
      mark: 60
    },
    {
      name: "Assignment-5",
      mark: 60
    },
    {
      name: "Assignment-6",
      mark: 60
    },
    {
      name: "Assignment-7",
      mark: 60
    },
    {
      name: "Assignment-8",
      mark: 60
    }
  ];

const Statistics = () => {
    return (
        <>
            {/* Banner Section */}
            <div className='bg-cyan-200 text-center py-24'>
                <h1 className='font-bold text-2xl'>Statistics</h1>
            </div>
            {/* Area Chart Section */}
            <div className='w-11/12 md:w-8/12 mx-auto my-20'>
                <h1 className='text-center font-bold text-2xl mb-10'>Assignment Marks Area Chart</h1>
                <div>
                    <AreaChart width={1100} height={400} data={data}>
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="name" />
                    <YAxis />

                    <Tooltip />
                    <Area type="monotone" dataKey="mark" stroke="#E86A33" fill="#569DAA" />
                    </AreaChart>
                </div>
            </div>
        </>
    );
};

export default Statistics;