import React, { useState } from 'react';
import { EquipmentForm } from './EquipmentForm';
import { EquipmentList } from './EquipmentList';
import type { Equipment } from '../../types';

export function EquipmentManager() {
  const [items, setItems] = useState<Equipment[]>([]);

  const handleAddItem = (newItem: Omit<Equipment, 'id'>) => {
    const item: Equipment = {
      ...newItem,
      id: Date.now().toString()
    };
    setItems([...items, item]);
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <EquipmentForm onAdd={handleAddItem} />
      <EquipmentList items={items} onDelete={handleDeleteItem} />
    </div>
  );
}