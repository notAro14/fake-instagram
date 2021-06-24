// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.(png)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(@hookform)/)'],
}

module.exports = config
