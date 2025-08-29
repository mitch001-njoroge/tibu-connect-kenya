import Navigation from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  MapPin, 
  Clock, 
  DollarSign,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChart
} from "lucide-react";

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 gradient-soft">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-trust mb-6">
            Healthcare Access Research
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data-driven insights into Kenya's healthcare access challenges and the impact 
            of our solutions on improving patient outcomes.
          </p>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              Healthcare Access Crisis in Numbers
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding the scope of healthcare access challenges across Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-6 shadow-healthcare text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-destructive" />
              </div>
              <div className="text-3xl font-bold text-destructive mb-2">15.2M</div>
              <div className="text-sm font-medium text-trust mb-1">Underserved Patients</div>
              <div className="text-xs text-muted-foreground">Lack access to nearby healthcare</div>
            </Card>

            <Card className="p-6 shadow-healthcare text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">68km</div>
              <div className="text-sm font-medium text-trust mb-1">Average Travel Distance</div>
              <div className="text-xs text-muted-foreground">To reach healthcare facility</div>
            </Card>

            <Card className="p-6 shadow-healthcare text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">4.5hrs</div>
              <div className="text-sm font-medium text-trust mb-1">Average Journey Time</div>
              <div className="text-xs text-muted-foreground">Including waiting and travel</div>
            </Card>

            <Card className="p-6 shadow-healthcare text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">KSh 2,400</div>
              <div className="text-sm font-medium text-trust mb-1">Average Healthcare Trip Cost</div>
              <div className="text-xs text-muted-foreground">Including transport and time off</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Findings */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              Key Research Findings
            </h2>
            <p className="text-lg text-muted-foreground">
              Insights from our comprehensive study of healthcare access patterns
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6 shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-trust mb-2">Preventable Deaths</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      42% of deaths in rural areas could be prevented with timely access to healthcare services.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Delayed diagnosis</span>
                        <span className="font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Emergency complications</span>
                        <span className="font-medium">23%</span>
                      </div>
                      <Progress value={23} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Chronic disease management</span>
                        <span className="font-medium">12%</span>
                      </div>
                      <Progress value={12} className="h-2" />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-trust mb-2">Broker Exploitation</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      59% of patients are misguided by brokers to distant facilities for financial gain.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-destructive/5 rounded-lg">
                        <div className="text-2xl font-bold text-destructive">KSh 5,200</div>
                        <div className="text-xs text-muted-foreground">Average exploitation cost</div>
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">3.2x</div>
                        <div className="text-xs text-muted-foreground">Distance increase</div>
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
                    <CheckCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-trust mb-2">Early Detection Impact</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Communities with local healthcare access show 78% better early detection rates.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Diabetes detection</span>
                        <span className="font-medium">84%</span>
                      </div>
                      <Progress value={84} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Hypertension detection</span>
                        <span className="font-medium">79%</span>
                      </div>
                      <Progress value={79} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Cancer screening</span>
                        <span className="font-medium">71%</span>
                      </div>
                      <Progress value={71} className="h-2" />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PieChart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-trust mb-2">Economic Impact</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Local healthcare access reduces household healthcare spending by 67% on average.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-secondary/5 rounded-lg">
                        <div className="text-2xl font-bold text-secondary">KSh 1,600</div>
                        <div className="text-xs text-muted-foreground">Monthly savings per family</div>
                      </div>
                      <div className="text-center p-3 bg-trust/5 rounded-lg">
                        <div className="text-2xl font-bold text-trust">85%</div>
                        <div className="text-xs text-muted-foreground">Work time saved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* County Analysis */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              County-Level Analysis
            </h2>
            <p className="text-lg text-muted-foreground">
              Healthcare access challenges vary significantly across Kenya's 47 counties
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-trust">Most Underserved Counties</h3>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Turkana</span>
                  <span className="text-sm font-medium text-destructive">92km avg distance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Mandera</span>
                  <span className="text-sm font-medium text-destructive">87km avg distance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Wajir</span>
                  <span className="text-sm font-medium text-destructive">83km avg distance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Marsabit</span>
                  <span className="text-sm font-medium text-destructive">79km avg distance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Samburu</span>
                  <span className="text-sm font-medium text-destructive">74km avg distance</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-trust">Moderate Access Counties</h3>
                <Badge variant="secondary">Improving</Badge>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Garissa</span>
                  <span className="text-sm font-medium text-accent">45km avg distance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Isiolo</span>
                  <span className="text-sm font-medium text-accent">42km avg distance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Tana River</span>
                  <span className="text-sm font-medium text-accent">39km avg distance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Lamu</span>
                  <span className="text-sm font-medium text-accent">36km avg distance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Taita Taveta</span>
                  <span className="text-sm font-medium text-accent">33km avg distance</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-trust">Best Access Counties</h3>
                <Badge className="bg-secondary text-secondary-foreground">Optimal</Badge>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Nairobi</span>
                  <span className="text-sm font-medium text-secondary">8km avg distance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Mombasa</span>
                  <span className="text-sm font-medium text-secondary">12km avg distance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Kisumu</span>
                  <span className="text-sm font-medium text-secondary">15km avg distance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Nakuru</span>
                  <span className="text-sm font-medium text-secondary">18km avg distance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Kiambu</span>
                  <span className="text-sm font-medium text-secondary">21km avg distance</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Impact */}
      <section className="py-16 px-4 gradient-soft">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
              TIBU Health-Connect Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Measurable improvements in healthcare access and outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">75%</div>
              <div className="text-sm font-medium text-trust mb-1">Reduction in Travel Distance</div>
              <div className="text-xs text-muted-foreground">Average across all counties</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">85%</div>
              <div className="text-sm font-medium text-trust mb-1">Early Detection Rate</div>
              <div className="text-xs text-muted-foreground">Preventive care improvement</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-destructive" />
              </div>
              <div className="text-3xl font-bold text-destructive mb-2">60%</div>
              <div className="text-sm font-medium text-trust mb-1">Reduction in Preventable Deaths</div>
              <div className="text-xs text-muted-foreground">Due to delayed care</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">KSh 1.8B</div>
              <div className="text-sm font-medium text-trust mb-1">Healthcare Savings</div>
              <div className="text-xs text-muted-foreground">Annually across Kenya</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;