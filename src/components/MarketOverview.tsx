import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';

export default function MarketOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-shrink-0">
      <div className="bg-[#12141d] p-4 rounded-xl border border-[#1f2233] flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">BTC/USD</p>
          <h2 className="text-2xl font-bold text-white">$64,230.50</h2>
        </div>
        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-emerald-500" />
        </div>
      </div>

      <div className="bg-[#12141d] p-4 rounded-xl border border-[#1f2233] flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">24h Change</p>
          <h2 className="text-xl font-bold text-emerald-400">+4.25%</h2>
          <p className="text-xs text-gray-500 mt-0.5">+$2,610.20</p>
        </div>
        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
          <Activity className="w-5 h-5 text-blue-500" />
        </div>
      </div>

      <div className="bg-[#12141d] p-4 rounded-xl border border-[#1f2233] flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">24h High</p>
          <h2 className="text-xl font-bold text-white">$65,100.00</h2>
        </div>
        <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="bg-[#12141d] p-4 rounded-xl border border-[#1f2233] flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">24h Low</p>
          <h2 className="text-xl font-bold text-white">$61,450.20</h2>
        </div>
        <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
          <TrendingDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
