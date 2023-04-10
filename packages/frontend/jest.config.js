const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './report',
        filename: 'verboseResult.html',
        expand: true,
      },
    ],
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  coveragePathIgnorePatterns: [],
}

module.exports = createJestConfig(customJestConfig)