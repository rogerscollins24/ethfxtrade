/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState('Trade');

  return (
    <div className="flex h-screen w-full bg-[#090a10] text-gray-200 font-sans overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4">
          {activeTab === 'Trade' && <Dashboard />}
          {activeTab !== 'Trade' && (
            <div className="flex items-center justify-center h-full text-gray-500">
              {activeTab} Module Coming Soon
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
