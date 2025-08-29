import Navigation from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MapPin, 
  Handshake, 
  Megaphone, 
  Target, 
  TrendingUp,
  Phone,
  Mail,
  MessageSquare,
  Award,
  Heart,
  Stethoscope
} from "lucide-react";

const Marketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 gradient-soft">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-trust mb-6">
            Sales & Marketing Strategy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building partnerships and expanding healthcare access through strategic outreach 
            to providers and communities across Kenya.
          </p>
        </div>
      </section>

      {/* Partnership Strategy */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-lg text-muted-foreground">
              Building a comprehensive network through targeted partnerships
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 shadow-healthcare hover:shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Stethoscope className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-trust mb-4">Healthcare Providers</h3>
              <p className="text-muted-foreground mb-6">
                Partner with clinics, hospitals, and individual practitioners to expand 
                our provider network across all 47 counties.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Private Clinics</span>
                  <Badge variant="secondary">320+ Partners</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">County Hospitals</span>
                  <Badge variant="secondary">45 Counties</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Independent Doctors</span>
                  <Badge variant="secondary">180+ Providers</Badge>
                </div>
              </div>
              <Button className="w-full gradient-primary">
                Join Provider Network
              </Button>
            </Card>

            <Card className="p-8 shadow-healthcare hover:shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Handshake className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-trust mb-4">Pharmacy Partnerships</h3>
              <p className="text-muted-foreground mb-6">
                Collaborate with pharmacies and medical supply stores to provide complete 
                healthcare solutions for patients.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Chain Pharmacies</span>
                  <Badge className="bg-secondary text-secondary-foreground">15 Partners</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Local Pharmacies</span>
                  <Badge className="bg-secondary text-secondary-foreground">120+ Locations</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Medical Supplies</span>
                  <Badge className="bg-secondary text-secondary-foreground">8 Distributors</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                Partner with Us
              </Button>
            </Card>

            <Card className="p-8 shadow-healthcare hover:shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-trust mb-4">Community Organizations</h3>
              <p className="text-muted-foreground mb-6">
                Work with NGOs, community groups, and local leaders to reach underserved 
                populations and build trust.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm">NGO Partners</span>
                  <Badge variant="destructive">25 Organizations</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Community Leaders</span>
                  <Badge variant="destructive">200+ Ambassadors</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Local Groups</span>
                  <Badge variant="destructive">150+ Communities</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Become Ambassador
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* County Outreach */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              County-Focused Outreach
            </h2>
            <p className="text-lg text-muted-foreground">
              Targeted expansion strategy based on healthcare access needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6 shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-trust mb-2">Priority Counties</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Focus on counties with the greatest healthcare access challenges and highest impact potential.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-2 bg-destructive/5 rounded">
                        <div className="text-sm font-medium">Turkana</div>
                        <div className="text-xs text-muted-foreground">Phase 1</div>
                      </div>
                      <div className="text-center p-2 bg-destructive/5 rounded">
                        <div className="text-sm font-medium">Mandera</div>
                        <div className="text-xs text-muted-foreground">Phase 1</div>
                      </div>
                      <div className="text-center p-2 bg-accent/5 rounded">
                        <div className="text-sm font-medium">Garissa</div>
                        <div className="text-xs text-muted-foreground">Phase 2</div>
                      </div>
                      <div className="text-center p-2 bg-accent/5 rounded">
                        <div className="text-sm font-medium">Isiolo</div>
                        <div className="text-xs text-muted-foreground">Phase 2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-trust mb-2">Geographic Strategy</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Systematic rollout starting with most underserved areas, then expanding to moderate-access regions.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Northern Counties</span>
                        <span className="font-medium">Q1 2024</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Eastern Counties</span>
                        <span className="font-medium">Q2 2024</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Coast Counties</span>
                        <span className="font-medium">Q3 2024</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Central/Western</span>
                        <span className="font-medium">Q4 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-6 shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Megaphone className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-trust mb-2">Community Engagement</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Grassroots marketing through local community leaders, health workers, and trusted organizations.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm">Community health days</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm">Local radio programs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm">Chief and elder meetings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm">Mobile health clinics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-trust mb-2">Digital Marketing</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Multi-channel digital approach targeting both providers and patients through relevant platforms.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-2 bg-accent/5 rounded">
                        <div className="text-sm font-medium">WhatsApp</div>
                        <div className="text-xs text-muted-foreground">Direct reach</div>
                      </div>
                      <div className="text-center p-2 bg-accent/5 rounded">
                        <div className="text-sm font-medium">SMS</div>
                        <div className="text-xs text-muted-foreground">Mass outreach</div>
                      </div>
                      <div className="text-center p-2 bg-accent/5 rounded">
                        <div className="text-sm font-medium">Radio</div>
                        <div className="text-xs text-muted-foreground">Local stations</div>
                      </div>
                      <div className="text-center p-2 bg-accent/5 rounded">
                        <div className="text-sm font-medium">Print</div>
                        <div className="text-xs text-muted-foreground">Newspapers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassador Program */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              Community Health Ambassador Program
            </h2>
            <p className="text-lg text-muted-foreground">
              Empowering local leaders to champion healthcare access in their communities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-trust">Building Trust Through Local Champions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our Community Health Ambassador Program trains and supports local leaders, 
                healthcare workers, and trusted community members to become advocates for 
                improved healthcare access. Ambassadors receive training, resources, and 
                ongoing support to help their communities navigate our platform.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-trust">Community Trust Building</h4>
                    <p className="text-sm text-muted-foreground">Leverage existing relationships and trust within communities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-3 w-3 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-trust">Local Language Support</h4>
                    <p className="text-sm text-muted-foreground">Provide information and support in local languages and dialects</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-3 w-3 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-trust">Ongoing Training & Support</h4>
                    <p className="text-sm text-muted-foreground">Regular training sessions and continuous support for ambassadors</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 shadow-healthcare">
              <h3 className="text-xl font-bold text-trust mb-6">Ambassador Impact</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm font-medium text-trust mb-1">Active Ambassadors</div>
                  <div className="text-xs text-muted-foreground">Across 35 counties</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">8,500</div>
                    <div className="text-xs text-muted-foreground">Patients Connected</div>
                  </div>
                  <div className="text-center p-3 bg-accent/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent">95%</div>
                    <div className="text-xs text-muted-foreground">Satisfaction Rate</div>
                  </div>
                </div>
                
                <Button className="w-full gradient-primary">
                  Become an Ambassador
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Outreach */}
      <section className="py-16 px-4 gradient-soft">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              Partnership & Outreach Contact
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to partner with us or learn more about our outreach programs?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-trust mb-2">Sales Team</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Speak with our sales team about partnership opportunities
              </p>
              <Button className="gradient-primary w-full">
                Call Sales
              </Button>
            </Card>

            <Card className="p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-trust mb-2">Partnership Inquiries</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Email us about healthcare provider partnerships
              </p>
              <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                Send Email
              </Button>
            </Card>

            <Card className="p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-trust mb-2">Community Outreach</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Connect with our outreach team for community programs
              </p>
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Get in Touch
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketing;