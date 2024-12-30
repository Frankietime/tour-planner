import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { BandMember } from '../../types';

interface BandMemberFormProps {
  onAdd: (member: Omit<BandMember, 'id'>) => void;
}

export function BandMemberForm({ onAdd }: BandMemberFormProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !role.trim() || !contact.trim()) return;

    onAdd({
      name: name.trim(),
      role: role.trim(),
      contact: contact.trim()
    });

    setName('');
    setRole('');
    setContact('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Agregar Nuevo Miembro</h2>
      
      <div className="space-y-4">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Instrumento"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="tel"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Teléfono"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <Plus size={20} className="mr-2" />
          Agregar Miembro
        </button>
      </div>
    </form>
  );
}