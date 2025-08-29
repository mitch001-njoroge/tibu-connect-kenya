import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Search, ChevronDown } from "lucide-react";

const CountySelector = () => {
  const [selectedCounty, setSelectedCounty] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const kenyanCounties = [
    "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret",
    "Thika", "Malindi", "Kitale", "Garissa", "Kakamega",
    "Meru", "Nyeri", "Machakos", "Kericho", "Embu",
    "Migori", "Bungoma", "Lamu", "Narok", "Voi",
    "Webuye", "Mumias", "Wajir", "Busia", "Homa Bay",
    "Isiolo", "Kapenguria", "Maralal", "Marsabit", "Moyale",
    "Lodwar", "Mandera", "Wote", "Chuka", "Kerugoya",
    "Kiambu", "Ruiru", "Limuru", "Githunguri", "Karuri",
    "Murang'a", "Kenol", "Makuyu", "Kangema", "Kigumo",
    "Nyahururu", "Ol Kalou"
  ];

  const handleCountySelect = (county: string) => {
    setSelectedCounty(county);
    setIsOpen(false);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">
            Find Healthcare in Your County
          </h2>
          <p className="text-lg text-muted-foreground">
            Select your county to discover nearby healthcare providers, clinics, and doctors
          </p>
        </div>

        <Card className="p-8 shadow-healthcare">
          <div className="space-y-6">
            {/* County Dropdown */}
            <div className="relative">
              <Button
                variant="outline"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full justify-between h-12 text-left"
              >
                <span className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-primary" />
                  {selectedCounty || "Select your county"}
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </Button>

              {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-soft max-h-60 overflow-y-auto z-50">
                  {kenyanCounties.map((county) => (
                    <button
                      key={county}
                      onClick={() => handleCountySelect(county)}
                      className="w-full text-left px-4 py-2 hover:bg-muted transition-smooth"
                    >
                      {county}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <Button 
              size="lg" 
              className="w-full gradient-primary shadow-healthcare"
              disabled={!selectedCounty}
            >
              <Search className="mr-2 h-5 w-5" />
              Find Healthcare Providers in {selectedCounty || "Your County"}
            </Button>

            {/* Sample Results Preview */}
            {selectedCounty && (
              <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                <h3 className="font-semibold text-trust mb-4">
                  Healthcare Providers in {selectedCounty}:
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg shadow-soft">
                    <div>
                      <p className="font-medium">{selectedCounty} County Hospital</p>
                      <p className="text-sm text-muted-foreground">General Healthcare • 2.5km away</p>
                    </div>
                    <Button size="sm" variant="outline">Connect</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg shadow-soft">
                    <div>
                      <p className="font-medium">Dr. Jane Mwangi Clinic</p>
                      <p className="text-sm text-muted-foreground">Family Medicine • 1.8km away</p>
                    </div>
                    <Button size="sm" variant="outline">Connect</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg shadow-soft">
                    <div>
                      <p className="font-medium">{selectedCounty} Wellness Center</p>
                      <p className="text-sm text-muted-foreground">Preventive Care • 3.1km away</p>
                    </div>
                    <Button size="sm" variant="outline">Connect</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CountySelector;