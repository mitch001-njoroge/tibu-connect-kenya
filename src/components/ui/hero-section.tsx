import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 gradient-soft">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trust leading-tight">
                Connecting Underserved Patients to{" "}
                <span className="text-primary">Trusted Healthcare</span>{" "}
                Near Them
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Reducing long journeys, saving lives, and making healthcare 
                accessible in every county across Kenya.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">10,000+ Patients Connected</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">47 Counties Covered</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary shadow-healthcare transition-bounce hover:scale-105">
                Find Healthcare Near You
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Join as a Provider
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-healthcare">
              <img
                src="/lovable-uploads/b618d048-1807-45f4-84d9-6521ea719680.png"
                alt="Healthcare Connection"
                className="w-full h-auto"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-primary rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-secondary rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;