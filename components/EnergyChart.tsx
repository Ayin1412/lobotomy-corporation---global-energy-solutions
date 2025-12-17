import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '08:00', output: 4000, instability: 2400 },
  { name: '10:00', output: 3000, instability: 1398 },
  { name: '12:00', output: 9800, instability: 800 },
  { name: '14:00', output: 2780, instability: 3908 },
  { name: '16:00', output: 1890, instability: 4800 },
  { name: '18:00', output: 2390, instability: 3800 },
  { name: '20:00', output: 3490, instability: 4300 },
];

export const EnergyChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] font-mono text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0a0a0a', borderColor: '#d4af37' }}
            itemStyle={{ color: '#f0f0f0' }}
          />
          <Area type="monotone" dataKey="output" stackId="1" stroke="#d4af37" fill="#d4af37" fillOpacity={0.2} name="Enkephalin (PE)" />
          <Area type="monotone" dataKey="instability" stackId="1" stroke="#cf0000" fill="#cf0000" fillOpacity={0.2} name="Qliphoth Instability" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};