import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { Equipment } from '../../types';

interface EquipmentFormProps {
  onAdd: (equipment: Omit<Equipment, 'id'>) => void;
}

export function EquipmentForm({ onAdd }: EquipmentFormProps) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<Equipment['category']>('instruments');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState<Equipment['status']>('available');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !location.trim()) return;

    onAdd({
      name: name.trim(),
      category,
      location: location.trim(),
      status,
      notes: notes.trim()
    });

    setName('');
    setCategory('instruments');
    setLocation('');
    setStatus('available');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Agregar Equipo</h2>
      
      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del equipo"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Equipment['category'])}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="instruments">Instrumentos</option>
          <option value="audio">Audio</option>
          <option value="lighting">Iluminación</option>
          <option value="other">Otros</option>
        </select>

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Ubicación"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Equipment['status'])}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="available">Disponible</option>
          <option value="in-use">En uso</option>
          <option value="maintenance">En mantenimiento</option>
        </select>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notas adicionales"
          rows={3}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <Plus size={20} className="mr-2" />
          Agregar Equipo
        </button>
      </div>
    </form>
  );
}