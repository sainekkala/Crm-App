import React from 'react';
import './Piechart.css';
import { PieChart, Pie, Cell, ResponsiveContainer,Tooltip } from 'recharts';

const data = [
  { name: 'Group A', value: 400,color:'#FFBB28' },
  { name: 'Group B', value: 300,color:'#0088FE' },
  { name: 'Group C', value: 300,color:'#00C49F' },
  { name: 'Group D', value: 200,color:'#FF8042'},
];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Piechart () {
    return (
     <>
     <div><h3 className='text-white'>Leads by Sources</h3></div>
     <div>
       <ResponsiveContainer width="100%" height={280}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
     </div>
     <div className='options'>
      {data.map((items, index) => {
        return (
          <div className='option' key={index}>
          <div className='title'>
            <div className='dot' style={{backgroundColor:items.color}}/>
            <span>{items.name}</span>
          </div>
        </div>
        )
      })}
     </div>
     </>
    );
  }

