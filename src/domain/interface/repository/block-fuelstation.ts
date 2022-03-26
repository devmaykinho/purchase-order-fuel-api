export interface BlockFuelStationRepository {
  run: (fuelStationId: number) => Promise<void>
}
