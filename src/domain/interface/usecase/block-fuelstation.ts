export interface BlockFuelStation {
  run: (fuelStationId: number) => Promise<void>
}
