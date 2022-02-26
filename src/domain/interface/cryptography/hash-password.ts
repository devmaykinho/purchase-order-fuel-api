export interface HashPassword {
  hash: (plaintext: string) => Promise<string>
}
