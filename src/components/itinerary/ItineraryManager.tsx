import React, { useState } from 'react';
import { VenueForm } from './VenueForm';
import { VenueList } from './VenueList';
import type { Venue } from '../../types';

export function ItineraryManager() {
  const [venues, setVenues] = useState<Venue[]>([]);

  const handleAddVenue = (newVenue: Omit<Venue, 'id'>) => {
    const venue: Venue = {
      ...newVenue,
      id: Date.now().toString()
    };
    setVenues([...venues, venue]);
  };

  const handleDeleteVenue = (id: string) => {
    setVenues(venues.filter(venue => venue.id !== id));
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <VenueForm onAdd={handleAddVenue} />
      <VenueList venues={venues} onDelete={handleDeleteVenue} />
    </div>
  );
}