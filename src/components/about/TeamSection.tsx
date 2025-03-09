const TeamSection = () => {
const teamMembers: TeamMember[] = [
    {
      name: "Mahlakhu",
      role: "Founder & CEO",
      bio: "Former personal trainer with a passion for making fitness accessible to everyone."
    },
    {
      name: "Sarah Williams",
      role: "Head of Nutrition",
      bio: "Registered dietitian with over 10 years of experience in sports nutrition."
    },
    {
      name: "Tondwani Craig",
      role: "Chief Technology Officer",
      bio: "Tech innovator with a background in health apps and wearable technology."
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
              {member.name.charAt(0)}
            </div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-indigo-600 text-sm mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;