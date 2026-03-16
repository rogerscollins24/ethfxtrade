import { Bell, Search, ChevronDown, Wallet } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-[#12141d] border-b border-[#1f2233] flex-shrink-0">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-64 hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search markets..." 
            className="w-full bg-[#090a10] border border-[#1f2233] text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500 transition-colors text-white placeholder-gray-600"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a1d27] border border-[#1f2233]">
          <Wallet className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-white">$124,592.00</span>
          <span className="text-xs text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded ml-1">+2.4%</span>
        </div>

        <button className="relative p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-[#1a1d27]">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#12141d]"></span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer hover:bg-[#1a1d27] p-1.5 rounded-lg transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-[#1f2233]"></div>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </header>
  );
}
