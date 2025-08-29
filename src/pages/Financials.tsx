import Navigation from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  TrendingUp, 
  CreditCard, 
  Users, 
  Building, 
  Target,
  PieChart,
  BarChart3,
  Calculator,
  Wallet,
  Clock,
  CheckCircle
} from "lucide-react";

const Financials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 gradient-soft">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-trust mb-6">
            Financial Overview
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sustainable revenue model designed to scale healthcare access while 
            maintaining affordability for underserved communities.
          </p>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              Revenue Model
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple revenue streams ensuring platform sustainability and growth
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 shadow-healthcare hover:shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-trust mb-4">Provider Subscriptions</h3>
              <p className="text-muted-foreground mb-6">
                Monthly subscription fees from healthcare providers for platform access, 
                patient management tools, and marketing benefits.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Basic Plan</span>
                  <Badge variant="secondary">KSh 2,500/month</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Premium Plan</span>
                  <Badge className="bg-primary text-primary-foreground">KSh 5,000/month</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Enterprise Plan</span>
                  <Badge className="bg-secondary text-secondary-foreground">KSh 10,000/month</Badge>
                </div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">65%</div>
                <div className="text-xs text-muted-foreground">Of total revenue</div>
              </div>
            </Card>

            <Card className="p-8 shadow-healthcare hover:shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Wallet className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-trust mb-4">Premium Patient Services</h3>
              <p className="text-muted-foreground mb-6">
                Optional premium services for patients including priority booking, 
                extended digital health tools, and telemedicine consultations.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Priority Access</span>
                  <Badge variant="secondary">KSh 500/month</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Digital Health Plus</span>
                  <Badge className="bg-secondary text-secondary-foreground">KSh 300/month</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Telemedicine</span>
                  <Badge className="bg-accent text-accent-foreground">KSh 200/consultation</Badge>
                </div>
              </div>
              <div className="text-center p-4 bg-secondary/5 rounded-lg">
                <div className="text-2xl font-bold text-secondary">20%</div>
                <div className="text-xs text-muted-foreground">Of total revenue</div>
              </div>
            </Card>

            <Card className="p-8 shadow-healthcare hover:shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-trust mb-4">Strategic Partnerships</h3>
              <p className="text-muted-foreground mb-6">
                Revenue sharing agreements with pharmaceutical companies, insurance providers, 
                and government health programs.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Insurance Partnerships</span>
                  <Badge variant="secondary">5% commission</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pharma Referrals</span>
                  <Badge className="bg-accent text-accent-foreground">3% commission</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Government Contracts</span>
                  <Badge className="bg-trust text-trust-foreground">Fixed fees</Badge>
                </div>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <div className="text-2xl font-bold text-accent">15%</div>
                <div className="text-xs text-muted-foreground">Of total revenue</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              Financial Projections
            </h2>
            <p className="text-lg text-muted-foreground">
              5-year growth projection based on market analysis and expansion plans
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 shadow-soft">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-trust">Revenue Growth</h3>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Year 1 (2024)</span>
                    <span className="font-medium">KSh 45M</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Year 2 (2025)</span>
                    <span className="font-medium">KSh 120M</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Year 3 (2026)</span>
                    <span className="font-medium">KSh 280M</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Year 4 (2027)</span>
                    <span className="font-medium">KSh 420M</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Year 5 (2028)</span>
                    <span className="font-medium">KSh 650M</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-trust">Key Metrics</h3>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="text-xl font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground">Active Providers</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/5 rounded-lg">
                    <div className="text-xl font-bold text-secondary">15,000+</div>
                    <div className="text-xs text-muted-foreground">Monthly Active Users</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-accent/5 rounded-lg">
                    <div className="text-xl font-bold text-accent">KSh 4,200</div>
                    <div className="text-xs text-muted-foreground">Avg Revenue Per Provider</div>
                  </div>
                  <div className="text-center p-3 bg-trust/5 rounded-lg">
                    <div className="text-xl font-bold text-trust">85%</div>
                    <div className="text-xs text-muted-foreground">Provider Retention Rate</div>
                  </div>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-trust mb-2">Growth Drivers</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-secondary" />
                      <span>County expansion (47 counties by 2026)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-secondary" />
                      <span>Premium service adoption (30% by 2027)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-secondary" />
                      <span>Government partnerships</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost Savings for Patients */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              Patient Cost Savings
            </h2>
            <p className="text-lg text-muted-foreground">
              Significant cost reductions for patients through reduced travel and early intervention
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-destructive" />
              </div>
              <div className="text-3xl font-bold text-destructive mb-2">KSh 2,400</div>
              <div className="text-sm font-medium text-trust mb-1">Traditional Healthcare Trip</div>
              <div className="text-xs text-muted-foreground">Including transport, time off work</div>
            </Card>

            <Card className="p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">KSh 600</div>
              <div className="text-sm font-medium text-trust mb-1">TIBU Platform Trip</div>
              <div className="text-xs text-muted-foreground">Local provider, reduced travel</div>
            </Card>

            <Card className="p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">KSh 1,800</div>
              <div className="text-sm font-medium text-trust mb-1">Average Savings Per Visit</div>
              <div className="text-xs text-muted-foreground">75% cost reduction</div>
            </Card>

            <Card className="p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">KSh 21,600</div>
              <div className="text-sm font-medium text-trust mb-1">Annual Family Savings</div>
              <div className="text-xs text-muted-foreground">Based on 12 visits per year</div>
            </Card>
          </div>

          <Card className="p-8 shadow-healthcare">
            <h3 className="text-2xl font-bold text-trust mb-6 text-center">
              Healthcare Cost Breakdown Comparison
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-destructive">Traditional Healthcare Journey</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-destructive/5 rounded">
                    <span className="text-sm">Transport to distant facility</span>
                    <span className="font-medium">KSh 800</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-destructive/5 rounded">
                    <span className="text-sm">Lost income (time off work)</span>
                    <span className="font-medium">KSh 1,200</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-destructive/5 rounded">
                    <span className="text-sm">Accommodation (if overnight)</span>
                    <span className="font-medium">KSh 400</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-destructive/10 rounded font-semibold">
                    <span>Total Cost</span>
                    <span className="text-destructive">KSh 2,400</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-secondary">TIBU Health-Connect Journey</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary/5 rounded">
                    <span className="text-sm">Transport to local provider</span>
                    <span className="font-medium">KSh 200</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/5 rounded">
                    <span className="text-sm">Minimal time off work</span>
                    <span className="font-medium">KSh 300</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/5 rounded">
                    <span className="text-sm">Premium service (optional)</span>
                    <span className="font-medium">KSh 100</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/10 rounded font-semibold">
                    <span>Total Cost</span>
                    <span className="text-secondary">KSh 600</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-16 px-4 gradient-soft">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              Economic Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Broader economic benefits of improved healthcare access
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <PieChart className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">KSh 1.8B</div>
              <div className="text-sm font-medium text-trust mb-1">Annual Healthcare Savings</div>
              <div className="text-xs text-muted-foreground">Across all platform users</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-secondary mb-2">12,000</div>
              <div className="text-sm font-medium text-trust mb-1">Jobs Created</div>
              <div className="text-xs text-muted-foreground">Direct and indirect employment</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">2.5%</div>
              <div className="text-sm font-medium text-trust mb-1">GDP Impact</div>
              <div className="text-xs text-muted-foreground">Healthcare sector contribution</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Financials;