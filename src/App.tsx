import React, { useState } from 'react';
import { Music } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { BandManager } from './components/band/BandManager';
import { EquipmentManager } from './components/equipment/EquipmentManager';
import { ItineraryManager } from './components/itinerary/ItineraryManager';

export function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center">
            <Music className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mr-3" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Tour Manager</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 mt-14 mb-20 md:mt-20 md:mb-6">
        <div className="md:hidden mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'band' && 'Banda'}
            {activeTab === 'equipment' && 'Equipamiento'}
            {activeTab === 'itinerary' && 'Itinerario'}
          </h2>
        </div>

        <div className="hidden md:block mb-6">
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        
        <div>
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'band' && <BandManager />}
          {activeTab === 'equipment' && <EquipmentManager />}
          {activeTab === 'itinerary' && <ItineraryManager />}
        </div>
      </main>

      <div className="md:hidden">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
}