import MarketOverview from './MarketOverview';
import TradingChart from './TradingChart';
import OrderBook from './OrderBook';
import TradePanel from './TradePanel';
import OpenOrders from './OpenOrders';

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full gap-4">
      <MarketOverview />
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-0">
        {/* Left Column: Chart & Orders */}
        <div className="lg:col-span-9 flex flex-col gap-4 min-h-0">
          <div className="flex-1 bg-[#12141d] rounded-xl border border-[#1f2233] overflow-hidden flex flex-col min-h-[400px]">
            <TradingChart />
          </div>
          <div className="h-64 bg-[#12141d] rounded-xl border border-[#1f2233] overflow-hidden flex flex-col flex-shrink-0">
            <OpenOrders />
          </div>
        </div>

        {/* Right Column: OrderBook & Trade Panel */}
        <div className="lg:col-span-3 flex flex-col gap-4 min-h-0">
          <div className="flex-1 bg-[#12141d] rounded-xl border border-[#1f2233] overflow-hidden flex flex-col min-h-[300px]">
            <OrderBook />
          </div>
          <div className="bg-[#12141d] rounded-xl border border-[#1f2233] overflow-hidden flex-shrink-0">
            <TradePanel />
          </div>
        </div>
      </div>
    </div>
  );
}
