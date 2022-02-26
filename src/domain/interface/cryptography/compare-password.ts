export interface ComparePassword {
  compare: (value: string, hash: string) => Promise<boolean>
}
