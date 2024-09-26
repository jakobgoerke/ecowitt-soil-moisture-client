/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/build'],
  preset: 'ts-jest',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
};
