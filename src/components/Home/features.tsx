interface Feature {
  icon: string;
  title: string;
  description: string;
}

const FeaturesSection = () => {
  const features: Feature[] = [
    {
      icon: "📊",
      title: "Personalized Workouts",
      description: "Get custom workout plans tailored to your goals, fitness level, and available equipment."
    },
    {
      icon: "🥗",
      title: "Nutrition Tracking",
      description: "Log meals, track macros, and get personalized nutrition advice to fuel your body."
    },
    {
      icon: "👥",
      title: "Community Challenges",
      description: "Join challenges, compete with friends, and stay motivated with our supportive community."
    },
    {
      icon: "📈",
      title: "Progress Analytics",
      description: "Track your progress with detailed metrics and visualizations to see your improvement over time."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Fusion Gym</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our all-in-one fitness solution combines everything you need to achieve your fitness goals,
            all in one convenient app.
          </p>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transition transform hover:scale-105"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;