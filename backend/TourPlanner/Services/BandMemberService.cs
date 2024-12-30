using System.Collections.Generic;
using System.Linq;

namespace backend.Services
{
    public class BandMemberService
    {
        private readonly List<BandMember> _members = new List<BandMember>() {
            new BandMember { Id = "1", Name = "John Doe", Role = "Guitar", Contact = "john@example.com" },
            new BandMember { Id = "2", Name = "Jane Smith", Role = "Vocals", Contact = "jane@example.com" },
            new BandMember { Id = "3", Name = "Mike Johnson", Role = "Drums", Contact = "mike@example.com" },
            new BandMember { Id = "4", Name = "Emily Davis", Role = "Bass", Contact = "emily@example.com" },
            new BandMember { Id = "5", Name = "Chris Brown", Role = "Keyboard", Contact = "chris@example.com" }
        };

        public IEnumerable<BandMember> GetAllMembers()
        {
            return _members;
        }

        public BandMember GetMemberById(string id)
        {
            return _members.FirstOrDefault(m => m.Id == id);
        }

        public void AddMember(BandMember member)
        {
            _members.Add(member);
        }

        public void UpdateMember(BandMember updatedMember)
        {
            var member = GetMemberById(updatedMember.Id);
            if (member != null)
            {
                member.Name = updatedMember.Name;
                member.Role = updatedMember.Role;
                member.Contact = updatedMember.Contact;
            }
        }

        public void RemoveMember(string id)
        {
            var member = GetMemberById(id);
            if (member != null)
            {
                _members.Remove(member);
            }
        }
    }
}