import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";

// Generate dummy prediction data
const generatePredictionData = () => {
  const data = [];
  const now = new Date();
  
  for (let i = 0; i < 24; i++) {
    const hour = new Date(now.getTime() + i * 60 * 60 * 1000);
    const hourString = hour.getHours().toString().padStart(2, '0') + ':00';
    
    // Simulate realistic parking patterns
    let baseOccupancy = 40;
    const hourOfDay = hour.getHours();
    
    // Higher occupancy during business hours (9-17)
    if (hourOfDay >= 9 && hourOfDay <= 17) {
      baseOccupancy = 70 + Math.random() * 20;
    } 
    // Medium occupancy during evening (18-21)
    else if (hourOfDay >= 18 && hourOfDay <= 21) {
      baseOccupancy = 50 + Math.random() * 15;
    }
    // Lower occupancy at night
    else {
      baseOccupancy = 20 + Math.random() * 15;
    }
    
    const totalSlots = 100;
    const occupied = Math.round(baseOccupancy);
    const available = totalSlots - occupied;
    
    data.push({
      time: hourString,
      available,
      occupied,
      total: totalSlots,
    });
  }
  
  return data;
};

const predictionData = generatePredictionData();

const PredictionChart = () => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={predictionData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorAvailable" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorOccupied" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            dataKey="time" 
            className="text-xs"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            className="text-xs"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '0.5rem',
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="available"
            stroke="hsl(var(--success))"
            fillOpacity={1}
            fill="url(#colorAvailable)"
            name="Available Slots"
          />
          <Area
            type="monotone"
            dataKey="occupied"
            stroke="hsl(var(--destructive))"
            fillOpacity={1}
            fill="url(#colorOccupied)"
            name="Occupied Slots"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PredictionChart;
