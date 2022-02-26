module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/config.ts',
    '!<rootDir>/src/main/config/**',
    '!<rootDir>/src/main/server.ts',
    '!<rootDir>/src/main/types/**',
    '!<rootDir>/src/main/adapters/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
