import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Car, Bike, Zap, TrendingUp, ArrowLeft, Home } from "lucide-react";
import PredictionChart from "@/components/PredictionChart";

type VehicleType = "all" | "car" | "bike" | "ev";
type SlotStatus = "available" | "occupied" | "reserved";

interface ParkingSlot {
  id: string;
  number: string;
  type: "car" | "bike" | "ev";
  status: SlotStatus;
  price: number;
  location: string;
}

const dummySlots: ParkingSlot[] = [
  { id: "1", number: "A1", type: "car", status: "available", price: 50, location: "Ground Floor" },
  { id: "2", number: "A2", type: "car", status: "occupied", price: 50, location: "Ground Floor" },
  { id: "3", number: "A3", type: "car", status: "available", price: 50, location: "Ground Floor" },
  { id: "4", number: "B1", type: "bike", status: "available", price: 20, location: "Ground Floor" },
  { id: "5", number: "B2", type: "bike", status: "reserved", price: 20, location: "Ground Floor" },
  { id: "6", number: "B3", type: "bike", status: "available", price: 20, location: "Ground Floor" },
  { id: "7", number: "E1", type: "ev", status: "available", price: 75, location: "First Floor" },
  { id: "8", number: "E2", type: "ev", status: "occupied", price: 75, location: "First Floor" },
  { id: "9", number: "A4", type: "car", status: "available", price: 50, location: "First Floor" },
  { id: "10", number: "A5", type: "car", status: "available", price: 50, location: "First Floor" },
  { id: "11", number: "B4", type: "bike", status: "available", price: 20, location: "First Floor" },
  { id: "12", number: "E3", type: "ev", status: "available", price: 75, location: "First Floor" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<VehicleType>("all");
  const [selectedSlot, setSelectedSlot] = useState<ParkingSlot | null>(null);

  const userEmail = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const filteredSlots = dummySlots.filter(
    slot => filter === "all" || slot.type === filter
  );

  const availableCount = filteredSlots.filter(s => s.status === "available").length;
  const occupiedCount = filteredSlots.filter(s => s.status === "occupied").length;
  const reservedCount = filteredSlots.filter(s => s.status === "reserved").length;

  const handleBookSlot = (slot: ParkingSlot) => {
    setSelectedSlot(slot);
    navigate("/payment", { state: { slot } });
  };

  const handleTestExitPayment = () => {
    const parkingSession = {
      vehicleNumber: "KA 01 AB 1234",
      vehicleType: "car",
      entryTime: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString(),
      exitTime: new Date().toISOString(),
      ratePerMinute: 2,
      location: "Parking Zone A"
    };
    navigate("/payment", { state: { parkingSession } });
  };

  const getStatusColor = (status: SlotStatus) => {
    switch (status) {
      case "available": return "bg-success";
      case "occupied": return "bg-destructive";
      case "reserved": return "bg-warning";
    }
  };

  const getStatusBadge = (status: SlotStatus) => {
    const variants = {
      available: "default",
      occupied: "destructive",
      reserved: "secondary",
    } as const;
    return variants[status];
  };

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case "car": return <Car className="h-5 w-5" />;
      case "bike": return <Bike className="h-5 w-5" />;
      case "ev": return <Zap className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBackToHome}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-2xl font-bold text-foreground">SmartPark Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{userEmail}</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="booking" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="booking">Slot Booking</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="booking" className="space-y-6">
            {/* Test Exit Payment Button */}
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Test Exit Payment Flow</h3>
                    <p className="text-sm text-muted-foreground">
                      Simulate a vehicle exit with entry/exit times and per-minute charges
                    </p>
                  </div>
                  <Button onClick={handleTestExitPayment} variant="default">
                    <Car className="h-4 w-4 mr-2" />
                    Test Exit Payment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Available Slots</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-success">{availableCount}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Occupied Slots</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-destructive">{occupiedCount}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Reserved Slots</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-warning">{reservedCount}</div>
                </CardContent>
              </Card>
            </div>

            {/* Filter Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Filter by Vehicle Type</CardTitle>
                <CardDescription>Select the type of parking slot you need</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={filter === "all" ? "default" : "outline"}
                    onClick={() => setFilter("all")}
                  >
                    All Slots
                  </Button>
                  <Button
                    variant={filter === "car" ? "default" : "outline"}
                    onClick={() => setFilter("car")}
                  >
                    <Car className="h-4 w-4 mr-2" />
                    Cars
                  </Button>
                  <Button
                    variant={filter === "bike" ? "default" : "outline"}
                    onClick={() => setFilter("bike")}
                  >
                    <Bike className="h-4 w-4 mr-2" />
                    Bikes
                  </Button>
                  <Button
                    variant={filter === "ev" ? "default" : "outline"}
                    onClick={() => setFilter("ev")}
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    EV Charging
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Slots Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredSlots.map((slot) => (
                <Card key={slot.id} className="relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 ${getStatusColor(slot.status)}`} />
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-bold">{slot.number}</CardTitle>
                      {getVehicleIcon(slot.type)}
                    </div>
                    <CardDescription>{slot.location}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Status:</span>
                      <Badge variant={getStatusBadge(slot.status)} className="capitalize">
                        {slot.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Price:</span>
                      <span className="font-semibold">₹{slot.price}/hr</span>
                    </div>
                    <Button
                      className="w-full"
                      disabled={slot.status !== "available"}
                      onClick={() => handleBookSlot(slot)}
                    >
                      {slot.status === "available" ? "Book Now" : "Unavailable"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Availability Prediction
                </CardTitle>
                <CardDescription>
                  AI-powered forecast of parking slot availability for the next 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PredictionChart />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
