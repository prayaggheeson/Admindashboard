import React from 'react';

const MyTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Player 1',
      role: 'Captain',
      score: 2500,
    },
    {
      id: 2,
      name: 'Player 2',
      role: 'Member',
      score: 2200,
    },
    {
      id: 3,
      name: 'Player 3',
      role: 'Member',
      score: 1900,
    },
  ];

  return (
    <div className="container h-screen mx-auto p-4 sm:p-8 md:p-12 lg:p-16">
      <h1 className="text-2xl font-semibold text-white text-center mb-6">My Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-900"
          >
            <h2 className="text-lg font-semibold">{member.name}</h2>
            <p className="text-sm text-gray-500">{member.role}</p>
            <p className="text-sm">Score: {member.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
