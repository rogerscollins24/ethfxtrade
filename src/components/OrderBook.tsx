import { ArrowDown, ArrowUp } from 'lucide-react';

const asks = [
  { price: 64250.50, amount: 0.45, total: 28912.72 },
  { price: 64248.20, amount: 1.20, total: 77097.84 },
  { price: 64245.00, amount: 0.85, total: 54608.25 },
  { price: 64242.10, amount: 2.15, total: 138120.51 },
  { price: 64238.90, amount: 0.12, total: 7708.66 },
  { price: 64235.50, amount: 3.50, total: 224824.25 },
  { price: 64232.00, amount: 1.05, total: 67443.60 },
];

const bids = [
  { price: 64228.50, amount: 0.55, total: 35325.67 },
  { price: 64225.10, amount: 2.40, total: 154140.24 },
  { price: 64222.00, amount: 1.15, total: 73855.30 },
  { price: 64218.80, amount: 0.90, total: 57796.92 },
  { price: 64215.50, amount: 4.20, total: 269705.10 },
  { price: 64212.00, amount: 0.35, total: 22474.20 },
  { price: 64208.50, amount: 1.80, total: 115575.30 },
];

export default function OrderBook() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center justify-between p-4 border-b border-[#1f2233]">
        <h3 className="font-bold text-white">Order Book</h3>
        <div className="flex items-center gap-1">
          <button className="p-1 text-gray-400 hover:text-white rounded-md hover:bg-[#1a1d27] transition-colors">
            <ArrowDown className="w-4 h-4 text-red-500" />
          </button>
          <button className="p-1 text-gray-400 hover:text-white rounded-md hover:bg-[#1a1d27] transition-colors">
            <ArrowUp className="w-4 h-4 text-emerald-500" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 p-2 overflow-y-auto min-h-0">
        <div className="grid grid-cols-3 gap-2 px-2 py-1 text-xs font-medium text-gray-500">
          <span>Price (USD)</span>
          <span className="text-right">Amount (BTC)</span>
          <span className="text-right">Total (USD)</span>
        </div>
        
        <div className="flex flex-col gap-0.5 mt-1">
          {asks.map((ask, i) => (
            <div key={i} className="grid grid-cols-3 gap-2 px-2 py-1 text-xs hover:bg-[#1a1d27] rounded cursor-pointer relative group">
              <div className="absolute right-0 top-0 bottom-0 bg-red-500/10 z-0" style={{ width: `${(ask.amount / 4.2) * 100}%` }} />
              <span className="text-red-500 font-medium relative z-10">{ask.price.toFixed(2)}</span>
              <span className="text-right text-gray-300 relative z-10">{ask.amount.toFixed(2)}</span>
              <span className="text-right text-gray-400 relative z-10">{ask.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          ))}
        </div>

        <div className="my-2 py-2 border-y border-[#1f2233] px-2 flex items-center justify-between">
          <span className="text-lg font-bold text-emerald-500">64,230.50</span>
          <span className="text-xs text-gray-500 line-through">$64,235.00</span>
        </div>

        <div className="flex flex-col gap-0.5">
          {bids.map((bid, i) => (
            <div key={i} className="grid grid-cols-3 gap-2 px-2 py-1 text-xs hover:bg-[#1a1d27] rounded cursor-pointer relative group">
              <div className="absolute right-0 top-0 bottom-0 bg-emerald-500/10 z-0" style={{ width: `${(bid.amount / 4.2) * 100}%` }} />
              <span className="text-emerald-500 font-medium relative z-10">{bid.price.toFixed(2)}</span>
              <span className="text-right text-gray-300 relative z-10">{bid.amount.toFixed(2)}</span>
              <span className="text-right text-gray-400 relative z-10">{bid.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
