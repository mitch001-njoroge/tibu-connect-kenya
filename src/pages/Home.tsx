import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import CountySelector from "@/components/ui/county-selector";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Clock, Users, ArrowRight, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              Transforming Healthcare Access in Kenya
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform eliminates the barriers that prevent underserved communities 
              from accessing quality healthcare services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 shadow-soft hover:shadow-healthcare transition-smooth">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-trust mb-2">Local Access</h3>
              <p className="text-muted-foreground text-sm">
                Connect with healthcare providers in your county, reducing travel time and costs.
              </p>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-healthcare transition-smooth">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-trust mb-2">Trusted Network</h3>
              <p className="text-muted-foreground text-sm">
                Verified healthcare providers ensure you receive quality care from licensed professionals.
              </p>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-healthcare transition-smooth">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-trust mb-2">Quick Response</h3>
              <p className="text-muted-foreground text-sm">
                Get connected to healthcare providers quickly, especially in emergency situations.
              </p>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-healthcare transition-smooth">
              <div className="w-12 h-12 bg-trust/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-trust" />
              </div>
              <h3 className="text-lg font-semibold text-trust mb-2">Preventive Care</h3>
              <p className="text-muted-foreground text-sm">
                Access wellness tools and early detection services to prevent serious health issues.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CountySelector />

      {/* Call to Action */}
      <section className="py-16 px-4 gradient-soft">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-trust">
              Ready to Transform Healthcare Access?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of Kenyans who have improved their healthcare experience with TIBU Health-Connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary shadow-healthcare">
                Get Started as Patient
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Register as Provider
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-trust text-trust-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/b618d048-1807-45f4-84d9-6521ea719680.png" 
                  alt="TIBU Health-Connect Logo" 
                  className="h-8 w-auto brightness-200"
                />
                <span className="text-lg font-bold">TIBU Health-Connect</span>
              </div>
              <p className="text-sm text-trust-foreground/80">
                Connecting underserved patients to trusted healthcare near them.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Platform</h4>
              <div className="space-y-2 text-sm">
                <p>Find Providers</p>
                <p>Digital Wellness</p>
                <p>Emergency Care</p>
                <p>Preventive Health</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-sm">
                <p>About Us</p>
                <p>Our Mission</p>
                <p>Research</p>
                <p>Contact</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm">
                <p>Help Center</p>
                <p>Provider Support</p>
                <p>Patient Guide</p>
                <p>Community</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-trust-foreground/20 mt-8 pt-8 text-center text-sm text-trust-foreground/80">
            <p>&copy; 2024 TIBU Health-Connect Services. Improving healthcare access across Kenya.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;