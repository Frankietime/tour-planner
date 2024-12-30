import React, { useEffect, useState } from 'react';
import { BandMemberForm } from './BandMemberForm';
import { BandMemberList } from './BandMemberList';
import type { BandMember } from '../../types';
import { getAllMembers } from '../../services/BandMemberServices';

export function BandManager() {
  const [members, setMembers] = useState<BandMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const members = await getAllMembers();
        setMembers(members);
      } catch (error) {
        console.error('Failed to fetch band members', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleAddMember = (newMember: Omit<BandMember, 'id'>) => {
    const member: BandMember = {
      ...newMember,
      id: Date.now().toString()
    };
    setMembers([...members, member]);
  };

  const handleDeleteMember = (id: string) => {
    setMembers(members.filter(member => member.id !== id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <BandMemberForm onAdd={handleAddMember} />
      <BandMemberList members={members} onDelete={handleDeleteMember} />
    </div>
  );
}