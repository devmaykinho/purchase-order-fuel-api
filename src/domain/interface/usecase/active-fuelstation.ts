export interface ActiveFuelStation {
  run: (fuelStationId: number) => Promise<void>
}
