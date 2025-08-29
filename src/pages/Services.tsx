import Navigation from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Heart, 
  Shield, 
  Search, 
  Smartphone, 
  Clock, 
  Users, 
  MapPin,
  Monitor,
  AlertCircle,
  CheckCircle
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 gradient-soft">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-trust mb-6">
            Our Products & Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to connect patients with local providers 
            and improve health outcomes across Kenya.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              Core Platform Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for accessible, quality healthcare
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 shadow-healthcare hover:shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-trust mb-4">Provider Discovery</h3>
              <p className="text-muted-foreground mb-6">
                Find nearby doctors, clinics, and healthcare facilities in your county. 
                Our platform shows verified providers with real-time availability and services offered.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  County-based healthcare search
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  Distance and travel time estimates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  Provider specialties and services
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  Real-time availability status
                </li>
              </ul>
              <Button className="w-full gradient-primary">
                Search Providers
              </Button>
            </Card>

            <Card className="p-8 shadow-healthcare hover:shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-trust mb-4">Digital Wellness Tools</h3>
              <p className="text-muted-foreground mb-6">
                Home-based health monitoring and wellness tools that enable early detection 
                and preventive care, reducing the need for emergency interventions.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  Symptom checker and health assessment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  Medication reminders and tracking
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  Health metric monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  Preventive care recommendations
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Access Tools
              </Button>
            </Card>

            <Card className="p-8 shadow-healthcare hover:shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-trust mb-4">Secure Platform</h3>
              <p className="text-muted-foreground mb-6">
                HIPAA-compliant, secure online platform that protects patient data while 
                enabling seamless communication between patients and healthcare providers.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  End-to-end encrypted communications
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  Secure medical record storage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  Provider verification system
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  GDPR and local data compliance
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Patient Services */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              For Patients
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive healthcare access solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-trust mb-2">Local Provider Access</h3>
                  <p className="text-muted-foreground text-sm">
                    Connect with healthcare providers in your county, eliminating long travel distances 
                    and reducing healthcare costs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-trust mb-2">Emergency Response</h3>
                  <p className="text-muted-foreground text-sm">
                    Quick access to emergency healthcare services and urgent care providers 
                    when time is critical.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-trust mb-2">Preventive Care</h3>
                  <p className="text-muted-foreground text-sm">
                    Access to wellness programs, health screenings, and preventive care services 
                    to maintain optimal health.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-trust/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Monitor className="h-6 w-6 text-trust" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-trust mb-2">Health Monitoring</h3>
                  <p className="text-muted-foreground text-sm">
                    Digital tools for tracking health metrics, managing chronic conditions, 
                    and staying connected with your healthcare team.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Provider Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              For Healthcare Providers
            </h2>
            <p className="text-lg text-muted-foreground">
              Tools and platform features designed for healthcare professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow-soft">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-trust mb-2">Patient Management</h3>
              <p className="text-muted-foreground text-sm">
                Streamlined patient intake, appointment scheduling, and communication tools.
              </p>
            </Card>

            <Card className="p-6 shadow-soft">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-trust mb-2">Practice Growth</h3>
              <p className="text-muted-foreground text-sm">
                Expand your patient base by connecting with underserved communities in your area.
              </p>
            </Card>

            <Card className="p-6 shadow-soft">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-trust mb-2">Quality Metrics</h3>
              <p className="text-muted-foreground text-sm">
                Track patient outcomes, satisfaction scores, and practice performance metrics.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 gradient-soft">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              Service Coverage
            </h2>
            <p className="text-lg text-muted-foreground">
              We're expanding healthcare access across all 47 counties in Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">47</div>
              <div className="text-sm font-medium text-trust mb-1">Counties Covered</div>
              <div className="text-xs text-muted-foreground">Nationwide healthcare access</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-sm font-medium text-trust mb-1">Healthcare Providers</div>
              <div className="text-xs text-muted-foreground">Verified and active</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm font-medium text-trust mb-1">Platform Availability</div>
              <div className="text-xs text-muted-foreground">Always accessible</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="gradient-primary shadow-healthcare">
              Join Our Network
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;