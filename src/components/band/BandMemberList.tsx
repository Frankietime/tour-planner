import { Trash2 } from 'lucide-react';
import type { BandMember } from '../../types';

interface BandMemberListProps {
  members: BandMember[];
  onDelete: (id: string) => void;
}

export function BandMemberList({ members, onDelete }: BandMemberListProps) {
  if (members.length === 0) {
    return (
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center text-gray-500">
        No hay miembros en la banda aún
      </div>
    );
  }

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Miembros Actuales</h2>
      
      <div className="space-y-3">
        {members.map(member => (
          <div
            key={member.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex-1">
              <h3 className="font-medium">{member.name}</h3>
              <div className="text-sm text-gray-600">
                <p>{member.role}</p>
                <p>{member.contact}</p>
              </div>
            </div>
            
            <button
              onClick={() => onDelete(member.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Eliminar miembro"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}