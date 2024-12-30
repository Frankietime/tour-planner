import React from 'react';
import { Trash2 } from 'lucide-react';
import type { Venue } from '../../types';
import { formatDate } from '../../utils/dates';

interface VenueListProps {
  venues: Venue[];
  onDelete: (id: string) => void;
}

export function VenueList({ venues, onDelete }: VenueListProps) {
  if (venues.length === 0) {
    return (
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center text-gray-500">
        No hay fechas programadas aún
      </div>
    );
  }

  const sortedVenues = [...venues].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Próximas Fechas</h2>
      
      <div className="space-y-3">
        {sortedVenues.map(venue => {
          const date = new Date(venue.date);
          const month = date.toLocaleString('es-ES', { month: 'short' }).toUpperCase();
          const day = date.getDate();

          return (
            <div
              key={venue.id}
              className="flex items-start p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-lg flex flex-col items-center justify-center mr-4">
                <span className="text-sm font-medium text-blue-800">{month}</span>
                <span className="text-xl font-bold text-blue-800">{day}</span>
              </div>

              <div className="flex-1">
                <h3 className="font-medium">{venue.name}</h3>
                <p className="text-sm text-gray-600">{venue.city}</p>
                <div className="mt-1 text-sm text-gray-500">
                  <p>Show: {venue.showTime}hs</p>
                  {venue.soundcheckTime && (
                    <p>Prueba de sonido: {venue.soundcheckTime}hs</p>
                  )}
                  {venue.capacity > 0 && (
                    <p>Capacidad: {venue.capacity} personas</p>
                  )}
                </div>
                {venue.notes && (
                  <p className="mt-1 text-sm italic text-gray-500">{venue.notes}</p>
                )}
              </div>
              
              <button
                onClick={() => onDelete(venue.id)}
                className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                aria-label="Eliminar fecha"
              >
                <Trash2 size={20} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}