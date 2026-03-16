import { useState } from 'react';
import { clsx } from 'clsx';

export default function TradePanel() {
  const [orderType, setOrderType] = useState('Limit');
  const [side, setSide] = useState('Buy');
  const [price, setPrice] = useState('64230.50');
  const [amount, setAmount] = useState('0.1');

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center p-4 border-b border-[#1f2233] gap-4">
        {['Limit', 'Market', 'Stop Limit'].map((type) => (
          <button
            key={type}
            onClick={() => setOrderType(type)}
            className={clsx(
              "text-sm font-medium transition-colors pb-4 -mb-4 border-b-2",
              orderType === type 
                ? "text-blue-500 border-blue-500" 
                : "text-gray-500 border-transparent hover:text-gray-300"
            )}
          >
            {type}
          </button>
        ))}
      </div>
      
      <div className="p-4 flex flex-col gap-4">
        <div className="flex bg-[#090a10] rounded-lg p-1 border border-[#1f2233]">
          <button
            onClick={() => setSide('Buy')}
            className={clsx(
              "flex-1 py-2 text-sm font-bold rounded-md transition-all",
              side === 'Buy' 
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
                : "text-gray-500 hover:text-gray-300"
            )}
          >
            Buy
          </button>
          <button
            onClick={() => setSide('Sell')}
            className={clsx(
              "flex-1 py-2 text-sm font-bold rounded-md transition-all",
              side === 'Sell' 
                ? "bg-red-500 text-white shadow-lg shadow-red-500/20" 
                : "text-gray-500 hover:text-gray-300"
            )}
          >
            Sell
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500">Price</label>
            <div className="relative">
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-[#090a10] border border-[#1f2233] text-sm rounded-lg pl-3 pr-12 py-2.5 focus:outline-none focus:border-blue-500 transition-colors text-white"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 font-medium">USD</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500">Amount</label>
            <div className="relative">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-[#090a10] border border-[#1f2233] text-sm rounded-lg pl-3 pr-12 py-2.5 focus:outline-none focus:border-blue-500 transition-colors text-white"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 font-medium">BTC</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mt-1">
            {[25, 50, 75, 100].map((pct) => (
              <button
                key={pct}
                className="flex-1 py-1 text-xs font-medium text-gray-400 bg-[#1a1d27] hover:bg-[#252a3a] hover:text-white rounded transition-colors border border-[#1f2233]"
              >
                {pct}%
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between py-2 mt-2 border-t border-[#1f2233]">
            <span className="text-sm text-gray-500">Total</span>
            <span className="text-sm font-bold text-white">
              {(!isNaN(parseFloat(price)) && !isNaN(parseFloat(amount))) 
                ? (parseFloat(price) * parseFloat(amount)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) 
                : '0.00'} USD
            </span>
          </div>

          <button
            className={clsx(
              "w-full py-3 rounded-lg font-bold text-white transition-all mt-2",
              side === 'Buy'
                ? "bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/20"
                : "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/20"
            )}
          >
            {side} BTC
          </button>
        </div>
      </div>
    </div>
  );
}
