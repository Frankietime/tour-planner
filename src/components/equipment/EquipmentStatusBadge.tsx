import React from 'react';
import type { Equipment } from '../../types';

interface EquipmentStatusBadgeProps {
  status: Equipment['status'];
}

export function EquipmentStatusBadge({ status }: EquipmentStatusBadgeProps) {
  const styles = {
    'available': 'bg-green-100 text-green-800',
    'in-use': 'bg-blue-100 text-blue-800',
    'maintenance': 'bg-yellow-100 text-yellow-800'
  };

  const labels = {
    'available': 'Disponible',
    'in-use': 'En uso',
    'maintenance': 'Mantenimiento'
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}