import React from 'react';
import { Music, LayoutDashboard, Users, Package2, MapPin } from 'lucide-react';

interface NavItemProps {
  active: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const NavItem = ({ active, icon, label, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center md:justify-start w-full md:w-auto px-3 py-2 rounded-lg transition-colors ${
      active 
        ? 'bg-blue-600 text-white' 
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    <span className="mr-0 md:mr-3">{icon}</span>
    <span className="hidden md:inline">{label}</span>
  </button>
);

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:relative bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.1)] md:shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 md:flex md:space-x-2 py-2">
          <NavItem
            active={activeTab === 'dashboard'}
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            onClick={() => onTabChange('dashboard')}
          />
          <NavItem
            active={activeTab === 'band'}
            icon={<Users size={20} />}
            label="Banda"
            onClick={() => onTabChange('band')}
          />
          <NavItem
            active={activeTab === 'equipment'}
            icon={<Package2 size={20} />}
            label="Equipamiento"
            onClick={() => onTabChange('equipment')}
          />
          <NavItem
            active={activeTab === 'itinerary'}
            icon={<MapPin size={20} />}
            label="Itinerario"
            onClick={() => onTabChange('itinerary')}
          />
        </div>
      </div>
    </nav>
  );
}