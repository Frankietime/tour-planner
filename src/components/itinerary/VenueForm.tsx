import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { Venue } from '../../types';

interface VenueFormProps {
  onAdd: (venue: Omit<Venue, 'id'>) => void;
}

export function VenueForm({ onAdd }: VenueFormProps) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [showTime, setShowTime] = useState('');
  const [soundcheckTime, setSoundcheckTime] = useState('');
  const [capacity, setCapacity] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !city.trim() || !date || !showTime) return;

    onAdd({
      name: name.trim(),
      city: city.trim(),
      country: '', // Could be added later
      date,
      showTime,
      soundcheckTime,
      capacity: parseInt(capacity) || 0,
      notes: notes.trim(),
      address: '' // Could be added later
    });

    setName('');
    setCity('');
    setDate('');
    setShowTime('');
    setSoundcheckTime('');
    setCapacity('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Agregar Fecha</h2>
      
      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Venue"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ciudad"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="time"
            value={soundcheckTime}
            onChange={(e) => setSoundcheckTime(e.target.value)}
            placeholder="Prueba de sonido"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="time"
            value={showTime}
            onChange={(e) => setShowTime(e.target.value)}
            placeholder="Hora del show"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <input
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          placeholder="Capacidad"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notas del venue"
          rows={3}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <Plus size={20} className="mr-2" />
          Agregar Fecha
        </button>
      </div>
    </form>
  );
}