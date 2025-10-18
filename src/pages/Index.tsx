import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ParkingSquare, Zap, Camera, TrendingUp, Shield, Clock, Star, ArrowRight, CheckCircle, Users, Award, Globe } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Slots", value: "100", icon: ParkingSquare, change: "+12%" },
    { label: "Available Now", value: "67", icon: Zap, change: "+5%" },
    { label: "Active Bookings", value: "28", icon: Clock, change: "+18%" },
  ];

  const features = [
    {
      icon: Camera,
      title: "Automatic ANPR",
      description: "AI-powered number plate recognition for seamless check-in and check-out",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: TrendingUp,
      title: "Smart Predictions",
      description: "Real-time availability forecasts using advanced time-series models",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Pre-authorized payments with automatic refunds and full transparency",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      content: "SmartPark has revolutionized how I manage parking. The AI predictions are incredibly accurate!",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Fleet Manager",
      content: "The automatic check-in/out system saves us hours every day. Highly recommended!",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      content: "Our occupancy rates increased by 40% since implementing SmartPark. Amazing results!",
      rating: 5,
      avatar: "ER",
    },
  ];

  const benefits = [
    "Real-time availability tracking",
    "Automated payment processing",
    "AI-powered demand forecasting",
    "24/7 customer support",
    "Mobile app integration",
    "Detailed analytics dashboard",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ParkingSquare className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">SmartPark</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Reviews</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
              <Button onClick={() => navigate("/login")} size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-32 px-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 animate-fade-in">
            🚀 Now with AI-Powered Predictions
          </Badge>
          
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <ParkingSquare className="h-20 w-20 text-white animate-float" />
              <div className="absolute inset-0 h-20 w-20 bg-white/20 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Smart Parking,
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-glow">
              Simplified
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Experience the future of parking with AI-powered slot detection, 
            real-time predictions, and fully automated check-in/check-out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-2xl px-8 py-6 text-lg font-semibold group animate-glow hover:animate-none"
              onClick={() => navigate("/login")}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform"
              onClick={() => navigate("/dashboard")}
            >
              View Live Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/70 animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Users className="h-5 w-5 animate-pulse" />
              <span>10,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Award className="h-5 w-5 animate-pulse" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Globe className="h-5 w-5 animate-pulse" />
              <span>50+ Cities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full ${stat.label === 'Total Slots' ? 'bg-blue-100' : stat.label === 'Available Now' ? 'bg-green-100' : 'bg-orange-100'} hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${stat.label === 'Total Slots' ? 'text-blue-600' : stat.label === 'Available Now' ? 'text-green-600' : 'text-orange-600'} animate-pulse`} />
                    </div>
                    <Badge variant="secondary" className="text-green-600 bg-green-100 animate-bounce">
                      {stat.change}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">{stat.label}</p>
                    <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-32">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 animate-bounce">
            ✨ Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Powered by Advanced Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Our system combines cutting-edge AI, machine learning models, and smart automation 
            to deliver a seamless and intelligent parking experience.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-0 bg-white shadow-lg animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="pb-6">
                  <div className={`h-16 w-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
                    <Icon className={`h-8 w-8 ${feature.color} group-hover:rotate-12 transition-transform duration-300`} />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-4">{feature.title}</CardTitle>
                  <CardDescription className="text-lg leading-relaxed text-gray-600">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Why Choose SmartPark?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Join thousands of satisfied customers who have transformed their parking operations
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 animate-pulse" />
                <span className="text-lg font-medium text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4 py-32">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-4 bg-green-100 text-green-700 border-green-200 animate-bounce">
            ⭐ Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Don't just take our word for it. Here's what real customers have to say about SmartPark.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    <AvatarFallback className="bg-primary text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <CardDescription className="text-lg leading-relaxed">
                  "{testimonial.content}"
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 py-32 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-glow">
              Parking Experience?
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Join thousands of satisfied customers who trust SmartPark for efficient, 
            automated parking management. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-2xl px-10 py-6 text-lg font-semibold group animate-glow hover:animate-none"
              onClick={() => navigate("/login")}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold hover:scale-105 transition-transform"
              onClick={() => navigate("/dashboard")}
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-white/70 mt-8 text-sm animate-fade-in" style={{ animationDelay: "0.6s" }}>
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4 animate-fade-in-left">
              <div className="flex items-center space-x-2">
                <ParkingSquare className="h-8 w-8 text-primary animate-float" />
                <span className="text-xl font-bold">SmartPark</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                The future of parking management. AI-powered, automated, and intelligent.
              </p>
            </div>
            
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform">Documentation</a></li>
              </ul>
            </div>
            
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-4 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SmartPark. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
