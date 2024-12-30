import React from 'react';
import { Trash2 } from 'lucide-react';
import type { Equipment } from '../../types';
import { EquipmentStatusBadge } from './EquipmentStatusBadge';

interface EquipmentListProps {
  items: Equipment[];
  onDelete: (id: string) => void;
}

export function EquipmentList({ items, onDelete }: EquipmentListProps) {
  if (items.length === 0) {
    return (
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center text-gray-500">
        No hay equipamiento registrado aún
      </div>
    );
  }

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Inventario</h2>
      
      <div className="space-y-3">
        {items.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">{item.name}</h3>
                <EquipmentStatusBadge status={item.status} />
              </div>
              <div className="text-sm text-gray-600">
                <p>Categoría: {item.category}</p>
                <p>Ubicación: {item.location}</p>
                {item.notes && <p className="mt-1 italic">{item.notes}</p>}
              </div>
            </div>
            
            <button
              onClick={() => onDelete(item.id)}
              className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Eliminar equipo"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}