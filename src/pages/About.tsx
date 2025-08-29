import Navigation from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Users, Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 gradient-soft">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-trust mb-6">
            About TIBU Health-Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to eliminate healthcare access barriers and save lives 
            across Kenya by connecting patients with trusted local providers.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 shadow-healthcare">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-trust mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the healthcare access gap in Kenya by creating a comprehensive platform 
                that connects underserved patients with nearby, trusted healthcare providers. We're 
                committed to reducing preventable deaths caused by distance barriers and healthcare 
                broker exploitation.
              </p>
            </Card>

            <Card className="p-8 shadow-healthcare">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-trust mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Kenya where every citizen, regardless of location or economic status, has immediate 
                access to quality healthcare services within their community. We envision a healthcare 
                system where early detection, prevention, and local care are the norm, not the exception.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              The Healthcare Access Crisis
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kenya's healthcare system faces critical challenges that TIBU Health-Connect addresses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-soft">
              <div className="text-3xl font-bold text-destructive mb-2">75%</div>
              <h3 className="font-semibold text-trust mb-2">Rural Patients Travel 50km+</h3>
              <p className="text-sm text-muted-foreground">
                Three-quarters of rural patients must travel more than 50 kilometers to access basic healthcare services.
              </p>
            </Card>

            <Card className="p-6 shadow-soft">
              <div className="text-3xl font-bold text-destructive mb-2">40%</div>
              <h3 className="font-semibold text-trust mb-2">Deaths from Delayed Care</h3>
              <p className="text-sm text-muted-foreground">
                Nearly half of preventable deaths occur due to delayed access to healthcare services.
              </p>
            </Card>

            <Card className="p-6 shadow-soft">
              <div className="text-3xl font-bold text-destructive mb-2">60%</div>
              <h3 className="font-semibold text-trust mb-2">Broker Exploitation</h3>
              <p className="text-sm text-muted-foreground">
                More than half of patients are misguided by brokers to distant facilities for financial gain.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              How We're Making a Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              TIBU Health-Connect provides innovative solutions that transform healthcare access
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-trust">Local Provider Network</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We've built a comprehensive network of verified healthcare providers in every county, 
                  ensuring patients can find quality care close to home. Our platform eliminates the 
                  need for long, expensive journeys to distant facilities.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Verified Providers</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">47</div>
                    <div className="text-sm text-muted-foreground">Counties Covered</div>
                  </div>
                </div>
              </div>
              <Card className="p-8 shadow-healthcare">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-trust mb-2">Direct Connection</h4>
                <p className="text-sm text-muted-foreground">
                  Patients connect directly with nearby providers, bypassing harmful broker systems 
                  that exploit vulnerable communities.
                </p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="p-8 shadow-healthcare lg:order-2">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-trust mb-2">Quality Assurance</h4>
                <p className="text-sm text-muted-foreground">
                  All providers undergo rigorous verification processes to ensure patients receive 
                  quality care from licensed, qualified professionals.
                </p>
              </Card>
              <div className="space-y-6 lg:order-1">
                <h3 className="text-2xl font-bold text-trust">Digital Health Tools</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform includes digital wellness tools that enable home-based health monitoring, 
                  early detection of health issues, and preventive care guidance. This reduces the need 
                  for emergency interventions and hospital visits.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent">85%</div>
                    <div className="text-sm text-muted-foreground">Early Detection Rate</div>
                  </div>
                  <div className="text-center p-4 bg-trust/5 rounded-lg">
                    <div className="text-2xl font-bold text-trust">70%</div>
                    <div className="text-sm text-muted-foreground">Travel Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 px-4 gradient-soft">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              Our Impact So Far
            </h2>
            <p className="text-lg text-muted-foreground">
              Measuring success through improved healthcare outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-sm font-medium text-trust mb-1">Patients Connected</div>
              <div className="text-xs text-muted-foreground">To local healthcare providers</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-sm font-medium text-trust mb-1">Healthcare Providers</div>
              <div className="text-xs text-muted-foreground">Verified and active on platform</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">75%</div>
              <div className="text-sm font-medium text-trust mb-1">Travel Reduction</div>
              <div className="text-xs text-muted-foreground">Average distance to healthcare</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-trust mb-2">90%</div>
              <div className="text-sm font-medium text-trust mb-1">Patient Satisfaction</div>
              <div className="text-xs text-muted-foreground">Quality care and accessibility</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;