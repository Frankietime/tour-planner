export interface BandMember {
  id: string;
  name: string;
  role: string;
  contact: string;
  image?: string;
}

export interface Equipment {
  id: string;
  name: string;
  category: 'instruments' | 'audio' | 'lighting' | 'other';
  location: string;
  status: 'available' | 'in-use' | 'maintenance';
  notes?: string;
}

export interface Venue {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  date: string;
  soundcheckTime: string;
  showTime: string;
  capacity: number;
  notes?: string;
}

export interface Task {
  id: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}