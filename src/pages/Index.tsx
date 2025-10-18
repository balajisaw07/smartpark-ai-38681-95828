import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ParkingSquare, Zap, Camera, TrendingUp, Shield, Clock } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Slots", value: "100", icon: ParkingSquare },
    { label: "Available Now", value: "67", icon: Zap },
    { label: "Active Bookings", value: "28", icon: Clock },
  ];

  const features = [
    {
      icon: Camera,
      title: "Automatic ANPR",
      description: "AI-powered number plate recognition for seamless check-in and check-out",
    },
    {
      icon: TrendingUp,
      title: "Smart Predictions",
      description: "Real-time availability forecasts using advanced time-series models",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Pre-authorized payments with automatic refunds and full transparency",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <ParkingSquare className="h-16 w-16 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart Parking, <span className="text-primary-glow">Simplified</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the future of parking with AI-powered slot detection, 
            real-time predictions, and fully automated check-in/check-out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow"
              onClick={() => navigate("/login")}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate("/dashboard")}
            >
              View Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-10">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                    </div>
                    <Icon className="h-12 w-12 text-primary opacity-50" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powered by Advanced Technology
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our system combines AI, prediction models, and smart automation 
            to deliver a seamless parking experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card border-t py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Parking Experience?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of users who trust SmartPark for efficient, 
            automated parking management.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/login")}
          >
            Start Parking Smarter Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
