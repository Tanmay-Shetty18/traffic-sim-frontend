export const mockTrips = [
  {
    path: [[72.877, 19.076], [72.879, 19.078], [72.881, 19.080]],
    timestamps: [0, 10, 20],
    vehicleType: 'car',
  },
  {
    path: [[72.876, 19.075], [72.878, 19.077], [72.880, 19.079]],
    timestamps: [0, 5, 15],
    vehicleType: 'twoWheeler',
  },
];

export const mockSpeedOverTime = [
  { time: 0, avgSpeed: 24 },
  { time: 10, avgSpeed: 21 },
  { time: 20, avgSpeed: 19 },
  { time: 30, avgSpeed: 23 },
  { time: 40, avgSpeed: 20 },
];

export const mockVehicleMix = [
  { type: 'car', count: 120 },
  { type: 'twoWheeler', count: 340 },
  { type: 'auto', count: 80 },
  { type: 'bus', count: 25 },
];

export const mockValidation = { mape: 8.4, geh: 3.1 };

export const mockSimulationResult = {
  trips: mockTrips,
  speedOverTime: mockSpeedOverTime,
  vehicleMix: mockVehicleMix,
  validation: mockValidation,
};