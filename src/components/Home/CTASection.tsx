import { Button } from '../UI/button';

const CTASection = () => {
  return (
    <section className="bg-gradient-purple-indigo py-16">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Start Your Fitness Journey Today
        </h2>
        <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
          Join thousands of members who have already transformed their lives with Fusion Gym.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            variant="outline"
            size="lg"
            className="hover-pulse"
          >
            Get Started !!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
