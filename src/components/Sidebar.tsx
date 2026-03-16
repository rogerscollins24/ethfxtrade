import { Activity, BarChart2, Briefcase, CreditCard, Settings, User } from 'lucide-react';
import { clsx } from 'clsx';

const navItems = [
  { name: 'Dashboard', icon: BarChart2 },
  { name: 'Trade', icon: Activity },
  { name: 'Portfolio', icon: Briefcase },
  { name: 'Wallet', icon: CreditCard },
  { name: 'Profile', icon: User },
  { name: 'Settings', icon: Settings },
];

export default function Sidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  return (
    <aside className="w-20 lg:w-64 flex-shrink-0 bg-[#12141d] border-r border-[#1f2233] flex flex-col h-full transition-all duration-300">
      <div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-[#1f2233]">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
          B
        </div>
        <span className="hidden lg:block ml-3 font-bold text-xl tracking-tight text-white">BTCFX</span>
      </div>
      
      <nav className="flex-1 py-6 flex flex-col gap-2 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={clsx(
                "flex items-center justify-center lg:justify-start px-3 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-blue-600/10 text-blue-500" 
                  : "text-gray-500 hover:bg-[#1a1d27] hover:text-gray-300"
              )}
            >
              <Icon className={clsx("w-5 h-5", isActive ? "text-blue-500" : "text-gray-500 group-hover:text-gray-300")} />
              <span className="hidden lg:block ml-3 font-medium text-sm">{item.name}</span>
              {isActive && <div className="hidden lg:block absolute left-0 w-1 h-8 bg-blue-500 rounded-r-full" />}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#1f2233]">
        <div className="hidden lg:flex items-center gap-3 p-3 rounded-xl bg-[#1a1d27]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">VIP Trader</p>
            <p className="text-xs text-emerald-400 truncate">Verified</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
