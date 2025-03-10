import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Transform Your Fitness Journey
            </h1>
            <p className="text-lg mb-6">
              Fusion Gym brings together workouts, nutrition tracking, and community in one
              powerful app.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="primary"
                size="lg"
                className="hover-pulse"
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative mx-auto w-full max-w-md">
              <div className="shadow-lg rounded-xl bg-white p-4">
                {/* App preview content */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="h-8 bg-gradient-purple-indigo rounded"></div>
                    <div className="h-24 bg-gradient-purple-indigo rounded opacity-20"></div>
                    <div className="h-8 bg-gradient-purple-indigo rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
