import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { ArrowLeft, CheckCircle2, CreditCard, Car, Clock } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const slot = location.state?.slot;
  const parkingSession = location.state?.parkingSession;

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentMode, setPaymentMode] = useState("card");
  const [processing, setProcessing] = useState(false);

  // Generate dummy parking session if not provided
  const session = parkingSession || {
    vehicleNumber: "KA 01 AB 1234",
    vehicleType: "car",
    entryTime: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString(),
    exitTime: new Date().toISOString(),
    ratePerMinute: 2,
    location: "Parking Zone A"
  };

  const calculateDuration = () => {
    const entry = new Date(session.entryTime);
    const exit = new Date(session.exitTime);
    const diffMs = exit.getTime() - entry.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    return diffMins;
  };

  const duration = calculateDuration();
  const totalAmount = duration * session.ratePerMinute;

  const isPreBooking = !!slot;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      if (isPreBooking) {
        toast.success("Payment pre-authorized successfully!", {
          description: "Your parking slot has been reserved.",
          icon: <CheckCircle2 className="h-5 w-5" />,
        });
      } else {
        toast.success("Payment successful!", {
          description: `₹${totalAmount} charged for ${duration} minutes of parking.`,
          icon: <CheckCircle2 className="h-5 w-5" />,
        });
      }
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Side - Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                {isPreBooking ? "Booking Summary" : "Parking Details"}
              </CardTitle>
              <CardDescription>
                {isPreBooking ? "Review your parking reservation" : "Review your parking session"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isPreBooking ? (
                <>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Slot Number:</span>
                      <span className="font-semibold">{slot.number}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-semibold">{slot.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vehicle Type:</span>
                      <span className="font-semibold capitalize">{slot.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rate:</span>
                      <span className="font-semibold">₹{slot.price}/hour</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Pre-authorization Amount:</span>
                      <span>₹{slot.price * 4}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Estimated Duration:</span>
                      <span>Up to 4 hours</span>
                    </div>
                    <div className="rounded-lg bg-muted p-3 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground mb-1">Payment Policy:</p>
                      <ul className="space-y-1 text-xs">
                        <li>• Amount will be pre-authorized, not charged immediately</li>
                        <li>• Final charge based on actual parking duration</li>
                        <li>• Unused amount will be refunded automatically</li>
                        <li>• Full refund if booking cannot be honored</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Pre-auth Total:</span>
                    <span className="text-primary">₹{slot.price * 4}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Car className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-lg">{session.vehicleNumber}</span>
                      </div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {session.vehicleType} • {session.location}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Entry Time</span>
                        </div>
                        <span className="font-semibold">
                          {new Date(session.entryTime).toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Exit Time</span>
                        </div>
                        <span className="font-semibold">
                          {new Date(session.exitTime).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{duration} minutes</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Rate per Minute:</span>
                        <span className="font-medium">₹{session.ratePerMinute}</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between text-xl font-bold">
                      <span>Total Payment:</span>
                      <span className="text-primary">₹{totalAmount}</span>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Right Side - Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Method
              </CardTitle>
              <CardDescription>
                Choose your preferred payment method
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePayment} className="space-y-4">
                <div className="space-y-3">
                  <Label>Payment Mode</Label>
                  <RadioGroup value={paymentMode} onValueChange={setPaymentMode}>
                    <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        Credit/Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="flex-1 cursor-pointer">
                        UPI
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                      <RadioGroupItem value="wallet" id="wallet" />
                      <Label htmlFor="wallet" className="flex-1 cursor-pointer">
                        Digital Wallet
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                      <RadioGroupItem value="netbanking" id="netbanking" />
                      <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                        Net Banking
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Separator />

                {paymentMode === "card" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        maxLength={19}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                          maxLength={5}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          type="password"
                          placeholder="123"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          maxLength={3}
                          required
                        />
                      </div>
                    </div>

                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm">
                      <p className="font-medium text-primary mb-2">Test Card Details:</p>
                      <p className="text-muted-foreground">Card: 4111 1111 1111 1111</p>
                      <p className="text-muted-foreground">Expiry: Any future date</p>
                      <p className="text-muted-foreground">CVV: Any 3 digits</p>
                    </div>
                  </>
                )}

                {paymentMode === "upi" && (
                  <div className="space-y-2">
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input
                      id="upiId"
                      placeholder="username@upi"
                      required
                    />
                  </div>
                )}

                {paymentMode === "wallet" && (
                  <div className="space-y-2">
                    <Label htmlFor="walletNumber">Wallet Number</Label>
                    <Input
                      id="walletNumber"
                      placeholder="Enter your wallet number"
                      required
                    />
                  </div>
                )}

                {paymentMode === "netbanking" && (
                  <div className="space-y-2">
                    <Label htmlFor="bank">Select Bank</Label>
                    <select
                      id="bank"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Choose your bank</option>
                      <option value="sbi">State Bank of India</option>
                      <option value="hdfc">HDFC Bank</option>
                      <option value="icici">ICICI Bank</option>
                      <option value="axis">Axis Bank</option>
                    </select>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={processing}
                >
                  {processing ? (
                    "Processing..."
                  ) : (
                    `Pay ₹${isPreBooking ? slot.price * 4 : totalAmount}`
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Your payment information is secure and encrypted
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payment;
