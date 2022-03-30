export interface ActiveFuelStationRepository {
  run: (fuelStationId: number) => Promise<void>
}
