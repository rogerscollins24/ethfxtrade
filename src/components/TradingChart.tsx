import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Maximize2, Settings, MoreHorizontal } from 'lucide-react';

const data = [
  { time: '10:00', price: 62000 },
  { time: '11:00', price: 62500 },
  { time: '12:00', price: 61800 },
  { time: '13:00', price: 63200 },
  { time: '14:00', price: 62900 },
  { time: '15:00', price: 64100 },
  { time: '16:00', price: 63800 },
  { time: '17:00', price: 64500 },
  { time: '18:00', price: 64230 },
];

export default function TradingChart() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center justify-between p-4 border-b border-[#1f2233]">
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-white">BTC/USD Chart</h3>
          <div className="flex items-center gap-1 bg-[#1a1d27] rounded-lg p-1">
            {['1H', '4H', '1D', '1W', '1M'].map((tf) => (
              <button
                key={tf}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  tf === '1D' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-[#252a3a]'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-[#1a1d27] transition-colors">
            <Settings className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-[#1a1d27] transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 p-4 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2233" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="#4b5563" 
              tick={{ fill: '#6b7280', fontSize: 12 }} 
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis 
              domain={['dataMin - 500', 'dataMax + 500']} 
              stroke="#4b5563" 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#12141d', borderColor: '#1f2233', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#3b82f6' }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Price']}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="#3b82f6" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorPrice)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
