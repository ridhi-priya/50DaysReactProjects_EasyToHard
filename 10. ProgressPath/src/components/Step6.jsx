import { useState } from 'react';

function Step6() {
  const [teamMembers, setTeamMembers] = useState([
    { name: 'Steve Mathew', selected: true },
    { name: 'Robert Pattinson', selected: false },
    { name: 'Steve Waugh', selected: false },
    { name: 'Fanny Russell', selected: false },
    { name: 'Rodney Meyer', selected: false },
    { name: 'Ellen Simmons', selected: false },
    { name: 'Virgie Kim', selected: false },
    { name: 'Emma Castro', selected: false },
  ]);

  const [newMember, setNewMember] = useState('');

  const handleMemberChange = (e) => {
    setNewMember(e.target.value);
  };

  const handleMemberAdd = () => {
    if (newMember.trim() !== '') {
      setTeamMembers([...teamMembers, { name: newMember, selected: false }]);
      setNewMember('');
    }
  };

  const handleMemberToggle = (name) => {
    setTeamMembers(
      teamMembers.map((member) =>
        member.name === name ? { ...member, selected: !member.selected } : member
      )
    );
  };

  const handleMemberRemove = (name) => {
    setTeamMembers(teamMembers.filter((member) => member.name !== name));
  };

  return (
    <div className="h-96">
      <h2 className="text-xl font-bold mb-4">Team</h2>
      <div className="mb-4">
        <label htmlFor="newMember" className="block text-sm font-medium text-gray-700">
          Invite or Add a person
        </label>
        <div className="flex">
          <input
            type="text"
            id="newMember"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={newMember}
            onChange={handleMemberChange}
          />
          <button
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleMemberAdd}
          >
            Add
          </button>
        </div>
      </div>

      <ul>
        {teamMembers.map((member) => (
          <li key={member.name} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={member.selected}
              onChange={() => handleMemberToggle(member.name)}
            />
            <span className="ml-2">{member.name}</span>
            <button
              className="ml-2 text-red-500 hover:text-red-700"
              onClick={() => handleMemberRemove(member.name)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Step6;
