import { useState } from 'react';
import { clsx } from 'clsx';

const orders = [
  { id: '1', pair: 'BTC/USD', type: 'Limit', side: 'Buy', price: 61500.00, amount: 0.5, filled: 0, status: 'Open', time: '10:24:15' },
  { id: '2', pair: 'ETH/USD', type: 'Limit', side: 'Sell', price: 3450.00, amount: 12.5, filled: 2.5, status: 'Partial', time: '09:12:44' },
  { id: '3', pair: 'SOL/USD', type: 'Market', side: 'Buy', price: 145.20, amount: 150, filled: 150, status: 'Filled', time: '08:45:12' },
];

export default function OpenOrders() {
  const [tab, setTab] = useState('Open Orders');

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center p-4 border-b border-[#1f2233] gap-6">
        {['Open Orders', 'Order History', 'Trade History'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={clsx(
              "text-sm font-medium transition-colors pb-4 -mb-4 border-b-2",
              tab === t 
                ? "text-blue-500 border-blue-500" 
                : "text-gray-500 border-transparent hover:text-gray-300"
            )}
          >
            {t}
          </button>
        ))}
      </div>
      
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-[#12141d] z-10">
            <tr>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 border-b border-[#1f2233]">Time</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 border-b border-[#1f2233]">Pair</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 border-b border-[#1f2233]">Type</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 border-b border-[#1f2233]">Side</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 border-b border-[#1f2233]">Price</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 border-b border-[#1f2233]">Amount</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 border-b border-[#1f2233]">Filled</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 border-b border-[#1f2233]">Status</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 border-b border-[#1f2233] text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-[#1a1d27] transition-colors group">
                <td className="py-3 px-4 text-sm text-gray-400">{order.time}</td>
                <td className="py-3 px-4 text-sm font-medium text-white">{order.pair}</td>
                <td className="py-3 px-4 text-sm text-gray-400">{order.type}</td>
                <td className={clsx("py-3 px-4 text-sm font-medium", order.side === 'Buy' ? "text-emerald-500" : "text-red-500")}>
                  {order.side}
                </td>
                <td className="py-3 px-4 text-sm text-white">${order.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                <td className="py-3 px-4 text-sm text-white">{order.amount}</td>
                <td className="py-3 px-4 text-sm text-gray-400">{(order.filled / order.amount * 100).toFixed(0)}%</td>
                <td className="py-3 px-4 text-sm">
                  <span className={clsx(
                    "px-2 py-1 rounded text-xs font-medium",
                    order.status === 'Open' ? "bg-blue-500/10 text-blue-500" :
                    order.status === 'Partial' ? "bg-yellow-500/10 text-yellow-500" :
                    "bg-emerald-500/10 text-emerald-500"
                  )}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-right">
                  {order.status !== 'Filled' && (
                    <button className="text-xs font-medium text-red-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
