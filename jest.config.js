/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest', 
  testEnvironment: 'node', 
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    "**/src/tests/**/*.test.ts",
    "**/src/tests/**/*.endpoint.test.ts"
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  verbose: true,
};
