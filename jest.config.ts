export default {
  clearMocks: true,
  collectCoverage: true,
  roots: ['<rootDir>/app'],
  collectCoverageFrom: ['<rootDir>./app/**/*.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coverageDirectory: 'coverage',
  testMatch: ['**/*.spec.ts'],
  coverageProvider: 'v8'
}
